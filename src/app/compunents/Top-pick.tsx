import Image from "next/image";
import Link from "next/link";
import product1 from "../../../public/Mask group.png";
import product2 from "../../../public/Mask group (1).png";
import product3 from "../../../public/Mask group (2).png";
import product4 from "../../../public/Mask group (3).png";
import React from "react";

function TopPick() {
  return (
    <div className="flex flex-col h-[100%] sm:h-[118vh] w-full px-[1.5rem]  ">
      <div className="sm:h-[95%] h-auto">
        <div className="h-[150px]  flex flex-col items-center justify-center ">
          <div className="vw-[100%] flex items-center justify-center">
            <h1 className="font-medium font-myFont text-[36px] px-4 ">
              Top Picks For You
            </h1>
          </div>

          <div className=" w-[100%] flex items-center justify-center text-center">
            <p className=" font-medium text-[#9F9F9F] font-myFont text-[16px] px-6">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </div>
        </div>

        <div className="  bg-white sm:h-[60%]  p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
          {/* one  */}
          <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
            <div className=" ">
              <Link href={"/shop"}>
                <Image
                  className=""
                  src={product1}
                  alt="Product image"
                  width={287}
                  height={397}
                ></Image>
              </Link>
            </div>
            <div className="h-7 pl-3 text-small w-full flex justify-start items-end ">
              <p>Trenton modular sofa_3</p>
            </div>

            <div className="h-10 font-semibold text-xl pl-3 text-small w-full flex justify-start items-center ">
              <h2>Rs. 25,000.00</h2>
            </div>
          </div>

          {/* two */}
          <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
            <div className=" ">
              <Link href={"/shop"}>
                <Image
                  className=""
                  src={product2}
                  alt="Product image"
                  width={287}
                  height={397}
                ></Image>
              </Link>
            </div>
            <div className="h-7 pl-3 text-small w-full flex justify-start items-end ">
              <p>Trenton modular sofa_3</p>
            </div>

            <div className="h-10 font-semibold text-xl pl-3 text-small w-full flex justify-start items-center ">
              <h2>Rs. 25,000.00</h2>
            </div>
          </div>

          {/* three */}
          <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
            <div className=" ">
              <Link href={"/shop"}>
                <Image
                  className=""
                  src={product3}
                  alt="Product image"
                  width={287}
                  height={397}
                ></Image>
              </Link>
            </div>
            <div className="h-7 pl-3 text-small w-full flex justify-start items-end ">
              <p>Trenton modular sofa_3</p>
            </div>

            <div className="h-10 font-semibold text-xl pl-3 text-small w-full flex justify-start items-center ">
              <h2>Rs. 25,000.00</h2>
            </div>
          </div>

          {/* four */}
          <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
            <div >
              <Link href={"/shop"}>
                <Image
                  className=""
                  src={product4}
                  alt="Product image"
                  width={287}
                  height={397}
                ></Image>
              </Link>
            </div>
            <div className="h-7 pl-3 text-small w-full flex justify-start items-end ">
              <p>Trenton modular sofa_3</p>
            </div>

            <div className="h-10 font-semibold text-xl pl-3 text-small w-full flex justify-start items-center ">
              <h2>Rs. 25,000.00</h2>
            </div>
          </div>
        </div>


        <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center ">

          <div className="mb-10 h-[80%] sm:h-[100%]  flex items-center justify-center w-[65%] rounded-md border-[1px] border-black sm:border-none sm:hover:bg-none hover:bg-black  bg-white transition-all  sm:hover:text-gray-500 hover:text-white" >
            <Link
              className=" font-bold sm:text-lg border-b-2 tracking-widest font-myFont border-white sm:border-black "
              href={"/shop"}
            >
              View More
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}

export default TopPick;
