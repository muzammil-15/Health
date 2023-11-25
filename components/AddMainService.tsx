"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

interface MyComponentProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const AddMainService: React.FC<MyComponentProps> = ({
  isModalOpen,
  setModalOpen,
  closeModal,
}) => {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImageClick = () => {
    setIsInputDisabled(false);
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }

    // After handling the file, you might want to disable the input again
    setIsInputDisabled(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform actions with the form data, including the file
    console.log("Form submitted with data:", {
      enName: event.currentTarget.enName.value,
      arName: event.currentTarget.arName.value,
      desc: event.currentTarget.desc.value,
      file,
    });
  };

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
                <Image
                  src={"/images/cross.svg"}
                  width={30}
                  height={30}
                  alt="cross"
                />
              </button>
            </div>

            <h2 className="text-[#AF2245] text-2xl font-[600]">Main Service</h2>

            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col items-start mt-5 gap-4 p-3">
                <div className="flex  justify-center items-center gap-5">
                  <Image
                    src={"/images/doctor.png"}
                    width={70}
                    height={70}
                    alt="profile"
                    className="flex items-center justify-center rounded-md"
                  />
                  <input
                    type="file"
                    placeholder="Upload Image"
                    onChange={handleFileChange}
                    disabled={isInputDisabled}
                    ref={inputRef}
                    style={{ display: "none" }}
                  />
                  <span
                    onClick={handleUploadImageClick}
                    className="text-[18px] text-[#333333] cursor-pointer font-[500]"
                  >
                    Upload Image
                  </span>
                </div>
                <div className="flex justify-start items-center gap-10">
                  <div className="flex flex-col  gap-3">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      En Name
                    </label>
                    <input
                      type="text"
                      name="enName"
                      placeholder="Name of Service"
                      className="text-[18px] text-center p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col  gap-3">
                    <label
                      htmlFor="arName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Ar Name
                    </label>
                    <input
                      type="text"
                      name="arName"
                      placeholder="Name of Service"
                      className="text-[18px] text-center p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col  gap-2 w-full">
                  <label
                    htmlFor="desc"
                    className="text-[#111535] text-[20px] font-[400]"
                  >
                    En Description
                  </label>
                  <textarea
                    rows={1}
                    name="desc"
                    placeholder="Emphasizes the company's ability to work on commercial roofing."
                    className="text-[18px] w-full p-1  text-center font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                  />
                </div>
                <div className="flex flex-col  gap-2 w-full">
                  <label
                    htmlFor="desc"
                    className="text-[#111535] text-[20px] font-[400]"
                  >
                    Ar Description
                  </label>
                  <textarea
                    rows={1}
                    name="desc"
                    placeholder="Emphasizes the company's ability to work on commercial roofing."
                    className="text-[18px] w-full p-1  text-center font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 "> 
                    <label htmlFor="" className="text-[#AF2245] text-[18px] font-[400]">Status</label>
                    <div className="flex items-center gap-1">
                      <input type="radio" className="bg-[#AF2245] border-[#AF2245] rounded-full p-2"/> 
                      <span className="text-[#898B9F] text-[18px] font-[400]">Active</span> 
                    </div>
                  </div>
                  <div className="flex gap-4">
                    
                    <button className="text-[16px] bg-[#AF22451A] font-[400] text-[#AF2245] py-2 px-4 rounded-[6px] ">Reset</button>
                    <button type="submit" className="text-[16px] text-[#FFFFFF] font-[400] bg-[#AF2245] py-2 px-4 rounded-[6px] ">Save</button>
                  </div>
                  
                </div>
              </div>

              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMainService;
