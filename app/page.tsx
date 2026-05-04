import Image from "next/image";
import { nulshock } from "./layout";
import { Canvas } from "@react-three/fiber";
import { Robot_1 } from "./models/robot-1";
import { OrbitControls } from "@react-three/drei";
import Scene_1 from "./scenes/scene-1";

export default function Home() {
  return (
    <div className="bg-white text-white w-full h-full   mx-auto 2xl:container">
      <div className="bg-[url('/hero-bg.svg')] px-4 relative bg-cover w-full h-full">
        <div className="bg-[url('/info-tab.svg')] absolute bottom-35 z-2 text-black left-75 bg-cover w-151.5 h-70.25">
          <h3 className=" px-15 w-[80%] uppercase mt-15">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam
          </h3>
          <div className="absolute right-5 bottom-5 py-3.5  uppercase px-6 rounded-[30px] bg-black w-fit text-white">
            <p>MORE information</p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-10">
          <div className=" mt-40 mb-20 w-full flex flex-row justify-between px-10 2xl:px-20">
            {/* Left side content */}

            <div className="w-full flex flex-col gap-20.25 mt-20">
              {/* Header */}
              <div className=" flex flex-col gap-5 w-[74%]">
                <h1
                  className={`text-[150px] font-bold leading-25 ${nulshock.className}`}
                >
                  3D <span className="text-[110px]">DESIGN</span>{" "}
                </h1>
                <p className="text-[18px] leading-[116%] uppercase">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
              {/* Get App */}
              <div className="bg-[url('/get-app.svg')] bg-cover flex flex-col justify-center items-center w-38 h-85 gap-16">
                <h3 className="text-[24px]">GET APP</h3>

                <div className="flex flex-col gap-7 mr-12">
                  <img src="/app-store.svg" alt="" />
                  <img src="/windows.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex relative justify-end ">
              <div className=" ">
                <img src="/side-hero.svg" alt="" />
              </div>
              <div className="w-full h-full absolute z-1 top-25 right-15">
                <Scene_1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
