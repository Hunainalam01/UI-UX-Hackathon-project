import Image from "next/image";
import React from "react";
import Link from "next/link";
import blog1 from "../../../public/Group 50.png";
import blog2 from "../../../public/Group 49.png";
import blog3 from "../../../public/Group 48.png";

function OurBlog() {
  return (
    <div className="flex flex-col h-[944px] w-full px-[4rem]">
      <div className="h-[150px]  flex flex-col items-center justify-center mt-[3rem]">
        <h1 className="font-medium font-myFont text-[36px]">Our Blogs</h1>
        <p className="font-medium text-[#9F9F9F] font-myFont text-[16px]">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-around items-center w-[100%]">
          <Link href={"/shop"}>
            <Image
              src={blog1}
              alt="Product image"
              width={350}
              height={420}
            ></Image>
          </Link>

          <Link href={"/shop"}>
            <Image
              src={blog2}
              alt="Product image"
              width={350}
              height={397}
            ></Image>
          </Link>

          <Link href={"/shop"}>
            <Image
              src={blog3}
              alt="Product image"
              width={350}
              height={397}
            ></Image>
          </Link>
        </div>
        <div className=" w-[100%] h-[3rem] mt-[5rem] flex justify-center">
          <Link
            className=" font-bold text-xl border-b-2 tracking-widest font-myFont border-black"
            href={"/shop"}
          >
            View All Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
