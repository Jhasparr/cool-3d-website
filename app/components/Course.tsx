import React from "react";
import { nulshock } from "../layout";
import Scene_4 from "../scenes/scene-4";
import Image from "next/image";
import leftNeonSvg from "@/public/left-neon.svg";
import rightWhiteSvg from "@/public/right-white.svg";
import baordSvg from "@/public/baord.svg";
import feedbackSvg from "@/public/feedback.svg";
import rightArrowSvg from "@/public/right-arrow.svg";

export default function Course() {
  return (
    <div className="bg-white text-white w-full h-full px-2 md:px-4 mx-auto 2xl:container ">
      <div className="h-10 bg-white" />
      <div className="px-2 md:px-10 2xl:px-20">
        <h1 className={`${nulshock.className} text-[40px] md:text-[60px] text-black mt-10 md:mt-20`}>
          3D COURSE
        </h1>
        <div className="flex flex-col gap-8 md:gap-15 w-full h-full mt-10 md:mt-20">
          <div className="w-full h-full flex flex-col md:flex-row justify-between gap-10 md:gap-7 text-black">
            {/* LHS */}
            <div className=" relative grid  w-full h-full">
              <Image
                src={leftNeonSvg}
                alt=""
                className="w-full col-start-1 row-start-1"
              />
              <div className="flex justify-start am:ml-12 ml-15 md:ml-25 mt-2 md:mt-5 col-start-1 row-start-1">
                <h3 className="sm:text-[12px] text-base md:text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-5 md:mr-10 mt-2 md:mt-5 text-base sm:text-[14px] md:text-[25px]`}>
                  3D modeling
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className=" px-6 md:px-10 sm:mt-7  mt-10 sm:text-[11px] text-[14px] md:text-base  w-full h-fit">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
              </div>
            </div>
            {/* RHHS */}
            <div className="grid relative  w-full  h-full">
              <Image
                src={rightWhiteSvg}
                alt=""
                className=" w-full col-start-1 row-start-1"
              />
              <div className="flex justify-start sm:ml-12 ml-15 md:ml-25 mt-2 md:mt-5 col-start-1 row-start-1">
                <h3 className="sm:text-[12px] text-base md:text-[20px]">FULL TIME</h3>
              </div>
              <div className="flex justify-end col-start-1 row-start-1">
                <h3 className={`${nulshock.className} mr-5 md:mr-10 mt-2 md:mt-5 sm:text-[14px] text-base md:text-[25px]`}>
                  3D animation
                </h3>
              </div>

              <div className="flex justify-center items-center col-start-1 row-start-1">
                <p className=" px-6 md:px-10 sm:mt-7 mt-10 sm:text-[11px] text-[14px] md:text-base  w-full h-fit">
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
            <Image src={baordSvg} alt="" className="w-full h-full" />
            <div className="absolute flex md:gap-45 gap-8 sm:gap-5 flex-row text-white bottom-2  left-5 md:left-10">
              <div className="flex flex-col ">
                <p className="sm:text-[10px] text-[13px] md:text-[30px]">Mentors</p>
                <h3 className="sm:text-[20px] text-[25px] md:text-[60px] font-semibold">550+</h3>
              </div>
              <div className="flex flex-col ">
                <p className="sm:text-[10px] text-[13px] md:text-[30px]">Students</p>
                <h3 className="sm:text-[20px] text-[25px] md:text-[60px] font-semibold">20K+</h3>
              </div>
            </div>
            <div className="bg-green-50  absolute grid bottom-0 right-0">
              <Image
                src={feedbackSvg}
                alt=""
                className="col-start-1 row-start-1 sm:w-[110px] w-[140px] md:w-[420px]"
              />
              <div className="w-full h-full flex justify-center items-center gap-4 md:gap-30  flex-row col-start-1 row-start-1">
                <h3 className={`${nulshock.className} sm:text-[9px] text-[12px] md:text-[30px] text-black`}>
                  Feedback
                </h3>
                <Image src={rightArrowSvg} alt="" className="sm:w-[13px] w-[20px] md:w-[49px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
