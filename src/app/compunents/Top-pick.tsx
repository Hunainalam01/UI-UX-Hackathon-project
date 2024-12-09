import Image from "next/image";
import Link from "next/link";
import product1 from "../../../public/Group 15.png";
import product2 from "../../../public/Group 16.png";
import product3 from "../../../public/Group 17.png";
import product4 from "../../../public/Group 18.png";
import React from "react";

function TopPick() {
  return (
    <div className="flex flex-col h-[777px] w-full px-[1.5rem]">
      <div className="h-[150px]  flex flex-col items-center justify-center">
        <h1 className="font-medium font-myFont text-[36px]">Top Picks For You</h1>
        <p className="font-medium text-[#9F9F9F] font-myFont text-[16px]">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>

      <div className="flex justify-center items-center w-[100%]">
        <Link href={"/shop"}>
          <Image
            src={product1}
            alt="Product image"
            width={287}
            height={397}
          ></Image>
        </Link>

        <Link href={"/shop"}>
          <Image
            src={product2}
            alt="Product image"
            width={287}
            height={397}
          ></Image>
        </Link>

        <Link href={"/shop"}>
          <Image
            src={product3}
            alt="Product image"
            width={287}
            height={397}
          ></Image>
        </Link>

        <Link href={"/shop"}>
          <Image
            src={product4}
            alt="Product image"
            width={287}
            height={1}
          ></Image>
        </Link>
      </div>



      <div className=" w-[100%] h-[3rem] mt-[5rem] flex justify-center ">
        <Link
          className=" font-bold text-xl border-b-2 tracking-widest font-myFont border-black"
          href={"/shop"}
        >
          shop Now
        </Link>
      </div>

      {/* 
      <div className="">
        <Link className="h-[1.5rem] border-b border-black" href={"/"}>
          View More
        </Link>
      </div> */}
    </div>
  );
}

export default TopPick;
