import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";


function Fqe() {
    return (
        <>

            <div className="padding-x bg-red-700 bg-opacity-10 py-10 mt-10">
                <h1 className='global__title text-center  text-[#AF2245]'>Frequently Asked Question</h1>
                <p className="text-lg font-normal mx-auto mt-5 text-center w-[100%] sm:w-[80%] lg:w-[50%] text-[#000]">Lorem ipsum dolor sit amet consectetur. Diam faucibus ac porttitor tincidunt egestas sapien fermentum feugiat. Tortor aliquam</p>
  
    <Accordion type="single" collapsible className="mt-5 w-full">
     
      <AccordionItem className='bg-[#FFF] border-[#A0A0A0] border-[2px] rounded-[8px] px-4' value="item-1">
        <AccordionTrigger>Can i book appointment behalf someone else?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className='bg-[#FFF] mt-5 border-[#A0A0A0] border-[2px] rounded-[8px] px-4' value="item-2">
        <AccordionTrigger>Can i book appointment behalf someone else?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className='bg-[#FFF] mt-5 border-[#A0A0A0] border-[2px] rounded-[8px] px-4' value="item-3">
        <AccordionTrigger>Can i book appointment behalf someone else?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className='bg-[#FFF] mt-5 border-[#A0A0A0] border-[2px] rounded-[8px] px-4' value="item-4">
        <AccordionTrigger>Can i book appointment behalf someone else?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
     
    </Accordion>
            </div>

        </>
    )
}

export default Fqe