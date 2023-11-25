"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Dispatch, SetStateAction } from 'react';

interface MyComponentProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const AddMainService:  React.FC<MyComponentProps> = ({ isModalOpen, setModalOpen, closeModal }) => {
  

  interface Services {
    title: string;
    img: string;
    desc: string;
  }

  const Servicesoptions: Services[] = [
    {
      title: "General Medicine",
      img: "/images/doctor.png",
      desc: "Doctors John William",
    },
    {
      title: "Family Medicine",
      img: "/images/doctor.png",
      desc: "David Martinez",
    },
    {
      title: "Psychiatry",
      img: "/images/doctor.png",
      desc: "Emily Davis",
    },
    {
      title: "Phychology",
      img: "/images/doctor.png",
      desc: "Michael Anderson",
    },
    {
      title: "General Medicine",
      img: "/images/doctor.png",
      desc: "Doctors John William",
    },
    {
      title: "Family Medicine",
      img: "/images/doctor.png",
      desc: "David Martinez",
    },
    {
      title: "Psychiatry",
      img: "/images/doctor.png",
      desc: "Emily Davis",
    },
    {
      title: "Phychology",
      img: "/images/doctor.png",
      desc: "Michael Anderson",
    },
  ];


  return (
    <div
      className={`  ${
        !isModalOpen ? "hidden" : "flex"
      } min-h-screen  items-center justify-center `}
    >
      
      {isModalOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="bg-white h-[90vh] p-4 rounded-lg shadow-md w-[80%] md:w-[65%] z-50 overflow-y-scroll">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <div className="flex flex-col lg:flex-row gap-5 ">
                <button className="flex items-center" onClick={closeModal}>
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
                    className="bg-[#AF2245] w-[20%] h-[3px]"
                    disabled
                  />
                  <input
                    type="progess"
                    className="bg-[#cac9c9] w-[20%] h-[3px]"
                    disabled
                  />
                  <input
                    type="progess"
                    className="bg-[#c7c5c5] w-[20%] h-[3px]"
                    disabled
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-2">
                <h2 className="text-[#111535] text-2xl font-[600]">
                  E-Clinics
                </h2>
                <div className="sm:w-[50%]   h-[50px] p-3  flex border border-[#999999] items-center rounded-[5px] bg-[#FFF]">
                  <input
                    className="w-[80%] h-[45px] outline-none text-[#999999] "
                    placeholder="Search Speciality "
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
              <div className="flex flex-wrap gap-5 mt-5">
                {Servicesoptions.map((item, ind) => (
                  <div
                    className="ServiceCard bg-[#FFF] flex rounded-md  gap-5 justify-between hover:bg-[#e9e8e8] p-5"
                    key={ind}
                  >
                    <Image
                      src="/images/doctor.png"
                      alt="not found"
                      width={150}
                      height={200}
                    />
                    <div className="flex flex-col justify-center items-start gap-2 ">
                      <h2 className="text-[22px] text-[#111535] font-[600]">
                        General Medicine
                      </h2>
                      <p className="text-[#898B9F] text-[18px] font-[400]">
                        Doctors John William
                      </p>
                      <button className="bg-[#AF2245] text-[#fff] p-2 rounded-md w-[180px]">
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMainService;
