import React from "react";
import { nulshock } from "../layout";
import Scene_4 from "../scenes/scene-4";

export default function Course() {
  return (
    <div className="bg-white text-white w-full h-full px-2 md:px-4 mx-auto 2xl:container ">
      <div className="h-10 bg-white" />
      <div className="px-2 md:px-10 2xl:px-20">
        <h1 className={`${nulshock.className} text-[40px] md:text-[60px] text-black mt-10 md:mt-20`}>
          3D COURSE
        </h1>
        <div className="flex flex-col gap-8 md:gap-15 w-full h-full mt-10 md:mt-20">
          <div className="w-full h-full flex flex-col md:flex-row justify-between gap-7 text-black">
            {/* LHS */}
            <div className=" relative grid  w-full h-full">
              <img
                src="/left-neon.svg"
                alt=""
                className="col-start-1 row-start-1"
              />
              <div className="flex justify-start ml-12 md:ml-25 mt-2 md:mt-5 col-start-1 row-start-1">
                <h3 className="text-[12px] md:text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-5 md:mr-10 mt-2 md:mt-5 text-[14px] md:text-[25px]`}>
                  3D modeling
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className=" px-6 md:px-10 mt-7 md:mt-10 text-[11px] md:text-base  w-full h-fit">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
            </div>
            {/* RHHS */}
            <div className="grid relative  w-full  h-full">
              <img
                src="/right-white.svg"
                alt=""
                className=" md:w-full col-start-1 row-start-1"
              />
              <div className="flex justify-start ml-12 md:ml-25 mt-2 md:mt-5 col-start-1 row-start-1">
                <h3 className="text-[12px] md:text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-5 md:mr-10 mt-2 md:mt-5 text-[14px] md:text-[25px]`}>
                  3D animation
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className=" px-6 md:px-10 mt-7 md:mt-10 text-[11px] md:text-base  w-full h-fit">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full  relative pt-25 md:pt-50">
            <div className="absolute w-full h-full flex items-center justify-center top-0 z-20">
              <Scene_4 />
            </div>
            <img src="/baord.svg" alt="" className="" />
            <div className="absolute flex md:gap-45 gap-5 flex-row text-white bottom-2  left-5 md:left-10">
              <div className="flex flex-col ">
                <p className="text-[10px] md:text-[30px]">Mentors</p>
                <h3 className="text-[20px] md:text-[60px] font-semibold">550+</h3>
              </div>
              <div className="flex flex-col ">
                <p className="text-[10px] md:text-[30px]">Students</p>
                <h3 className="text-[20px] md:text-[60px] font-semibold">20K+</h3>
              </div>
            </div>
            <div className="bg-green-50  absolute grid bottom-0 right-0">
              <img
                src="/feedback.svg"
                alt=""
                className="col-start-1 row-start-1 w-[110px] md:w-[420px]"
              />
              <div className="w-full h-full flex justify-center items-center gap-4 md:gap-30  flex-row col-start-1 row-start-1">
                <h3 className={`${nulshock.className} text-[9px] md:text-[30px] text-black`}>
                  Feedback
                </h3>
                <img src="/right-arrow.svg" alt="" className="w-[13px] md:w-[49px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
