"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

const  Page=()=> {
  const [details, setdetails] = useState(false);

  const handleDetail = () => {
    setdetails(!details);
  };

  return (
    <>
      {/* nurse herosection  start*/}
      <div className="padding-x bg-red-700 bg-opacity-10 py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <button className="flex items-center">
            <Image
              className="mx-4"
              src="/images/arrow.svg"
              alt="not found"
              width={50}
              height={50}
            />{" "}
            <span className="mx-4">Back</span>
          </button>

          <div className="flex  items-center gap-5">
            <input
              type="progess"
              className="bg-[#AF2245] w-[20%] h-[3px]"
              disabled
            />
            <input
              type="progess"
              className="bg-[#FFF] w-[20%] h-[3px]"
              disabled
            />
            <input
              type="progess"
              className="bg-[#FFF] w-[20%] h-[3px]"
              disabled
            />
            <input
              type="progess"
              className="bg-[#FFF] w-[20%] h-[3px]"
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-5 items-center">
          <div className="left w-full sm:w-[60%]">
            <h1 className="global__title">Full Body</h1>

            <div className=" gap-5 flex flex-col sm:flex-row mt-12">
              <div className="w-full sm:w-[50%]  h-[50px] rounded-[5px] flex justify-between bg-red-700 bg-opacity-10  text-[#AF2245] text-lg font-semibold p-3">
                <h1 className="flex items-center">
                  <Image
                    className="mx-2"
                    src="/images/location.png"
                    alt="not found"
                    width={20}
                    height={20}
                  />{" "}
                  Location
                </h1>
                <Image
                  src="/images/line.png"
                  alt="not found"
                  width={2}
                  height={10}
                />

                <h1 className="flex items-center">
                  Saudi Arabia
                  <Image
                    className="mx-2"
                    src="/images/bottomarrow.png"
                    alt="not found"
                    width={20}
                    height={20}
                  />
                </h1>
              </div>
              <div className="sm:w-[50%] w-full  h-[50px] p-3  flex justify-between items-center rounded-[5px] bg-[#FFF]">
                <input
                  className="w-[80%] h-[50px] outline-none "
                  placeholder="Search your lab tests & Packages "
                  type="text"
                />
                <Image
                  src="/images/search.svg"
                  alt="not found"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nurse herosection enbd */}
      <div className="padding-x">
        {/* pakeges component */}

        <div className="mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top">
          <div className="w-full bg-[#FFF] Shadowbg rounded-[8px] p-3   md:w-[60%] flex flex-wrap gap-5 justify-center ">
            <div className="">
              <div className="flex justify-between gap-3">
                <h1 className="text-lg text-[#111535] font-[600]">
                  Injection/Home IV therapy
                </h1>
                <Checkbox className="self-end border-[#898B9F] w-[28px] h-[28px] border-2 rounded-[4px]" />
              </div>

              <p className="mt-5 tracking-tight text-[#898B9F] font-normal text-justify text-lg ">
                The nurse injects a drug or solution directly into the vein or
                through IV cannula, the nurse will confirm allergy history prior
                to give IV treatment.{" "}
                <button
                  className="text-[#AF2245]"
                  onClick={() => handleDetail()}
                >
                  {details === false ? "More details" : "Hide details"}
                </button>
              </p>
            </div>
            {details && (
              <p className="mt-5 bg-red-700 bg-opacity-10 tracking-tight text-[#898B9F] p-1 rounded-[8px] font-normal text-justify text-lg">
                Includes : Syringe and IV tube will be brought. Possibility to
                check allergy from the prescribed medication by taking a drug
                allergy test. , * solutions and drugs to be injected are not
                included. , *Instructions: The patient must present a medical
                prescription that includes the medication name and dosages.
              </p>
            )}
          </div>

          <div className="w-full md:w-[35%] flex flex-col items-start">
            <h2 className="selectedCard">Selected Items</h2>
            <div className="w-full rounded-[7px] flex flex-col items-center justify-center mt-3 gap-5 bg-[#F6F7F9] py-5 px-5">
              <div className=" w-full relative bg-red-700 bg-opacity-10 gap-5 py-4 px-10 rounded-[13px]">
                <h2 className="text-[#AF2245] text-sm font-semibold ">
                  Children’s Vaccination ( Age: 2 month )
                </h2>
                <Image
                  className="absolute cursor-pointer top-[-10px] right-0"
                  src="/images/cross.svg"
                  alt="not found"
                  width={30}
                  height={30}
                />
              </div>

              <button className=" w-full bg-[#AF2245] flex items-center justify-center gap-5 py-4 px-10 rounded-[13px] text-white ">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* end packges */}
      </div>
    </>
  );
}

export default Page;
