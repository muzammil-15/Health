"use client";

import Image from "next/image";
import { useState } from "react";
import { Languages, ChevronDown, Menu,X } from "lucide-react";
import dynamic from "next/dynamic";
import Sidebar from "./Sidebar"


const DNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Initial language

  const [toogle , setToogle] = useState(false)
  const languages = ["English", "Arbi"]; // List of available languages

  const handleLanguageChange = (e: any) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    // Implement language change logic here
  };

  return (
    <nav className="bg-[#AF22451A] text-white py-4 px-8 flex justify-between items-center">
      {/* Logo on the left */}
      <div className={`flex items-center gap-10`}>
        
          <Menu color="#AF2245" className="cursor-pointer lg:hidden" onClick={()=> setToogle(!toogle)}/>

          {toogle ?
            <div className="absolute top-0 left-0 h-full w-[300px] z-80 overflow-y-scroll">
              <X color="#AF2245" className="absolute top-4 right-1 lg:hidden" onClick={()=> setToogle(!toogle)}/>
              <Sidebar />
              sidebar
            </div>
            : ""
          }
          
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Language selection on the right */}
      <div className="flex gap-2 items-center text-black border p-2 border-[#AF2245] rounded-[6px]">
        <Languages className="mr-2" />
        <select
          className="text-black bg-transparent focus:outline-none"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languages.map((language) => (
            <option
              key={language}
              value={language}
              className="text-[#AF2245] bg-[#AF22451A] p-4"
            >
              {language}
            </option>
          ))}
        </select>
        {/* <ChevronDown className="ml-2" /> */}
      </div>
      
    </nav>
  );
};

export default dynamic(() => Promise.resolve(DNavbar), { ssr: false });
