"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Robot_2 } from "../models/robot-2";

export default function Scene_2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <div className="w-full h-full ">
      <Canvas camera={{ position: [3, 2, 5.5], fov: 65 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 4, 6]} />

        <Robot_2 scale={1.7} position={[0, -1, 0]} />
        {!isMobile && <OrbitControls enableZoom={false}/>}
      </Canvas>
    </div>
  );
}
