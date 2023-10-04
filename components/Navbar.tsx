"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import Menunav from './Menunav';
import { navlinks } from '@/constants';
import { useRouter } from 'next/navigation';
// import ShopDropdown from './ShopDropdown';







function Navbar() {
    const router = useRouter();


    return (
        <>
            <header className=' h-[80px] px-16 sm:padding-x bg-[FFF] flex justify-between items-center '>


<div className="hidden lg:block ">
               
                <div className=' flex justify-center'>
                <Link key={1} className='flex items-center mr-20' href="/"> <Image src="/images/logo.png" alt='not found'  width={50} height={50}/></Link>
                    
                    {
                        navlinks.map((item, ind) => (
                            <Link key={ind} className='mx-6 flex items-center text-[#111535] text-lg font-medium hover:text-[#07A29E]' href={item.url}>{item.title}</Link>
                        ))
                    }
                </div>
                </div>

                <div className='hidden lg:block '>

                  <button className='bg-[#07A29E] text-lg font-normal p-2 w-[160px] h-[50px] rounded-md text-[#FFF]'>LOGIN</button>
                </div>

                <div className="block lg:hidden">

toggle
</div>

            </header>




        </>
    )
}

export default Navbar