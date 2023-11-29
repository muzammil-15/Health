"use client";

import AddMainService from "@/components/AddMainService";
import AddSubService from "@/components/AddSubService";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, ChevronRight, ClipboardEdit, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Define types for the service data
interface Service {
  Image: string;
  SubService: string;
  Price: number;
  Status: boolean;
  desc: string;
  Instructions: string;
  icon: any;
}

const MianServices: React.FC = () => {
  const data: Service[] = [
    {
      Image: "/images/vdconsult.png",
      SubService: "Full Body",
      Price:  300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: " Diebeties",
      Price: 300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: "Cholestrol",
      Price: 300,
      Status: true,
      Instructions: "No fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: "Hair fall",
      Price: 300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: " Skin",
      Price: 300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: "Full Body",
      Price: 300,
      Status: false,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: " Diebeties",
      Price: 300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: "Cholestrol",
      Price: 300,
      Status: true,
      Instructions: "No fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: "Hair fall",
      Price: 300,
      Status: false,
      Instructions: "12 hours fasting",
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      SubService: " Skin ",
      Price: 300,
      Status: true,
      Instructions: "12 hours fasting",
      desc: `Emphasizes the company's ability To  work on commercial roofing.`,
      icon: ClipboardEdit,
    },
  ];

  const itemsPerPage: number = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPageCount: number = Math.ceil(data.length / itemsPerPage);

  const renderServices = (): JSX.Element[] => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return data
      .slice(startIndex, endIndex)
      .map((service: Service, ind: number) => (
        <div key={ind}>
          <div key={ind}>
            <Accordion
              type="single"
              collapsible
              className="mt-1 w-full bg-[#FFF] rounded-[8px] "
            >
              <AccordionItem className="  p-4 px-4" value="item-1">
                <div className="flex justify-between  items-center gap-10">
                  <div className="flex-grow text-left">
                    <Image
                      width={80}
                      height={80}
                      alt="image"
                      src={service.Image}
                      className="bg-[#AF22451A] p-3 rounded-md "
                    />
                  </div>
                  <span className="flex-grow text-left text-[14px] font-[400] text-[ #333]">{service.SubService}</span>
                  <span className="flex-grow text-left text-[14px] font-[400] text-[ #333]">{service.Price}</span>
                  <span className="flex-grow text-left text-[11px] font-[400] w-[14%]">{service.desc}</span>
                  <span className="flex-grow text-left text-[14px] font-[400] text-[ #333]">{service.Instructions}</span> 
                  <div className="flex-grow text-left">
                    <Switch defaultChecked={service.Status} color="#af2245" />
                  </div>
                  <button onClick={openModal} className="flex-grow text-left ">
                    {service.icon && <service.icon color="#af2245" />}
                  </button>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ));
  };

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
    <div className="padding-x  py-10">
      <div className="flex flex-col lg:flex-row gap-5 ">
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
      </div>
      <div className="flex flex-col sm:flex-row  mt-5 items-center">
        <div className="left w-full flex flex-col gap-3 ">
          <div className="flex flex-col gap-8 md:flex-row justify-between items-start ">
            <h2 className="subheading">Our Sub-Services</h2>
            <button
              onClick={openModal}
              className="flex gap-2 border-dashed justify-center py-2 px-10 rounded-lg items-center border border-[#af2245] bg-[#AF22451A]  text-[#af2245] "
            >
              <Plus color="#af2245" /> <span>Add a Sub Service</span>
            </button>
          </div>

          <p className="mt-5">You have {data.length} List of sub Services</p>

          <div className=" gap-5 w-full  flex flex-col items-start  md:flex-row    justify-between">
            <div className="sm:w-[40%]   h-[50px] p-3  flex    items-center rounded-[5px] bg-[#FFF]">
              <input
                className="w-full md:w-[80%] h-[45px] outline-none "
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
            <select
              name="Services filter"
              id="sub services"
              className="flex outline-none gap-2  justify-center py-2 px-10 rounded-lg items-center border border-[#af2245] bg-[#AF22451A]  text-[#af2245] "
              
            >
              <option value="" className="hidden" disabled selected>Service filter</option>
              <option value="Doctors visit">Doctors visit</option>
              <option value="Caregiver">Caregiver</option>
              <option value="Vaccination">Vaccination</option>
              <option value="Nursing Service">Nursing Service</option>
              <option value="Medical Test">Medical Test</option>
              
            </select>
          </div>
        </div>
      </div>
      {/* show services */}
      <div className="w-full py-3 bg-[#af2245] mt-10 rounded-t-[6px] text-white self-start flex justify-between  px-10 items-center">
        <span className="flex-grow text-left">Image</span>
        <span className="flex-grow text-left">Sub Service Name</span>
        <span className="flex-grow text-left">Price</span>
        <span className="flex-grow text-left">Description</span>
        <span className="flex-grow text-left">Instructions</span>
        <span className="flex-grow text-left">Status</span>
        <span className="flex-grow text-left"></span>
      </div>

      {/* show services */}
      <div className="w-full py-2 flex flex-col gap-3">{renderServices()}</div>

      {/* Pagination */}
      <div className="mt-5 flex gap-3 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex justify-center gap-2 py-2 px-3 border border-[#af2245] rounded-lg items-center  text-[#af2245] "
        >
          <ChevronLeft color="#af2245" />
          <span>Previous</span>
        </button>
        <span className="bg-[#AF22451A] text-[#af2245] rounded-sm py-1 px-3">
          {currentPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
          className="flex justify-center gap-2 py-2 px-3 border border-[#af2245] rounded-lg items-center  text-[#af2245] "
        >
          <span>Next</span>
          <ChevronRight color="#af2245" />
        </button>
      </div>

      <AddSubService
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default MianServices;
