"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Checkbox } from "@/components/ui/checkbox"















const arr = [{id:1},
    {id:1}
    ,{id:1},
    {id:1},
    {id:1},
    {id:1},

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




            {/* caregiver herosection enbd */}
            <div className="padding-x">


                <h1 className="mt-5 global__title text-[#111535]">How we are working</h1>
                <p className="mt-5 Shadowbg p-2 rounded-[8px] text-lg font-[400] text-justify text-[#898B9F]">Our caregivers have undergone professional training to handle the task responsibly. They are also certified by the Ministry of Health, Saudi Arabia. They are experienced to aid the patient with activities of daily living such as personal care and hygiene, bathing, dressing and other defined set of duties and responsibilities according to the needs & type of service.</p>


                {/* pakeges component */}



                <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>

                    {
                        arr.map(((item) => (


                            <div key={item.id} className=" Shadowbg bg-[#FFF] rounded-[8px]">

                                <div className="flex  gap-5 items-center">

                                    <div className="">
                                        <Image className='rounded-[8px]' src="/images/caregiver.jpg" alt='not found' width={300} height={150} />

                                    </div>
                                    <div className="">
                                        <h2 className="text-[#AF2245] text-lg font-[700]">Up to 4 weeks</h2>
                                        <h2 className="text-[#AF2245] mt-2 text-lg font-[700]">12 hrs/day in house care</h2>


                                    </div>
                                </div>
                                <h1 className="mt-5 text-[24px] font-[700] pl-2 text-[#111535]">Select caregiver task</h1>
                                <p className="mt-5 text-lg font-[400] text-justify p-2 text-[#898B9F]">Assisting with daily tasks, keeping track of dietary needs, reminding of medication, accompanying the elderly to the hospital, taking care of you at home for 12 hours a day.</p>

                            </div>

                        )))
                    }












                </div>

                {/* end packges */}













            </div>


        </>
    )
}

export default page