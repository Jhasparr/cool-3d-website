import React from "react";
import { nulshock } from "../layout";
import Scene_4 from "../scenes/scene-4";

export default function Course() {
  return (
    <div className="bg-white text-white w-full h-full px-4 mx-auto 2xl:container ">
      <div className="h-10 bg-white" />
      <div className="px-2 md:px-10 2xl:px-20">
        <h1 className={`${nulshock.className} text-[60px] text-black mt-20`}>
          3D COURSE
        </h1>
        <div className="flex flex-col gap-40 w-full h-full mt-20">
          <div className="w-full h-full flex justify-between gap-7 text-black">
            {/* LHS */}
            <div className=" relative grid  w-full h-full">
              <img
                src="/left-neon.svg"
                alt=""
                className="col-start-1 row-start-1"
              />
              <div className="flex justify-start ml-25 mt-5 col-start-1 row-start-1">
                <h3 className="text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-10 mt-5 text-[25px]`}>
                  3D modeling
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className="px-10 mt-10  w-full h-fit">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
            </div>
            {/* RHHS */}
            <div className="grid relative bg-cover w-full  h-full">
              <img
                src="/right-white.svg"
                alt=""
                className="col-start-1 row-start-1"
              />
              <div className="flex justify-start ml-25 mt-5 col-start-1 row-start-1">
                <h3 className="text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-10 mt-5 text-[25px]`}>
                  3D animation
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className="px-10 mt-10  w-full h-fit">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative pt-40">
            <div className="absolute w-full h-full flex items-center justify-center top-0">
              <Scene_4 />
            </div>
            <img src="/baord.svg" alt="" />
            <div className="absolute flex gap-45 flex-row text-white bottom-2 left-10">
              <div className="flex flex-col ">
                <p className="text-[30px]">Mentors</p>
                <h3 className="text-[60px] font-semibold">550+</h3>
              </div>
              <div className="flex flex-col ">
                <p className="text-[30px]">Students</p>
                <h3 className="text-[60px] font-semibold">20K+</h3>
              </div>
            </div>
            <div className="bg-green-50 absolute grid bottom-0 right-0">
              <img
                src="/feedback.svg"
                alt=""
                className="col-start-1 row-start-1 w-[420px]"
              />
              <div className="w-full h-full flex justify-center items-center gap-30  flex-row col-start-1 row-start-1">
                <h3 className={`${nulshock.className} text-[30px] text-black`}>
                  Feedback
                </h3>
                <img src="/right-arrow.svg" alt="" className="w-[49px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
