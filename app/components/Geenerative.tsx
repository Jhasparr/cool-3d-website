import React from "react";
import { nulshock } from "../layout";
import Scene_2 from "../scenes/scene-2";
import { Green_Lantern } from "../models/green-lantern";
import Scene_3 from "../scenes/scene-3";

const icons = [
  { src: "/camera.svg" },
  { src: "/pen.svg" },
  { src: "/computer.svg" },
];
export default function Geenerative() {
  return (
    <div className="w-full h-full text-black grid bg-white   ">
      <h3
        className={`${nulshock.className} text-[60px] md:leading-18 col-start-1 row-start-1 mt-35 z-30 px-2 w-full md:px-10 2xl:px-20`}
      >
        Generate 3d <br />
        with ai
      </h3>

      <img
        src="/generate-bg.svg"
        className="w-full h-full col-start-1 mt-20  row-start-1 "
      />

      <div className="w-full h-full flex justify-between col-start-1 row-start-1 text-white  mt-20 uppercase  px-2 md:px-10 2xl:px-20 ">
        {/* LHS */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full ">
            <h3 className="w-[70%]">Proactive Threat detection and response</h3>
            <p className="w-[70%]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam
            </p>
          </div>
        </div>
        {/* RHS */}
        <div className="w-full h-full bg-amber-50">
          <div className="w-full h-[764px] bg-green-100 mt-35 grid bg-[url('/neon-bg.svg')] bg-cover relative">
            <img
              src="/icon.svg"
              className="w-[220px] col-start-1 mt-32 row-start-1 "
            />

            <div className="flex flex-col gap-[20px] col-start-1 row-start-1 mt-5 w-[50%] text-black ml-75 ">
              <h3 className={`${nulshock.className} text-[30px]`}>
                OUR CREATOR
              </h3>
              <div className="flex flex-col gap-[15px]">
                <p className="text-[13px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
                <img src="/down-arrow-1.svg" className="w-[49px] self-end" />
              </div>
            </div>
            <div className=" col-start-1 row-start-1 mt-110 w-[32%] flex flex-col gap-[75px] text-black ml-10 ">
              <h3 className={`${nulshock.className} text-[30px]`}>
                NFT design awards
              </h3>
              <div className="flex flex-col gap-[30px]">
                <p className="text-[13px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
                <img src="/down-arrow-1.svg" className="w-[49px] self-end" />
              </div>
            </div>
            <div className="w-[360px]  h-[500px]  absolute bottom-30 right-0 ">
              <Scene_3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
