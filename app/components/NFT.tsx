import { nulshock } from "../fonts";
import Image from "next/image";
import leftSvg from "@/public/left.svg";
import middleSvg from "@/public/middle.svg";
import rightSvg from "@/public/right.svg";

export default function NFT() {
  return (
    <div className="bg-white text-white w-full h-full px-2 md:px-4 mx-auto 2xl:container ">
      <div className="h-10 bg-white" />
      <div className="px-2 md:px-10 2xl:px-20 flex flex-col justify-center items-center">
        <div>
          <h1 className={`${nulshock.className} text-black text-[40px] md:text-[60px] mt-20 md:mt-30`}>
          3D NFT COLLECTION
        </h1>

        </div>
        
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-20">
          <div>
             <Image
                src={leftSvg}
                alt=""
                className=""
              />
          </div>
          <div className="relative">
             <Image
                src={middleSvg}
                alt=""
                className=""
              />
              <div className="w-fit bg-black absolute bottom-2 right-0 px-9 py-2 rounded-[90px] ">
                <h3 className="text-white text-[20px] font-bold">$10.00</h3>

              </div>
          </div>
          <div>
             <Image
                src={rightSvg}
                alt=""
                className=""
              />
          </div>

        </div>
      </div>
    </div>
  );
}
