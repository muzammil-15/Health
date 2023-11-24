"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import React, { useState } from "react";

// Define types for the service data
interface Service {
  Image: string;
  Ename: string;
  Aname: string;
  Status: boolean;
  desc: string;
}

const MianServices: React.FC = () => {
  const data: Service[] = [
    {
      Image: "/images/vdconsult.png",
      Ename: "Video Consultation",
      Aname: "Video Consultation",
      Status: false,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Laboratory",
      Aname: "Laboratory",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
    },
    {
      Image: "/images/vdconsult.png",
      Ename: " Doctor Visit",
      Aname: " Doctor Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Nurse Visit",
      Aname: "Nurse Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Video Consultation",
      Aname: "Video Consultation",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Video Consultation",
      Aname: "Video Consultation",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
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
        <div key={ind}><div key={ind}>
        <Accordion
          type="single"
          collapsible
          className="mt-5 w-full Shadowbg"
        >
          <AccordionItem
            className="bg-[#FFF]  p-4   rounded-[8px] px-4"
            value="item-1"
          >
            <div className="flex justify-between items-center gap-32">
              <Image width={70} height={70} alt="image" src={service.Image} />
              <p>{service.Ename}</p>
              <p>{service.Aname}</p>
              <Switch defaultChecked={service.Status} />
              <AccordionTrigger></AccordionTrigger>
            </div>

            <AccordionContent className="mt-5">
              {service.desc}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div></div>
      ));
  };

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };

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
          <h2 className="subheading">Our Services</h2>
          <p className="mt-5">you have 10 List of main Services</p>

          <div className=" gap-5 w-full justify-between flex items-center    ">
            <div className="sm:w-[40%]   h-[50px] p-3  flex border border-gray-700   items-center rounded-[5px] bg-[#FFF]">
              <input
                className="w-[80%] h-[45px] outline-none "
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
            <button className="flex justify-center py-2 px-10 rounded-lg items-center bg-[#af2245] text-[#FFF] ">
              Add New Service
            </button>
          </div>
        </div>
      </div>
      {/* show services */}
      <div className="w-full py-3 bg-[#af2245] mt-10 text-white flex justify-start gap-40 px-10 items-center">
        <span>Image</span>
        <span>En Name</span>
        <span>Ar Name</span>
        <span>Status</span>
      </div>

      {/* show services */}
      <div className="w-full py-5 flex flex-col gap-3">{renderServices()}</div>

      {/* Pagination */}
      <div className="mt-5 flex gap-3 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex justify-center py-2 px-5 border border-[#af2245] rounded-lg items-center  text-[#af2245] "
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
          className="flex justify-center py-2 px-5 border border-[#af2245] rounded-lg items-center  text-[#af2245] "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MianServices;
