"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

const DNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Initial language

  const languages = ['English', 'Arbi']; // List of available languages

  const handleLanguageChange = (e:any) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    // Implement language change logic here
  };

  return (
    <nav className="bg-[#AF22451A] text-white py-1 px-8 flex justify-between items-center">
      {/* Logo on the left */}
      <div>
        <Image src="/images/logo.png" alt="Logo" width={50} height={20} />
      </div>

      {/* Language selection on the right */}
      <div className="flex items-center text-black">
        <Languages className="mr-2" />
        <select
          className="text-black"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        {/* <ChevronDown className="ml-2" /> */}
      </div>
    </nav>
  );
};

export default DNavbar;
