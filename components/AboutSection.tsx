import React from 'react';
import Image from 'next/image';

function AboutSection() {
    return (
        <>

            <div className="padding-x mt-10">
                <h1 className='global__title  text-[#AF2245]'> About Us</h1>
                <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-between">

                    <div className="flex-1 w-[500px] relative h-[400px]">

                        <Image src="/images/aboutimg.png" alt='not found' fill />




                    </div>
                    <div className="flex-1 ">

                       

                            <h1 className='text-lg font-semibold text-[#AF2245]'>Who We Are</h1>
                            <p className='text-[16px] my-5 font-normal text-justify text-[#444]'>Wilt u de voordelen van zorg op maat ervaren? Ontdek hoe Daily Homecare u kan helpen om comfortabel en met zorg te leven. Meld u klsiksij juejk jkunweui  vandaag nog aan en laat ons uw partner zijn op uw zorgreis.</p>


                                <button className='bg-opacity-10 bg-[#AF2245] text-lg font-normal p-2 w-[160px] h-[50px] rounded-[8px] text-[#AF2245]'>Learn More</button>
                      


                    </div>
                </div>



            </div>

        </>
    )
}

export default AboutSection;