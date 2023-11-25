"use client";

import Image from "next/image";
import { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const DNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Initial language

  const languages = ["English", "Arbi"]; // List of available languages

  const handleLanguageChange = (e: any) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    // Implement language change logic here
  };

  return (
    <nav className="bg-[#AF22451A] text-white py-3 px-8 flex justify-between items-center">
      {/* Logo on the left */}
      <div>
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
