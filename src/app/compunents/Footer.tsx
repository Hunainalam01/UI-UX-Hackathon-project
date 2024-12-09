"use client";
import React from "react";
// import image from "../../../public/Cloud sofa three seater + ottoman_3 1.png"

function Footer() {
  return (
    <div className="w-full  h-[555px] flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col h-[419px] w-[86%]">
        <div className="h-[90%] flex justify-between">
          <div className="flex justify-center items-center text-[16px]">
            <p className="text-[#9F9F9F] ">
              400 University Drive Suite 200 Coral <br />
              Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col w-[15%] h-[88%]  items-start gap-[3rem] ">
            <p className="font-medium   text-[#9F9F9F]">Links</p>
            <a className="font-medium    decoration-black" href="/.">
              Home{" "}
            </a>
            <a className="font-medium     decoration-black" href="/.">
              Shop
            </a>
            <a className="font-medium    decoration-black" href="/.">
              About
            </a>
            <a className="font-medium    decoration-black" href="/.">
              Contact
            </a>
          </div>

          <div className="flex flex-col w-[15%] h-[90%]  items-start gap-[3rem]">
            <p className="font-medium   text-[#9F9F9F]">Payment Option</p>
            <a className="font-medium    decoration-black" href="/.">
              {" "}
              Payment Option
            </a>
            <a className="font-medium decoration-black" href="/.">
              {" "}
              Returns
            </a>
            <a className="font-medium decoration-black" href="/.">
              Privacy Policies
            </a>
          </div>

          <div className="flex flex-col w-[20%] h-[90%] mr-[8rem] gap-[3rem]">
            <p className=" text-[#9F9F9F] font-medium">Newsletter</p>

            <div className="flex  ">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                name="name"
                className="border-b-[1px] border-black"
              />
              <a className="font-medium border-b-[1px] border-black ml-[1rem] decoration-black " href="/.">
                SUBSCRIBE
              </a>
            </div>

          </div>
        </div>

        <div className="h-[100%] flex items-center border-t-2 border-[#D9D9D9] mt-10">
          <p>2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
