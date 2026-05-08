import Image from "next/image";

import Scene_1 from "./scenes/scene-1";
import Hero from "./components/Hero";
import Abstraction from "./components/Abstraction";
import Geenerative from "./components/Geenerative";
import Generative_3D from "./components/Generative_3D";

export default function Home() {
  return (
  <div className="w-full h-full px-4  mx-auto 2xl:container">
    <Hero />
    <Abstraction />
    <Generative_3D />
    

  </div>
  );
}
