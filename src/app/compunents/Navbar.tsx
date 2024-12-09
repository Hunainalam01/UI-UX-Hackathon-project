"use client";
import Link from "next/link";
import React from "react";

import navIcon1 from "../../../public/account-alert-icon.png";
import navIcon2 from "../../../public/akar-icons_search.png";
import navIcon4 from "../../../public/cart-icon.png";
import navIcon3 from "../../../public/heart-icon.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="h-[100px] w-[100%] flex items-center justify-end mr-[5%] bg-[#fbebb5]">
      <div className="flex justify-between mr-[5%] w-[60%]">
        
        <div className="flex  justify-between  w-[50%]">
          <div>
            <Link href={"/"} className="font-myFont" >Home</Link>
          </div> 
          <div> 
            <Link href={"/shop"} className="font-myFont"  >Shop</Link>
          </div> 
          <div> 
            <Link href={"/about"} className="font-myFont" >About</Link>
          </div> 
          <div> 
            <Link href={"/contact"} className="font-myFont" >Contact</Link>
          </div> 
        </div>

        <div className="flex items-center justify-around w-[35%]">
          <Image src={navIcon1} alt="icon" height={20} width={20}></Image>
          <Image src={navIcon2} alt="icon" height={20} width={20}></Image>
          <Image src={navIcon3} alt="icon" height={20} width={20}></Image>
          <Image src={navIcon4} alt="icon" height={20} width={20}></Image>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
