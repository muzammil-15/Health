"use client";

import AddMainService from "@/components/AddMainService";

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
  Ename: string;
  Aname: string;
  Status: boolean;
  desc: string;
  icon: any;
}

const MianServices: React.FC = () => {
  const data: Service[] = [
    {
      Image: "/images/vdconsult.png",
      Ename: "Laboratory",
      Aname: "Laboratory",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      Ename: " Doctor Visit",
      Aname: " Doctor Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Nurse Visit",
      Aname: "Nurse Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Laboratory",
      Aname: "Laboratory",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      Ename: " Doctor Visit",
      Aname: " Doctor Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
      icon: ClipboardEdit,
    },
    {
      Image: "/images/vdconsult.png",
      Ename: "Nurse Visit",
      Aname: "Nurse Visit",
      Status: true,
      desc: "Emphasizes the company's ability To work on commercial roofing.",
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
                <div className="flex justify-between items-center self-start">
                  <Image
                    width={80}
                    height={80}
                    alt="image"
                    src={service.Image}
                    className="bg-[#AF22451A] p-3 rounded-md"
                  />
                  <span>{service.Ename}</span>
                  <span>{service.Aname}</span>
                  <Switch defaultChecked={service.Status} color="#af2245" />
                  <button onClick={openModal}>
                    {/* Render the icon component within the button */}
                    {service.icon && <service.icon color="#af2245"/>}
                    </button>
                  <AccordionTrigger></AccordionTrigger>
                </div>

                <AccordionContent className="mt-5">
                  {service.desc}
                </AccordionContent>
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
          <h2 className="subheading">Our Services</h2>
          <p className="mt-5">You have 10 List of main Services</p>

          <div className=" gap-5 w-full  flex flex-col items-start  md:flex-row    justify-between ">
            <div className="sm:w-[40%]   h-[50px] p-3  flex    items-center rounded-[5px] bg-[#FFF]">
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
            <button
              onClick={openModal}
              className="flex gap-2 border-dashed justify-center py-2 px-10 rounded-lg items-center border border-[#af2245] bg-[#AF22451A]  text-[#af2245] "
            >
              <Plus color="#af2245" /> <span>Add New Service</span>
            </button>
          </div>
        </div>
      </div>
      {/* show services */}
      <div className="w-full py-3 bg-[#af2245] mt-10 rounded-t-[6px] text-white self-start flex justify-between  px-10 items-center">
        <span>Image</span>
        <span>En Name</span>
        <span>Ar Name</span>
        <span>Status</span>
        <span></span>
        <span></span>
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

      <AddMainService
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default MianServices;
