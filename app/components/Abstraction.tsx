import React from "react";
import { nulshock } from "../layout";
import Scene_1 from "../scenes/scene-1";
import Scene_2 from "../scenes/scene-2";

const icons = [
  { src: "/camera.svg" },
  { src: "/pen.svg" },
  { src: "/computer.svg" },
];
export default function Abstraction() {
  return (
    <div className="w-full h-full text-black bg-white ">
      <div className="flex flex-col md:flex-row relative justify-between gap-20 w-full h-full">
        {/* Lhs */}
        <div className="mt-20 grid relative px-2 w-full md:px-10 2xl:px-20">
          <img
            src="/abstarct.svg"
            className="w-full col-start-1 row-start-1 h-full"
          />
          <img
            src="/bf.svg"
            className="w-full col-start-1 row-start-1 h-full"
          />
          <div className="col-start-1 row-start-1 flex flex-col gap-6 justify-self-end self-center ">
            {icons.map((itm, idx) => (
              <img src={itm.src} className=" w-[57px] mr-2 " key={idx} />
            ))}
          </div>

          <div className="w-full h-full  absolute z-1 top-25 md:top-5 right-0 md:left-0">
            <Scene_2 />
          </div>
        </div>

        {/* Rhs */}
        <div className="mt-20 flex flex-col justify-center items-center px-2 w-full gap-15 md:px-10 2xl:px-20">
          <div className="flex flex-col gap-10">
            {" "}
            <h1
              className={`text-[30px] md:text-[60px] font-bold leading-10 md:leading-18 ${nulshock.className}`}
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
            <img
              src="/ai.svg"
              className="col-start-1 row-start-1 w-full h-full"
            />

            <div className="col-start-1 row-start-1 relative flex flex-col uppercase    gap-8 p-8">
              <h3 className={`${nulshock.className} text-[30px]`}>
                ARTIFICIAL INTELLIGENCE
              </h3>
              <p className="mr-30 text-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam
              </p>
              <img
              src="/button-1.svg"
              className="absolute z-10 bottom-3 right-0  w-[94px] "
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
