import React from 'react';
import Image from 'next/image';

function ServiceSection() {
    return (
        <>

            <div className="padding-x mt-10">
                <h1 className='global__title flex text-[#07A29E]'> <Image src="/images/Line.png" alt='not found' width={30} height={30} className='mr-[10px]' /> Our Services</h1>
                <div className="mt-10 flex flex-col gap-10 items-center lg:flex-row justify-between">

                    <div className="flex-1 w-[500px]  relative h-[400px]">

                        <Image src="/images/serviceimg.png" alt='not found' fill />




                    </div>
                    <div className=" flex-1 my-auto">

                        <div className='bg-[#CCDDE7] w-[100%] p-16 rounded-l-full '>

                            <h1 className='text-lg font-semibold text-[#07A29E]'>Laboratory</h1>
                            <p className='text-2xl my-5 font-normal whitespace-pre-line text-[#333333]'>Apply For <span className='text-[#07A29E]'>Laboratory Tests </span>& <br />
                                Packages Here</p>


                            <button className='bg-[#07A29E] text-lg font-normal p-2 w-[160px] h-[50px] rounded-md text-[#FFF]'>Apply For Lab</button>
                        </div>


                    </div>
                </div>



            </div>

        </>
    )
}

export default ServiceSection