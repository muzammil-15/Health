"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

interface MyComponentProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const AddSubService: React.FC<MyComponentProps> = ({
  isModalOpen,
  setModalOpen,
  closeModal,
}) => {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [file, setFile] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    enName: "",
    arName: "",
    enDescription: "",
    arDescription: "",
    service: "",
    serviceType: "",
    enInstructions: "",
    arInstructions: "",
    enTitle: "",
    arTitle: "",
    price: 0,
    healthcare: "",
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImageClick = () => {
    setIsInputDisabled(false);
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }

    // After handling the file, you might want to disable the input again
    setIsInputDisabled(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform actions with the form data, including the file
    console.log("Form submitted with data:", { ...formData, file });

    // Add logic to send data to the server or perform other actions

    // Reset form state (clear inputs and file)
    setFormData({
      enName: "",
      arName: "",
      enDescription: "",
      arDescription: "",
      service: "",
      serviceType: "",
      enInstructions: "",
      arInstructions: "",
      enTitle: "",
      arTitle: "",
      price: 0,
      healthcare: "",
    });
    setFile(null);

    // Close the modal or perform any other necessary actions
    closeModal();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col items-start mt-5 gap-10 p-3">
                <div className="flex  justify-center items-center gap-5">
                  <Image
                    src={file || `/images/doctor.png`}
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
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      English Name
                    </label>
                    <input
                      type="text"
                      name="enName"
                      placeholder="Name of Service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="arName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Arabic Name
                    </label>
                    <input
                      type="text"
                      name="arName"
                      placeholder="Name of Service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      English Discription
                    </label>
                    <input
                      type="text"
                      name="enName"
                      placeholder="Name of Service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="arName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Arabic Description
                    </label>
                    <input
                      type="text"
                      name="arName"
                      placeholder="Name of Service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <select
                      name="Services"
                      id="service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    >
                      <option value="" className="hidden" disabled selected>
                        Services
                      </option>
                      <option value="Doctors visit">Doctors visit</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nursing Service">Nursing Service</option>
                      <option value="Medical Test">Medical Test</option>
                    </select>
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <select
                      name="Services Type"
                      id="service type"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    >
                      <option value="" className="hidden" disabled selected>
                        Service Type
                      </option>
                      <option value="Doctors visit">Doctors visit</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nursing Service">Nursing Service</option>
                      <option value="Medical Test">Medical Test</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <input
                      type="text"
                      name="eninstructions"
                      placeholder="English Instructions"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <input
                      type="text"
                      name="arinstructions"
                      placeholder="English Instructions"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      English Available Test Title
                    </label>
                    <input
                      type="text"
                      name="enTitle"
                      placeholder="Services"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="arTitle"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Arabic Available Test Title
                    </label>
                    <input
                      type="text"
                      name="arName"
                      placeholder="Services"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="price"
                      className="text-[18px] p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="arTitle"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Name of HealthCare
                    </label>
                    <input
                      type="text"
                      name="healthcare"
                      placeholder="HealthCare"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="flex  justify-center items-center w-full">
                  <button
                    type="submit"
                    className="text-[18px] text-[#AF2245] font-[400] bg-[#e6e4e4] hover:bg-[#AF2245] hover:text-[#e6e4e4] border border-[#A9A9A9] py-2 px-4 rounded-[6px] w-[80%] lg:w-[60%]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSubService;
