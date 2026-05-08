import React from "react";
import { div } from "three/tsl";

const icons = [
  { src: "/cart.svg" },
  { src: "/house.svg" },
  { src: "/person.svg" },
];
export default function Navbar() {
  return (
    <div className=" hidden md:block w-full h-full z-10 top-1/2 left-1/2 uppercase px-4  mx-auto 2xl:container text-black">
      <div className=" absolute w-full z-10 mt-20 mx-auto flex items-center justify-between px-2 md:px-10 2xl:px-20 2xl:container">
        <div>
          <h1 className="text-2xl">Class Name</h1>
        </div>

        <div className="flex flex-row text-white font-bold gap-25">
          <h3>shop</h3>
          <h3>blog</h3>
          <h3>about</h3>
          <h3>contact</h3>
        </div>

        <div className="flex flex-row mr-10 gap-7.75">
          {icons.map((itm, idx) => (
            <div key={idx}>
              <img src={itm.src}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
