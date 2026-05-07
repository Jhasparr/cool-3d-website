import Image from "next/image";

import Scene_1 from "./scenes/scene-1";
import Hero from "./components/Hero";
import Abstraction from "./components/Abstraction";

export default function Home() {
  return (
  <div className="w-full h-full px-4  mx-auto 2xl:container">
    <Hero />
    <Abstraction />

  </div>
  );
}
