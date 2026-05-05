import Image from "next/image";
import { nulshock } from "./layout";
import { Canvas } from "@react-three/fiber";
import { Robot_1 } from "./models/robot-1";
import { OrbitControls } from "@react-three/drei";
import Scene_1 from "./scenes/scene-1";

export default function Home() {
  return (
    <div className="bg-white text-white w-full h-full   mx-auto 2xl:container">
      <div className="bg-[url('/hero-bg.svg')] px-4 relative bg-cover  w-full  h-full">
        <div className="bg-[url('/info-tab.svg')] hidden md:block absolute bottom-35 z-2 text-black left-75 bg-cover w-151.5 h-70.25">
          <h3 className=" px-15 w-[80%] uppercase mt-15">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam
          </h3>
          <div className="absolute right-5 bottom-5 py-3.5  uppercase px-6 rounded-[30px] bg-black w-fit text-white">
            <p>MORE information</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className=" mt-40 mb-20 w-full flex flex-col md:flex-row justify-between px-2 md:px-10 2xl:px-20">
            {/* Left side content */}

            <div className="w-full flex flex-col gap-20.25 mt-10 md:mt-20">
              {/* Header */}
              <div className=" flex flex-col gap-3 md:gap-5 w-full md:w-[74%]">
                <h1
                  className={`text-[75px] md:text-[150px] font-bold leading-15 md:leading-25 ${nulshock.className}`}
                >
                  3D{" "}
                  <span className="text-[70px] md:text-[110px]">
                    DESIGN
                  </span>{" "}
                </h1>
                <p className="md:text-[18px] leading-[116%] uppercase">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
              {/* Get App */}
              <div className="bg-[url('/get-app.svg')] bg-cover hidden md:flex flex-col justify-center items-center w-38 h-85 gap-16">
                <h3 className="text-[24px]">GET APP</h3>

                <div className="flex flex-col gap-7 mr-12">
                  <img src="/app-store.svg" alt="" />
                  <img src="/windows.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex mt-10 md:mt-0  relative justify-end ">
              <div className=" ">
                <img src="/side-hero.svg" alt="" />
              </div>
              <div className="w-full h-full  absolute z-1 top-25 right-0 md:left-10">
                <Scene_1 />
              </div>
            </div>
            <div className="relative md:hidden block text-black w-full h-full mt-10  ">
              <img src="/info-tab.svg" alt="" className="relative z-2"/>
              <h3 className="absolute top-0 px-5 text-[10px] uppercase z-3  mt-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam
              </h3>
              <div className="absolute text-[7px] z-4 right-5 bottom-1.5 py-1.5  uppercase px-3 rounded-[30px] bg-black w-fit text-white">
                <p>MORE information</p>
              </div>
            </div>
            <div className=" md:hidden flex mt-10 flex-col w-full h-full gap-16">
             <img src="/get-app.svg" alt="" className="w-fit h-fit relative " />
              <h3 className="absolute text-[24px] left-12 mt-10 ">GET APP</h3>

              <div className="absolute mt-35 flex flex-col left-10 gap-7 ">
                <img src="/app-store.svg" alt="" className="" />
                <img src="/windows.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
