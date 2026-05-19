import React from "react";
import { nulshock } from "../fonts";
import Scene_2 from "../scenes/scene-2";
import Image from "next/image";
import abstractSvg from "@/public/abstarct.svg";
import bfSvg from "@/public/bf.svg";
import cameraSvg from "@/public/camera.svg";
import penSvg from "@/public/pen.svg";
import computerSvg from "@/public/computer.svg";
import aiSvg from "@/public/ai.svg";
import button1Svg from "@/public/button-1.svg";

const icons = [{ src: cameraSvg }, { src: penSvg }, { src: computerSvg }];
export default function Abstraction() {
  return (
    <div className="w-full h-full  text-black bg-white ">
      <div className="flex flex-col-reverse md:flex-row relative px-2 md:px-4 justify-between md:gap-20 w-full h-full">
        {/* Lhs */}
        <div className="mt-10 md:mt-20 grid relative px-2 w-full md:px-10 2xl:px-20">
          <Image
            src={abstractSvg}
            alt=""
            className="w-full col-start-1 row-start-1 h-full"
          />
          <Image
            src={bfSvg}
            alt=""
            className="w-full col-start-1 row-start-1 h-full"
          />
          <div className="col-start-1 row-start-1 flex flex-col gap-6 justify-self-end self-center ">
            {icons.map((itm, idx) => (
              <Image
                src={itm.src}
                alt=""
                className="w-[35px] md:w-[50px] mr-2 "
                key={idx}
              />
            ))}
          </div>

          <div className="w-full h-full  absolute z-1 top-5 md:top-5 right-0 md:left-0">
            <Scene_2 />
          </div>
        </div>

        {/* Rhs */}
        <div className="mt-20 flex flex-col justify-center items-center px-2 w-full gap-7 md:gap-15 md:px-10 2xl:px-20">
          <div className="flex flex-col gap-5 md:gap-10">
            {" "}
            <h1
              className={`text-[40px] md:text-[60px] font-bold leading-14 md:leading-18 ${nulshock.className}`}
            >
              CREATE AN ABSTRACTION
            </h1>
            <p className="uppercase text-[18px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam
            </p>
          </div>

          {/* Blackbox */}

          <div className="grid text-white">
            <Image
              src={aiSvg}
              alt=""
              className="col-start-1 row-start-1 w-full  h-full"
            />

            <div className="col-start-1 row-start-1 relative  flex flex-col gap-4 md:gap-8 p-4 md:p-8">
              <h3
                className={`${nulshock.className} text-[20px] md:text-[28px] w-full`}
              >
                ARTIFICIAL INTELLIGENCE
              </h3>
              <p className="mr-20 md:mr-30 text-[14px] md:text-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam
              </p>
              <Image
                src={button1Svg}
                alt=""
                className="absolute z-10 bottom-3 right-0  w-[70px] md:w-[94px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
