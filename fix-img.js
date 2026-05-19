const fs = require('fs');
const path = require('path');

const dir = './app/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('<img')) continue;

  let importsToAdd = [];
  let importCounter = 1;
  let hasImageImport = content.includes('import Image from');

  // Convert <img ...></img> to <img ... />
  content = content.replace(/<img([^>]*)><\/img>/g, '<img$1 />');

  // Handle src="/path.svg"
  content = content.replace(/<img([^>]*)src="\/([^"]+)"([^>]*)\/?>/g, (match, before, srcPath, after) => {
    let baseName = srcPath.replace(/[^a-zA-Z0-9]/g, '');
    if (!baseName) baseName = 'img';
    const importName = `${baseName}${importCounter++}`;
    importsToAdd.push(`import ${importName} from "@/public/${srcPath}";`);
    
    // Add alt if missing
    let attrs = before + after;
    if (!attrs.includes('alt=')) {
      attrs += ' alt=""';
    }

    return `<Image src={${importName}} ${attrs} />`;
  });

  // Handle src={itm.src} in arrays
  content = content.replace(/\{\s*src:\s*"\/([^"]+)"\s*\}/g, (match, srcPath) => {
    let baseName = srcPath.replace(/[^a-zA-Z0-9]/g, '');
    if (!baseName) baseName = 'img';
    const importName = `${baseName}${importCounter++}`;
    importsToAdd.push(`import ${importName} from "@/public/${srcPath}";`);
    return `{ src: ${importName} }`;
  });

  // Replace any remaining <img ... />
  content = content.replace(/<img([^>]*)\/?>/g, (match, attrs) => {
    if (!attrs.includes('alt=')) {
      attrs += ' alt=""';
    }
    return `<Image${attrs} />`;
  });

  if (importsToAdd.length > 0) {
    if (!hasImageImport) {
      importsToAdd.unshift('import Image from "next/image";');
    }
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + importsToAdd.join('\n') + '\n' + content.slice(endOfLine + 1);
    } else {
      content = importsToAdd.join('\n') + '\n' + content;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
