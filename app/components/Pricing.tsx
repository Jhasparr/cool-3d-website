"use client";

import React from "react";
import Image from "next/image";
import { nulshock } from "../fonts";

// SVGs provided by the user
import leftP from "@/public/left-p.svg";
import centerP from "@/public/center-p.svg";
import rightP from "@/public/right-p.svg";

const beginnerFeatures = [
  "Access to basic 3D modeling courses",
  "Download up to 5 model assets a month",
  "Standard queue priority for rendering",
  "Access to public forums & group chats",
];

const intermediateFeatures = [
  "Access all modeling & animation courses",
  "Unlimited high quality asset downloads",
  "Priority node queue rendering access",
  "Exclusive private channel discord server",
];

const advancedFeatures = [
  "Access all tools and masterclass files",
  "Unlimited asset downloads with license",
  "Dedicated private high speed rendering",
  "Weekly one on one private mentor calls",
];

const plans = [
  {
    name: "BEGINNER PLAN",
    price: "$199.00",
    bg: leftP,
    textColor: "text-white",
    dividerBg: "bg-white/20",
    featuresHeaderColor: "text-white",
    features: beginnerFeatures,
  },
  {
    name: "INTERMEDIATE PLAN",
    price: "$199.00",
    bg: centerP,
    textColor: "text-black",
    dividerBg: "bg-black/10",
    featuresHeaderColor: "text-black",
    features: intermediateFeatures,
  },
  {
    name: "ADVANCED PLAN",
    price: "$199.00",
    bg: rightP,
    textColor: "text-white",
    dividerBg: "bg-white/20",
    featuresHeaderColor: "text-white",
    features: advancedFeatures,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white text-black w-full h-full  mx-auto 2xl:container">
      {/* Spacer */}
      <div className="h-10 bg-white" />

      {/* PRICING PLAN CONTAINER */}
      <div className="relative">
        {/* Background Section SVG Wrapper */}
        <div className="bg-[url('/pricing-bg.svg')] bg-cover bg-no-repeat relative w-full h-full rounded-[40px] px-6 py-12 md:py-24 md:px-16 flex flex-col justify-start items-center ">
          {/* Header (Positioned on the top-left transparent cutout area) */}
          <div className="w-fit text-left md:absolute top-10 left-10 md:left-20 z-10 mb-8 md:mb-0">
            <h2
              className={`${nulshock.className} text-[36px] md:text-[56px] text-black uppercase tracking-wide`}
            >
              PRICING PLAN
            </h2>
          </div>

          {/* Pricing Cards Centered Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 xl:gap-20 w-full mt-12 md:mt-40">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative grid w-full max-w-[340px] md:w-[384px] md:max-w-[384px] aspect-[384/598]"
              >
                <Image
                  src={plan.bg}
                  alt=""
                  className="w-full h-full col-start-1 row-start-1 object-contain"
                  priority
                />
                <div
                  className={`col-start-1 row-start-1 relative z-10 px-4 pt-12 pb-12 flex flex-col justify-center items-center gap-10 text-center ${plan.textColor} h-full mt-10`}
                >
                  <div className="flex flex-col gap-3 w-full items-center">
                    <h3
                      className={`text-[18px] md:text-[20px] font-light uppercase tracking-wider ${plan.textColor}`}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span
                        className={`text-[28px] md:text-[34px] font-bold ${plan.textColor}`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`${plan.textColor} text-[12px] md:text-[14px] ml-1 select-none`}
                      >
                        /Month
                      </span>
                    </div>
                  </div>
                  <div className="my-6 w-full  max-w-[300px] flex flex-col items-start text-left">
                    <span
                      className={`text-[20px] font-light uppercase tracking-wide ${plan.featuresHeaderColor} block mb-4 select-none`}
                    >
                      Feature
                    </span>
                    <ul
                      className={`flex flex-col items-start text-left gap-3 list-none ${plan.textColor} text-[14px] md:text-[15px] xl:text-[16px] leading-relaxed`}
                    >
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className=" items-start gap-2">
                          <span className="opacity-50 mt-2 select-none text-[8px]"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
