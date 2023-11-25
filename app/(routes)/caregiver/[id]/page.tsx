"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Checkbox } from "@/components/ui/checkbox"















const arr = [{ id: 1 },
{ id: 1 }
    , { id: 1 },
{ id: 1 },
{ id: 1 },
{ id: 1 },

];



function page() {


    return (
        <>

            {/* caregiver herosection  start*/}
            <div className="padding-x bg-red-700 bg-opacity-10 py-10">
                <div className="flex flex-col lg:flex-row gap-5 justify-between">

                    <button className='flex items-center'>
                        <Image className='mx-4' src="/images/arrow.svg" alt='not found' width={50} height={50} /> <span className='mx-4'>Back</span></button>



                    <div className="flex  items-center gap-5">

                        <input type='progess' disabled className='bg-[#AF2248] w-[20%] h-[3px]' />
                        <input type='progess' disabled className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' disabled className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' disabled className='bg-[#FFF] w-[20%] h-[3px]' />


                    </div>



                </div>

            </div>



            {/* vaccination herosection enbd */}
            <div className="padding-x">





                {/* pakeges component */}



                <div className='mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top'>

                    <div className='w-full  bg-red-700 bg-opacity-10  rounded-[8px]  md:w-[60%]   '>

                       



                        <div className="flex  gap-5 flex-col md:flex-row  md:items-center">

                            <div className="">
                                <Image className='rounded-[8px]' src="/images/caregiver.jpg" alt='not found' width={300} height={150} />

                            </div>
                            <h1 className="mt-5 text-[24px] font-[700] pl-2 text-[#111535]">Select caregiver task</h1>

                        </div>

                        <div className="mt-5">
                            <h1 className="text-[17px] font-[700] text-[#AF2245] pl-2 ">Includes</h1>
                            <p className=" text-lg font-[400] text-justify flex items-start  p-2 text-[#AF2245]"> <span><input className='w-[32px] h-[32px] mr-2   checked:bg-[#AF2245]' type="radio" checked />
                            </span>** Does not include specialized nursing services such as injections.</p>

                        </div>




                    </div>





                    <div className='w-full md:w-[35%] flex flex-col items-start'>
                        <h2 className='selectedCard'>Selected Items</h2>
                        <div className='w-full rounded-[7px]  mt-5 bg-[#F6F7F9] py-5 px-5'>
                            <h1 className='text-[#111535] font-[600]'>1 Week - 12 Hours</h1>

                            <button className='mt-3 w-full bg-[#AF2245] flex items-center justify-center gap-5 py-4 px-10 rounded-[8px] text-white ' >

                                Start from SAR 3000

                            </button>
                        </div>
                        {/* 
                        copies start
                         */}
                        <div className='w-full rounded-[7px]  mt-5 bg-[#F6F7F9] py-5 px-5'>
                            <h1 className='text-[#111535] font-[600]'>1 Week - 12 Hours</h1>

                            <button className='mt-3 w-full bg-[#AF2245] flex items-center justify-center gap-5 py-4 px-10 rounded-[8px] text-white ' >

                                Start from SAR 3000

                            </button>
                        </div>
                        {/* copies end */}

                    </div>
                </div>

                {/* end packges */}













            </div>


        </>
    )
}

export default page