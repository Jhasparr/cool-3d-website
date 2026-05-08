import React from "react";
import Scene_1 from "../scenes/scene-1";
import { nulshock } from "../layout";
import Scene_3 from "../scenes/scene-3";

const listLink = [
  { links: "Proactive Threat" },
  { links: "Detection" },
  { links: "And response" },
];
export default function Generative_3D() {
  return (
    <div className="bg-white text-white w-full h-full  mx-auto 2xl:container">
      <div className="h-10 bg-white" />

      <div className="bg-[url('/generate-bg.svg')] px-4 relative bg-cover w-full mt-20  h-full">
        <h3
          className={`${nulshock.className} text-[60px] absolute top-10 text-black md:leading-18  py-2 z-30 px-2 w-full md:px-10 2xl:px-20`}
        >
          Generate 3d <br />
          with ai
        </h3>
        <div className="flex flex-col md:flex-row justify-center  gap-10">
          <div className=" mt-40 mb-20 w-full flex flex-col md:flex-row justify-between px-2 md:px-10 2xl:px-20">
            {/* Left side content */}

            <div className="w-full flex flex-col justify-center gap-20.25 mt-10 md:mt-0">
              {/* Header */}
              <div className=" flex flex-col gap-3 md:gap-5 w-full  md:w-[74%]">
                <h3 className="text-[20px]">Proactive Threat <br /> Detection And Response</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
              {/* Get App */}
              <img src="/horizontal-line.svg" alt="" className="w-fit"/>
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
                <img src="/neon-bg.svg" alt="" />
                <div className="flex flex-col absolute gap-[20px] mt-5 z-20 w-[50%] text-black top-0 right-5 ">
                  <h3 className={`${nulshock.className} text-[30px]`}>
                    OUR CREATOR
                  </h3>
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[13px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    </p>
                    <img
                      src="/down-arrow-1.svg"
                      className="w-[49px] self-end"
                    />
                  </div>
                </div>

                {/* Down left */}
                <div className=" absolute bottom-10 w-[32%] flex flex-col gap-[40px] text-black ml-10 ">
                  <h3 className={`${nulshock.className} text-[30px]`}>
                    NFT design awards
                  </h3>
                  <div className="flex flex-col gap-[30px]">
                    <p className="text-[13px]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    </p>
                    <img
                      src="/down-arrow-1.svg"
                      className="w-[49px] self-end"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full  absolute z-1 top-25 md:top-35 left-40">
                <Scene_3 />
              </div>
            </div>

            <div className=" md:hidden flex mt-10 flex-col w-full h-full gap-16">
              <img
                src="/get-app.svg"
                alt=""
                className="w-fit h-fit relative "
              />
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
