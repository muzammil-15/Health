"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalenderDate } from "@/components/Calender";
import { checkupTimings } from "@/lib/utils";

function page() {
  const [date, setDate] = React.useState<Date>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [details, setdetails] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setDate(date);
    // Add any other logic you need to perform when a date is selected
  };

  const daysInMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDetail = () => {
    setdetails(!details);
  };

  return (
    <>
      {/* nurse herosection  start*/}
      <div className="padding-x bg-red-700 bg-opacity-10 py-10">
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
        <div className="flex flex-col sm:flex-row  mt-5 items-center">
          <div className="left w-full ">
            <h1 className="global__title">Full Body</h1>

            <div className=" gap-5 w-full justify-between flex flex-col sm:flex-row mt-12 ">
              <div className="sm:w-[40%]   h-[50px] p-3  flex  items-center rounded-[5px] bg-[#FFF]">
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
              {/* calender */}

              <div className="w-full sm:w-[50%]">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        {/* Render dates dynamically based on the month */}
                        <td className="flex ">
                          {daysInMonth.map((day) => (
                            <div
                              key={day}
                              className={`w-[40px] h-[40px] flex   items-center justify-center ml-2 ${
                                selectedDate?.getDate() === day
                                  ? "bg-[#AF2245] text-white rounded-3xl"
                                  : "bg-[#fdc6d4] rounded-md"
                              }`}
                            >
                              {day}
                            </div>
                          ))}
                        </td>
                      </tr>
                      {/* Add other rows if needed */}
                    </tbody>
                  </table>
                </div>
              </div>
              <CalenderDate
                date={date}
                setDate={setDate}
                handleDateSelect={handleDateSelect}
              />
            </div>
          </div>
        </div>
      </div>

      {/* nurse herosection enbd */}
      <div className="padding-x">
        {/* pakeges component */}

        <div className="mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top">
          {/* filter section starts */}
          <div className="w-full bg-[#AF22451A] Shadowbg rounded-[8px] p-3   md:w-[30%] flex flex-col items-start gap-7">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-[600] text-[#111535]">FILTERS</h2>
              <h3 className="text-[#AF2245] font-[600] text-[16.5px]">Price</h3>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="Low to high"
                    id="option-one"
                    className="text-[#222222]"
                  />
                  <Label htmlFor="option-one" className="text-[#222222]">
                    Low to high
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="High to low"
                    id="option-two"
                    className="text-[#222222]"
                  />
                  <Label htmlFor="option-two" className="text-[#222222]">
                    High to low
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-[600] text-[#AF2245]">
                Select Gender
              </h2>

              <div>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Any"
                      id="option-one"
                      className="text-[#222222]"
                    />
                    <Label htmlFor="option-one" className="text-[#222222]">
                      Any
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="male"
                      id="option-one"
                      className="text-[#222222]"
                    />
                    <Label htmlFor="option-one" className="text-[#222222]">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="female"
                      id="option-two"
                      className="text-[#222222]"
                    />
                    <Label htmlFor="option-two" className="text-[#222222]">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          {/* filter section ends */}

          {/* Physiotherapist section starts */}

          <div className="w-full bg-[#FFF] border-dashed border-2 border-[#898B9F] rounded-[8px] p-4 md:w-[60%] flex flex-wrap gap-5 justify-center ">
            <div className="w-full bg-[#FFF]  Shadowbg rounded-[8px] p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-col lg:flex-row  gap-5">
                  <div className="left ">
                    <Image
                      src="/images/doctor.png"
                      alt="not found"
                      width={150}
                      height={200}
                    />
                  </div>
                  <div className="left  flex flex-col gap-1">
                    <h2 className="text-[#AF2245] font-[600] text-[16.5px]">
                      Dr Sarah Mitchel
                    </h2>
                    <h2 className="text-[16px] text-[#111535] font-[600]">
                      Physiotherapist
                    </h2>
                    <div className="text-[#898B9F] ">
                      EXPERIENCE{" "}
                      <span className="text-[#111535] font-bold">6 Years</span>
                    </div>
                    <Link
                      href={"/"}
                      className="text-[#AF2245] underline font-[600]"
                    >
                      View Selected Details
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border-l-2 border-dashed  border-[#898B9F] h-[100px] "></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] text-[#111535] font-[600]">
                      Price
                    </h2>
                    <h2 className="text-[16px] text-[#AF2245] font-[600]">
                      SAR 540
                    </h2>
                    <h2 className="text-[10px] text-[#86909D] font-[700]">
                      Included visit free
                    </h2>
                  </div>
                </div>
              </div>
              <CheckupSchedule checkupTimings={checkupTimings} />
            </div>
          </div>

          {/* Physiotherapist section end */}
        </div>

        {/* end packges */}
      </div>
    </>
  );
}

export default page;

// checup timing

interface CheckupTiming {
  time: string;
  isAvailable: boolean;
}

interface CheckupScheduleProps {
  checkupTimings: CheckupTiming[];
}

const CheckupSchedule: React.FC<CheckupScheduleProps> = ({
  checkupTimings,
}) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleTimeClick = (time: string, isAvailable: boolean) => {
    if (isAvailable) {
      setSelectedTime((prevSelectedTime) =>
        prevSelectedTime === time ? null : time
      );
      // Set isAvailable to false (if needed in your logic)
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const scrollDistance = 200; // Adjust the scroll distance as needed
      const scrollDirection =
        direction === "left" ? -scrollDistance : scrollDistance;

      scrollContainer.scrollLeft += scrollDirection;
    }
  };

  return (
    <>
      <div className="flex items-center gap-5 mt-5">
        <button
          className="bg-[#AF2245] rounded-full p-2"
          onClick={() => handleScroll("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-3 p-4 "
        >
          {checkupTimings.map((timing) => (
            <div
              key={timing.time}
              className={`py-1 px-2  border border-[#AF2245] rounded-md cursor-pointer flex justify-center items-center text-[12px] ${
                selectedTime === timing.time || timing.isAvailable === false
                  ? "bg-[#AF2245] text-white"
                  : ""
              } ${!timing.isAvailable ? "opacity-50" : ""}`}
              onClick={() => handleTimeClick(timing.time, timing.isAvailable)}
            >
              {timing.time}
            </div>
          ))}
        </div>
        <button
          className="bg-[#AF2245] rounded-full p-2 "
          onClick={() => handleScroll("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
};
