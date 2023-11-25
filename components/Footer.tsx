import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { footerLinks } from '@/constants';
import dynamic from 'next/dynamic';
function Footer() {
  return (
    <>

      <div className="mt-10 padding-x py-10  bg-[#AF2245]  ">

      

        <div className='flex justify-between gap-5 flex-wrap lg:flex-nowrap'>

          <div className=''>
            <Image src="/images/logo.png" alt='not found' width={100} height={100}/>

            <div className="flex items-center gap-5 mt-5">
                <Link href="#"><Image src="/images/fb.png" alt='not found ' width={50} height={50}/> </Link>
                <Link href="#"><Image src="/images/twitter.png" alt='not found ' width={50} height={50}/> </Link>
                <Link href="#"><Image src="/images/vimeo.png" alt='not found ' width={50} height={50}/> </Link>

                <Link href="#"><Image src="/images/linkedin.png" alt='not found ' width={50} height={50}/> </Link>
            </div>

          </div>
          {
            footerLinks.map((item,ind)=>(
<div className='flex flex-col gap-2' key={ind}>
            <Link className='text-lg  my-2 text-[#FFF]  font-bold   ' href="#">{item.title}</Link>
          
          {
            item.links.map((itm,ind)=>(
              <Link href="#" className='text-[#FFF] text-sm' key={ind}>{itm.title}</Link>

            ))
          }
           
            

          </div>
            ))
          }
          
         
        </div>

      </div>



    </>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
