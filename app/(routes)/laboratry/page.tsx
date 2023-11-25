"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





interface bodies {
    title: string;
    img: string;
}

interface pakeges {
    title: string;
    img: string;
    bg: string;
}








const testbodies: bodies[] = [
    {
        title: "Full body",
        img: "/images/body.png"
    },
    {
        title: "Diabetes",
        img: "/images/diabetes.png"
    },
    {
        title: "Cholesterol",
        img: "/images/cholest.png"
    },
    {
        title: " Hair",
        img: "/images/hair.png"
    }
    ,
    {
        title: " skin",
        img: "/images/skin.png"
    }
    ,
    {
        title: "Vitamins",
        img: "/images/vitamins.png"
    }
    ,
    {
        title: "Urinary Tract",
        img: "/images/urinary.png"
    }
    ,
    {
        title: "Kidney",
        img: "/images/kidney.png"
    }

    ,
    {
        title: "Parathyroid",
        img: "/images/Parathyroid.png"
    }

    ,
    {
        title: "Liver",
        img: "/images/Liver.png"
    }

    ,
    {
        title: "Cardiac (Heart)",
        img: "/images/Cardiac.png"
    }
    ,
    {
        title: "Bone",
        img: "/images/Bone.png"
    }
    ,
    {
        title: "Blood health",
        img: "/images/Blood.png"
    }
    ,
    {
        title: "Digestion",
        img: "/images/Digestion.png"
    },
    {
        title: "Allergy",
        img: "/images/Allergy.png"
    }






    // Add more testimonials here
];

const pakeges: pakeges[] = [
    {
        title: "Health Check Pakage",
        img: "/images/health.png",
        bg: "rgba(149, 105, 159, 0.10)"
    },
    {
        title: "Hair Fall Workshop",
        img: "/images/hairfall.png",
        bg: "rgba(148, 165, 163, 0.10)"
    },
    {
        title: "Fatague WorkShop",
        img: "/images/fatigue.png",
        bg: "rgba(214, 56, 56, 0.10)"
    },
    {
        title: " Thyroid Fuction Test",
        img: "/images/throid.png",
        bg: "rgba(84, 182, 213, 0.10)"
    }
    ,
    {
        title: "Pregnancy Test Serum (BHCG)",
        img: "/images/pragnency.png",
        bg: "rgba(24, 11, 124, 0.10)"
    }
    ,
    {
        title: "Vitamins Package",
        img: "/images/vatamin.png",
        bg: "rgba(249, 151, 70, 0.10)"
    }









    // Add more testimonials here
];






interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}





function page() {

    const SampleNextArrow: React.FC<SampleArrowProps> = ({ className, style, onClick }) => {
        return null; // Replace with your desired content
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>

            {/* labarotry herosection  start*/}
            <div className="padding-x bg-red-700 bg-opacity-10 py-10">
                <div className="flex flex-col lg:flex-row gap-5 justify-between">

                    <button className='flex items-center'>
                        <Image className='mx-4' src="/images/arrow.svg" alt='not found' width={50} height={50} /> <span className='mx-4'>Back</span></button>



                    <div className="flex  items-center gap-5">

                        <input type='progess' className='bg-[#AF2245] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />


                    </div>



                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-5 items-center">
                    <div className="left w-full sm:w-[60%]">
                        <h1 className="global__title">Lab Tests & packages</h1>


                        <div className=" gap-5 flex mt-12">

                            <div className="w-full sm:w-[50%]  h-[50px] rounded-[5px] flex justify-between bg-red-700 bg-opacity-10  text-[#AF2245] text-lg font-semibold p-3">

                                <h1 className="flex items-center"><Image className='mx-2' src="/images/location.png" alt='not found' width={20} height={20} /> Location</h1>
                                <Image src="/images/line.png" alt='not found' width={2} height={10} />

                                <h1 className="flex items-center">Saudi Arabia<Image className='mx-2' src="/images/bottomarrow.png" alt='not found' width={20} height={20} /></h1>

                            </div>

                        </div>


                    </div>
                    <div className="w-full sm:w-[30%] right">
                        <div className="w-[238px] h-[235px] relative">
                            <Image src="/images/packge.png" alt='not found' fill />

                        </div>
                    </div>

                </div>

            </div>




            {/* labortry enbd */}
            <div className="padding-x">
                <h1 className="global__title py-10">Body Function or Health Concern</h1>

                {/* this is for desktop versions */}
                <div className="hidden sm:flex flex-wrap gap-5 justify-center lg:justify-between ">


                    {
                        testbodies.map((item, ind) => (
                            <div className="Reviwcard bg-[#FFF] hover:bg-[#e9e8e8] rounded-[8px] w-[155px] h-[177px]" key={ind}>

                                <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                    <Image src={item.img} alt='not found' width={80} height={80} />

                                    <h1 className="text-[#AF2245] text-sm font-semibold mt-5">{item.title}</h1>



                                </Link>



                            </div>

                        ))
                    }








                </div>
                {/* this for mobile version */}
                <div className="block sm:hidden">
                    <Slider {...settings} >



                        {
                            testbodies.map((item, ind) => (
                                <div className=" bg-[#e9e8e8] rounded-[8px] w-[155px] h-[177px]" key={ind}>

                                    <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                        <Image src={item.img} alt='not found' width={80} height={80} />

                                        <h1 className="text-[#AF2245] text-sm font-semibold mt-5">{item.title}</h1>



                                    </Link>



                                </div>

                            ))
                        }


                    </Slider>
                </div>




                {/* pakeges component */}

                <h1 className="global__title py-10 uppercase mt-5">Most help packages</h1>

                <div className='mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top'>

                    <div className='w-full md:w-[60%] flex flex-wrap gap-5 justify-center '>
                        <div className="Reviwcard w-full  h-[50px] p-3  flex justify-between items-center rounded-[5px] bg-[#FFF]">
                            <input className='w-[80%] h-[50px] outline-none ' placeholder='Search your lab tests & Packages ' type="text" />
                            <Image src="/images/search.svg" alt='not found' width={50} height={50} />

                        </div>

                        {
                            pakeges.map((item, ind) => (
                                <div className="  rounded-[6px] w-[230px] h-[135px] text-center" style={{ background: item.bg }} key={ind}>

                                    <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                        <Image src={item.img} alt='not found' width={130} height={90} />

                                        <h1 className="text-[#AF2245] text-sm font-semibold mt-5">{item.title}</h1>



                                    </Link>




                                </div>

                            ))
                        }
                        <button className='w-full shadow-md py-3 bg-[#FFF] rounded-[5px] border-[#AF2245] text-[#AF2245] border-[1px]'>Sell All</button>
                    </div>





                    <div className='w-full md:w-[35%] flex flex-col items-start'>
                        <h2 className='selectedCard'>Selected test</h2>
                        <div className='w-full rounded-[7px] flex flex-col items-center justify-center mt-3 gap-5 bg-[#F6F7F9] py-5 px-5'>
                            <div className='flex items-center justify-center  bg-red-700 bg-opacity-10 gap-5 py-4 px-10 rounded-[13px]'>
                                <h2 className='text-[#AF2245] text-sm font-semibold '>Pregnancy Test Serum (BHCG)</h2>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='text-xl w-7 h-7 flex justify-center item-center rounded-full border border-white' style={{ background: 'rgba(27, 43, 58, 0.10)' }}>-</span>
                                    <span className='text-xl ' >1</span>
                                    <span className='text-xl w-7 h-7 flex justify-center bg-[#AF2245] item-center rounded-full border border-white text-white' >+</span>
                                </div>

                            </div>

                            <button className=' w-full bg-[#AF2245] flex items-center justify-center gap-5 py-4 px-10 rounded-[13px] text-white ' >

                                Continue

                            </button>
                        </div>
                    </div>
                </div>


                {/* tests start */}



                <h1 className="global__title py-10 uppercase mt-5">Our featured tests</h1>

                <div className='mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top'>

                    <div className='w-full md:w-[60%] flex flex-wrap gap-5 justify-center '>


                        {
                            pakeges.map((item, ind) => (
                                <div className="Reviwcard  rounded-[6px] w-[230px] h-[135px] text-center" key={ind}>

                                    <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                        <Image src="/images/tests.png" alt='not found' width={50} height={50} />

                                        <h1 className="text-[#AF2245] text-sm font-semibold mt-5">{item.title}</h1>



                                    </Link>




                                </div>

                            ))
                        }
                        <button className='w-full shadow-md py-3 bg-[#FFF] rounded-[5px] border-[#AF2245] text-[#AF2245] border-[1px]'>Sell All</button>
                    </div>





                    <div className='w-full md:w-[35%] '>

                    </div>
                </div>


                {/* tests end  */}











            </div>


        </>
    )
}

export default page