import React from 'react';
import Image from 'next/image';

function JoinSection() {
    return (
        <>
            <div className="padding-x bg-red-700 bg-opacity-10 flex lg:flex-row flex-col items-center py-10 mt-10">

                <div className=" flex-1 ">


                    <div className="w-[270px] relative h-[270px]">
                        <Image src="/images/joinimg.png" alt='not found' fill />

                    </div>




                </div>
                <div className="flex-1">

                    <h1 className='text-[#AF2245] text-sm font-semibold'>Newsletter</h1>

                    <h1 className='global__title text-[#252B42] mt-5'>JOIN US</h1>
                    <p className="text-[#737373] text-lg  mt-5 font-normal">Problems trying to resolve the conflict between <br className='hidden sm:block' />
                        the two major realms of Classical physics: Newtonian mechanics </p>


                    <div className="bg-[#F9F9F9] mt-5 border-[2px] border-[#E6E6E6] rounded-l-[8px]  flex items-center justify-between relative h-[50px]">

                        <input className='px-2 bg-[#F9F9F9] focus:outline-none  placeholder:text-[#737373]' placeholder='Enter Your Email' type="text" />
                        <button className='bg-[#AF2245] sm:block hidden text-[#FFF] text-sm font-normal rounded-r-[8px] h-[100%] p-2' >Subscribe</button>


                    </div>
                    <button className='bg-[#AF2245] mt-5 block sm:hidden text-[#FFF] text-sm font-normal rounded-[8px] h-[100%] p-2' >Subscribe</button>


                </div>



            </div>


        </>
    )
}

export default JoinSection