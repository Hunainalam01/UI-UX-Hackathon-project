import Image from "next/image";
import Link from "next/link";
import React from "react";
import filter2 from "../../../public/shop/ci_grid-big-round.png";
import filter3 from "../../../public/shop/bi_view-list.png";
import filter from "../../../public/shop/Vector.png";
// items
import product1 from "../../../public/Mask group.png";
import product2 from "../../../public/Mask group (1).png";
import product3 from "../../../public/Mask group (2).png";
import product4 from "../../../public/Mask group (3).png";
import product5 from "../../../public/shop/Mask group (2).png";
import product6 from "../../../public/shop/Mask group (3).png";
import product7 from "../../../public/shop/Mask group (6).png";
import product8 from "../../../public/shop/Mask group (7).png";
import product9 from "../../../public/shop/Mask group (8).png";
import product10 from "../../../public/shop/Mask group (9).png";
import product11 from "../../../public/shop/Mask group (10).png";
import product13 from "../../../public/shop/Mask group (11).png";
import product14 from "../../../public/shop/Mask group (12).png";
import product15 from "../../../public/shop/Mask group (13).png";
import product16 from "../../../public/shop/Mask group (11).png";
import logo from "../../../public/shop/logo.png"

function Shop() {
  return (
    <div className="h-auto w-full ">
      {/* top */}
      <div className="shop-page   h-full flex items-center justify-center mb-12">
        <div className="gap-3 w-full h-[100%] p-4 flex flex-col items-center justify-center">
          <div className="w-full h-auto sm:text-5xl text-4xl tracking-wider font-medium flex flex-col  items-center justify-center ">
           <Image src={logo} alt="logo"></Image>
            <h1>Shop</h1>
          </div>
          <div className="w-full h-[3rem] font-thin flex items-center justify-center ">
            <Link href={"/"}>
              <span className="font-medium ">
                Home{" "}
                <b className="inline-block sm:scale-y-[1.9] scale-y-[1.5] font-medium">
                  &gt;{" "}
                </b>{" "}
              </span>
            </Link>
            <p>Shop</p>
          </div>
        </div>
      </div>

      {/* semi top */}
      <div className=" grid grid-cols-2 h-[100px]  selection:items-center bg-[#faf4f4]">
        {/* left */}
        <div className="grid grid-cols-12 col-span-1  ">
          <div className="gap-4 w-[100%] col-span-6 flex flex-col items-center justify-center sm:flex-row sm:px-12 ">
            {/* 1 */}
            <div className=" px-4   flex w-full sm:h-[2rem]  sm:w-[60%] items-center justify-between">
              <div className=" font-medium cursor-pointer">
                <Image
                  src={filter}
                  alt="Product image"
                  width={20}
                  height={10}
                ></Image>
              </div>
              <div className="font-medium">
                <p>Filter</p>
              </div>
            </div>
            {/* 2 */}
            <div className=" px-4   flex w-full sm:h-[2rem] sm:w-[50%]  items-center justify-between">
              <div className="font-medium cursor-pointer">
                <Image
                  src={filter2}
                  alt="Product image"
                  width={20}
                  height={10}
                ></Image>
              </div>
              <div className="font-medium cursor-pointer">
                <Image
                  src={filter3}
                  alt="Product image"
                  width={20}
                  height={10}
                ></Image>
              </div>
            </div>
          </div>

          <div className=" col-span-6   flex items-center text-center justify-center ">
            <div className="h-[50%] sm:h-auto pl-10 border-l-2  border-black   flex items-center justify-center ">
              <p>Showing 1–16 of 32 results</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" sm:grid sm:grid-cols-12 flex flex-col   sm:justify-center sm:items-center">
          {/* uper */}
          <div className="gap-3 grid grid-cols-8 sm:col-span-4 h-[50%] px-3 ">
            <div
              className=" col-span-5 my-1 ont-medium flex items-center justify-center
            "
            >
              {" "}
              <p> Show </p>{" "}
            </div>
            <div className="text-sm col-span-3 w-[70%] bg-white my-1 font-medium flex items-center justify-center">
              <p>16</p>
            </div>
          </div>

          {/* bottom */}
          <div className=" gap-3 sm:col-span-8 grid grid-cols-8 h-[50%] ">
            <div
              className=" col-span-4 my-1 font-medium flex items-center justify-center
            "
            >
              {" "}
              <p> Sorted by </p>{" "}
            </div>
            <div className="text-sm col-span-4 w-[70%] my-1 bg-white font-medium flex items-center justify-center">
              <p>Default</p>
            </div>
          </div>
        </div>
      </div>

      {/* //---------------------------------------- */}
      {/* row 01 */}
      <div className="flex flex-col h-[100%] sm:h-auto w-full px-[1.5rem]">
        <div className="sm:h-[95%] h-auto">
          <div className="  bg-white sm:h-[60%]  p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
            {/* one  */}
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div>
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

          <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center "></div>
        </div>
      </div>

      {/* row 02 */}
      <div className="flex flex-col h-[100%] sm:h-auto w-full px-[1.5rem]">
        <div className="sm:h-[95%] h-auto">
          <div className="  bg-white sm:h-[60%]  p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
            {/* one  */}
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
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

            {/* two */}
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product5}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product6}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div>
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product7}
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

          <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center "></div>
        </div>
      </div>

      {/* row 03 */}
      <div className="flex flex-col h-[100%] sm:h-auto w-full px-[1.5rem]">
        <div className="sm:h-[95%] h-auto">
          <div className="  bg-white sm:h-[60%]  p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
            {/* one  */}
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product8}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product9}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product10}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div>
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product11}
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

          <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center "></div>
        </div>
      </div>

      {/* row 04 */}
      <div className="flex flex-col h-[100%] sm:h-auto w-full px-[1.5rem]">
        <div className="sm:h-[95%] h-auto">
          <div className="  bg-white sm:h-[60%]  p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
            {/* one  */}
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white  md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product13}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product14}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem] h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className=" ">
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product15}
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
            <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%] flex flex-col items-center rounded-xl hover:scale-[102%] transition-all  hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div>
                <Link href={"/shop"}>
                  <Image
                    className=""
                    src={product16}
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

          <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center "></div>
        </div>
      </div>

      {/* benifits----------- */}
      <div className=" gap-4 sm:grid flex flex-col items-center sm:grid-cols-12 bg-[#faf4f4]   h-auto lg:p-6 sm:p-12">
        {/* 01 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4  ">
          <h1 className="text-2xl font-semibold">Free Delivery</h1>
          <p className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        {/* 02 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4">
          <h1 className="text-2xl font-semibold">90 Days Return</h1>
          <p className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        {/* 03 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4">
          <h1 className="text-2xl font-semibold">Secure Payment</h1>
          <p className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Shop;
