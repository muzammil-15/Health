"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Menunav from './Menunav';
import { navlinks } from "@/constants";
import { useRouter } from "next/navigation";
import Menunav from "./Menunav";
import { Languages } from "./Languages";
// import ShopDropdown from './ShopDropdown';

function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#FFF] h-[80px] px-16 sm:padding-x  flex justify-between items-center ">
        <div className="hidden lg:block ">
          <div className=" flex justify-center">
            <Link key={1} className="flex items-center mr-20" href="/">
              {" "}
              <Image
                src="/images/logo.png"
                alt="not found"
                width={50}
                height={50}
              />
            </Link>

            {navlinks.map((item, ind) => (
              <Link
                key={ind}
                className="mx-6 flex items-center text-[#111535] text-lg font-medium hover:text-[#AF2245]"
                href={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          <Languages />

          <button className="bg-[#AF2245] ml-10 text-lg font-normal p-2 w-[160px] h-[50px] rounded-[8px] text-[#FFF]">
            LOGIN
          </button>
        </div>

        <div className="flex flex-col justify-center  lg:hidden">
          <Menunav />
        </div>
      </header>
    </>
  );
}

export default Navbar;
