"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VertualModal from "./VertualModal";

interface Services {
  title: string;
  img: string;
  desc: string;
}

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Servicesoptions: Services[] = [
  {
    title: "Video Consultation",
    img: "/images/vdconsult.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Laboratory",
    img: "/images/microscope.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Home visit Doctor",
    img: "/images/homelocation.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Nurse visit",
    img: "/images/nurse.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Vitamin IV Drips",
    img: "/images/drips.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Caregiver",
    img: "/images/Caregiver.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Physiotherapist",
    img: "/images/Physiotherapist.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
  {
    title: "Seasonal Flu Vaccination",
    img: "/images/Seasonal.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },

  {
    title: "Radiology",
    img: "/images/Radiology.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },

  {
    title: "Vaccination",
    img: "/images/Vaccination.png",
    desc: "Emphasizes the company's ability To work on commercial roofing.",
  },
];

const SampleNextArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return null; // Replace with your desired content
};

function ServiceSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="padding-x mt-10">
        <h1 className="global__title  text-[#AF2245]">Our Services</h1>

        <div className="hidden mt-10 sm:flex gap-5 justify-center flex-wrap">
          {/* services box */}

          {Servicesoptions.map((item, ind) => (
            <div
              className="ServiceCard bg-[#FFF] flex flex-col justify-between hover:bg-[#e9e8e8] w-[220px] h-[228px]"
              key={ind}
            >
              <div className="w-full  flex flex-col items-center p-5">
                <Image src={item.img} alt="not found" width={50} height={50} />

                <h1 className="mt-5 text-sm font-normal text-[#141422]">
                  {item.title}
                </h1>
                <p className="text-[#898B9F] text-[10px] mt-5 font-normal text-center">
                  {item.desc}
                </p>
              </div>

              <button
                className="text-[#AF2245] text-lg font-bold p-2 flex justify-center items-center border-t-2 border-[#CDCDCD]"
                onClick={openModal}
              >
                Continue{" "}
                <Image
                  src="/images/servicearrow.png"
                  alt="not found"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))}
        </div>

        {/* this is for mobile version */}
        <div className="block sm:hidden">
          <Slider {...settings}>
            {Servicesoptions.map((item, ind) => (
              <div
                className=" bg-[#e9e8e8] flex flex-col justify-between  w-[220px] h-[228px]"
                key={ind}
              >
                <div className="w-full  flex flex-col items-center p-5">
                  <Image
                    src={item.img}
                    alt="not found"
                    width={50}
                    height={50}
                  />

                  <h1 className="mt-5 text-sm font-normal text-[#141422]">
                    {item.title}
                  </h1>
                  <p className="text-[#898B9F] text-[10px] mt-5 font-normal text-center">
                    {item.desc}
                  </p>
                </div>

                <button className="w-full text-[#AF2245] text-lg font-bold p-2 flex justify-center items-center border-t-2 border-[#CDCDCD]">
                  Continue{" "}
                  <Image
                    src="/images/servicearrow.png"
                    alt="not found"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </Slider>
          
        </div>
        
        <VertualModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} closeModal={closeModal}/>
      </div>
    </>
  );
}

export default ServiceSection;
