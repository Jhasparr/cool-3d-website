import React from "react";
import { nulshock } from "../fonts";
import Scene_3 from "../scenes/scene-3";
import Image from "next/image";
import horizontalLineSvg from "@/public/horizontal-line.svg";
import neonBgSvg from "@/public/neon-bg.svg";
import downArrow1Svg from "@/public/down-arrow-1.svg";

const listLink = [
  { links: "Proactive Threat" },
  { links: "Detection" },
  { links: "And response" },
];
export default function Generative_3D() {
  return (
    <div className="bg-white text-white w-full h-full  mx-auto 2xl:container">
      <div className="h-10 bg-white" />
      <h3
        className={`${nulshock.className} md:hidden block text-[40px] md:text-[60px] md:absolute top-10 text-black md:leading-18  py-2 z-30 px-2 w-fit md:px-10 2xl:px-20`}
      >
        Generate 3d <br className="hidden md:block" />
        with ai
      </h3>

      <div className="bg-[url('/generate-bg.svg')] px-2 md:px-4 md:bg-white bg-black relative bg-cover w-full md:mt-20  h-full">
        <h3
          className={`${nulshock.className} text-[40px] md:text-[60px] hidden md:block md:absolute top-10 text-black md:leading-18  py-2 z-30 px-2 w-fit md:px-10 2xl:px-20`}
        >
          Generate 3d <br className="hidden md:block" />
          with ai
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className=" md:mt-40 mb-20 w-full flex flex-col md:flex-row justify-between px-2 md:px-10 2xl:px-20">
            {/* Left side content */}

            <div className="w-full flex flex-col justify-center gap-10 md:gap-20.25 mt-10  md:mt-0">
              {/* Header */}
              <div className=" flex flex-col gap-3 md:gap-5 w-full  md:w-[74%]">
                <h3 className="text-[20px]">
                  Proactive Threat <br /> Detection And Response
                </h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
              {/* Get App */}
              <Image src={horizontalLineSvg} alt="" className="w-fit" />
              <div className="flex flex-row gap-8">
                <div className=" flex flex-col gap-2 md:gap-5 w-full  md:w-[74%]">
                  {listLink.map((itm, idx) => (
                    <p key={idx}>{itm.links}</p>
                  ))}
                </div>
                <div className=" flex flex-col gap-2 md:gap-5 w-full  md:w-[74%]">
                  {listLink.map((itm, idx) => (
                    <p key={idx}>{itm.links}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-full flex mt-10 md:mt-0  relative justify-end ">
              <div className="relative">
                <Image src={neonBgSvg} alt="" />
                <div className="flex flex-col absolute gap-[10px] md:gap-[20px] mt-4 md:mt-5 z-20 w-[55%] md:w-[50%] text-black top-0 right-2 md:right-7 ">
                  <h3 className={`${nulshock.className} md:text-[30px]`}>
                    OUR CREATOR
                  </h3>
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[11px] md:text-[13px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    </p>
                    <Image
                      src={downArrow1Svg}
                      alt=""
                      className="w-[49px] hidden md:block self-end"
                    />
                  </div>
                </div>

                {/* Down left */}
                <div className=" absolute bottom-4 md:bottom-10 w-[36%] md:w-[32%] flex flex-col gap-[15px] md:gap-[40px] text-black ml-2 md:ml-7 ">
                  <h3 className={`${nulshock.className} md:text-[30px]`}>
                    NFT design awards
                  </h3>
                  <div className="flex flex-col gap-[15px] md:gap-[30px]">
                    <p className="text-[11px] md:text-[13px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    </p>
                    <Image
                      src={downArrow1Svg}
                      alt=""
                      className="w-[49px] self-end"
                    />
                  </div>
                </div>
              </div>
              <div className="w-fit h-full  absolute z-1 top-25 md:top-35 right-0">
                <Scene_3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
