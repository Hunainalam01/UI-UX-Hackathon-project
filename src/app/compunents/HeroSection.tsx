"use client";
import Image from "next/image";
import heroSofa from "../hero.png";
import React from "react";
import Link from "next/link";

function HeroSection() {
  return (

    <div className="flex items-center  justify-end h-[90%] w-[100%] bg-[#fbebb5] ">

      <div className="h-[90%] w-[28%]   flex flex-col items-center justify-center">
        <div className="h-[100%] w-[100%] flex justify-end  ">
            <h1 className=" font-myFont font-semibold text-5xl leading-[4rem] h-[180px] tracking-wider "> 
              Rocket single <br /> seater
            </h1>
        </div>
        <div className=" w-[100%] h-[3rem] pl-[1.5rem] flex justify-start">

           <Link className="font-myFont font-bold text-xl border-b-2 tracking-widest border-black" href={"/shop"}>shop Now</Link>
        </div>
      </div>
      <Image className="h-[100%]" src={heroSofa} alt="hero Image" width={800} height={200}></Image>
    </div>
  );
}

export default HeroSection;
