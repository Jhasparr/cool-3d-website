"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Car_1 } from "../models/car-1";

export default function Scene_4() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
     <div className="w-full h-full">
          <Canvas camera={{ position: [0, 0, 8.5], fov: 65 }}>
            <ambientLight intensity={1.5} />
    
            <directionalLight position={[5, 10, 5]} intensity={1} />
    
            <directionalLight position={[-5, 5, -5]} intensity={1} />
            <hemisphereLight
              color={"#ffffff"}
              groundColor={"#444444"}
              intensity={1}
            />
            <directionalLight position={[0, -5, 5]} intensity={5} />
    
            <Car_1 scale={2.5} position={[0, 0, 0]} />
            {!isMobile && <OrbitControls enableZoom={false} />}
          </Canvas>
        </div>
  );
}
