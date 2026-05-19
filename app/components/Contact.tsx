"use client";

import React from "react";
import { nulshock } from "../fonts";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <div className="bg-white text-black w-full h-full mx-auto 2xl:container">
      {/* CONTACT US SECTION */}
      <div className="px-2 md:px-10 2xl:px-20 ">
        
        {/* Contact Heading */}
        <h2 className={`${nulshock.className} text-[36px] md:text-[56px] text-black mb-10 uppercase tracking-wide`}>
          CONTACT US
        </h2>

        {/* Newsletter Subscription Row */}
        <form onSubmit={handleSubmit} className="flex flex-row w-full max-w-3xl items-stretch mb-16">
          <input
            type="email"
            required
            placeholder="ENTER YOUR EMAIL"
            className="flex-grow px-6 py-4 border-2 border-black border-r-0 text-black font-semibold text-[14px] placeholder-neutral-400 tracking-wider outline-none focus:bg-neutral-50 transition-all uppercase rounded-none"
          />
          <button
            type="submit"
            className="px-10 py-4 bg-black text-white font-bold text-[14px] uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer rounded-none"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Footer Navigation & Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t-2 border-black/10 pt-12 pb-16">
          
          {/* Column 1: Contact Details */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-neutral-400">CONTACT US</h4>
            <div className="flex flex-col gap-2 text-[14px] font-semibold text-neutral-700 uppercase leading-relaxed">
              <p>Phone: +1 234 567 890</p>
              <p>Address: Street Name, City, Country</p>
              <p>Email: info@designcourse.com</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-neutral-400">CONNECTED</h4>
            <div className="flex flex-col gap-2 text-[14px] font-semibold text-neutral-700 uppercase transition-all">
              <a href="#" className="hover:text-black">3D Modeling</a>
              <a href="#" className="hover:text-black">Delivery & returns</a>
              <a href="#" className="hover:text-black">Terms & conditions</a>
              <a href="#" className="hover:text-black">FAQ</a>
              <a href="#" className="hover:text-black">Accessibility</a>
            </div>
          </div>

          {/* Column 3: About Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-neutral-400">ABOUT</h4>
            <div className="flex flex-col gap-2 text-[14px] font-semibold text-neutral-700 uppercase">
              <a href="#" className="hover:text-black">Our story</a>
              <a href="#" className="hover:text-black">Partners</a>
              <a href="#" className="hover:text-black">Corporate gifts</a>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-neutral-400">SOCIAL</h4>
            <div className="flex flex-col gap-2 text-[14px] font-semibold text-neutral-700 uppercase">
              <a href="#" className="hover:text-black">Instagram</a>
              <a href="#" className="hover:text-black">Twitter</a>
              <a href="#" className="hover:text-black">Facebook</a>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t-2 border-black/10 py-8 text-[11px] font-extrabold tracking-widest text-neutral-500 uppercase">
          <a href="#" className="hover:text-black">PRIVACY POLICY</a>
          <p>COPYRIGHT © 2026 DESIGN ALL RIGHTS RESERVED</p>
          <a href="#" className="hover:text-black">TERMS OF SERVICE</a>
        </div>

      </div>
    </div>
  );
}
