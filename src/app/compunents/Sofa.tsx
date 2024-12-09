"use client";
import Image from "next/image";
import React from "react";
import asgaardSofa from "../../../public/Asgaard-sofa 1.png";

function Sofa() {
  return (
    <div>
      <div className="h-[639px] w-full bg-[#FFF9E5] flex items-center justify-around">
        <div>
          <Image
            src={asgaardSofa}
            alt="sofa image"
            height={630}
            width={753}
          ></Image>
        </div>

        <div className="flex flex-col items-center justify-center w-[25%] h-[205px]">
          <p className="font-medium text-[24px] font-myFont">New Arrivals</p>
          <h1 className="font-bold text-[48px] font-myFont ">Asgaard Sofa</h1>
          <button className="border-[1px] h-[64px] w-[65%] font-myFont mt-8 border-black">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Sofa;
