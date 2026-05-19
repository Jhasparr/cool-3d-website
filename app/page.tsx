import Hero from "./components/Hero";
import Abstraction from "./components/Abstraction";
import Generative_3D from "./components/Generative_3D";
import Course from "./components/Course";
import NFT from "./components/NFT";


export default function Home() {
  return (
  <div className="w-full h-full   mx-auto 2xl:container">
    <Hero />
    <Abstraction />
    <Generative_3D />
    <Course />
    <NFT />

    

  </div>
  );
}
