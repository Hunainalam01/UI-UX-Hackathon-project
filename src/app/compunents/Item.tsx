import React from "react";
import Image from "next/image";
import item1 from '../../../public/Group 9.png'
import item2 from '../../../public/Group 8.png'
import Link from "next/link";

function Item() {
  return (
    <div className="bg-[#faf4f4] flex items-center justify-around px-24 h-[672px] w-full">
     
      <Link href={"/shop"}>
        <Image src={item1} alt="porduct image" width={500} height={400}></Image>
      </Link>
      
      <Link href={"/shop"}>
        <Image src={item2 } alt="porduct image" width={500} height={400}></Image>
      </Link>
    </div>
  );
}

export default Item;
