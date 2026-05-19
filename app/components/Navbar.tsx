import React from "react";
import { div } from "three/tsl";
import Image from "next/image";
import cartsvg1 from "@/public/cart.svg";
import housesvg2 from "@/public/house.svg";
import personsvg3 from "@/public/person.svg";

const icons = [
  { src: cartsvg1 },
  { src: housesvg2 },
  { src: personsvg3 },
];
export default function Navbar() {
  return (
    <div className=" hidden md:block w-full h-full z-10 top-1/2 left-1/2 uppercase   mx-auto 2xl:container text-black">
      <div className=" absolute w-full z-10 mt-20 mx-auto flex items-center  justify-between  md:px-17 2xl:px-27 2xl:container">
        <div>
          <h1 className="text-2xl">Class Name</h1>
        </div>

        <div className="flex flex-row text-white font-bold gap-25">
          <h3>shop</h3>
          <h3>blog</h3>
          <h3>about</h3>
          <h3>contact</h3>
        </div>

        <div className="flex flex-row  gap-7.75">
          {icons.map((itm, idx) => (
            <div key={idx}>
              <Image src={itm.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
