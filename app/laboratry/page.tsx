import React from 'react';
import Image from 'next/image';
import Link from 'next/link';







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












function page() {
    return (
        <>

            {/* labarotry herosection  start*/}
            <div className="padding-x  bg-[#CADBE7] py-10">
                <div className="flex gap-5 justify-between">

                    <button className='flex items-center'><Image className='mx-4' src="/images/arrow.svg" alt='not found' width={50} height={50} /> <span className='mx-4'>Back</span></button>



                    <div className="flex  items-center gap-5">

                        <input type='progess' className='bg-[#07A29E] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />
                        <input type='progess' className='bg-[#FFF] w-[20%] h-[3px]' />


                    </div>

                   

                </div>
                <div className="flex justify-between mt-5 items-center">
                        <div className="left">left</div>
                        <div className="right">
                            <div className="w-[238px] h-[235px] relative">
                                <Image src="/images/packge.png" alt='not found' fill />

                            </div>
                        </div>

                    </div>

            </div>




            {/* labortry enbd */}
            <div className="padding-x">
                <h1 className="global__title py-10">body function or health concern</h1>

                <div className="flex flex-wrap gap-5 justify-center lg:justify-between ">


                    {
                        testbodies.map((item, ind) => (
                            <div className="Reviwcard bg-[#FFF] hover:bg-[#e9e8e8] rounded-[8px] w-[155px] h-[177px]" key={ind}>

                                <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                    <Image src={item.img} alt='not found' width={80} height={80} />

                                    <h1 className="text-[#07A29E] text-sm font-semibold mt-5">{item.title}</h1>



                                </Link>



                            </div>

                        ))
                    }








                </div>




                {/* pakeges component */}

                <h1 className="global__title py-10 uppercase mt-5">Most help packages</h1>
                <div className='mt-5 flex flex-wrap gap-5 justify-center lg:justify-between align-top'>

                    <div className='w-full md:w-[60%] flex flex-wrap gap-5 justify-center '>


                        {
                            pakeges.map((item, ind) => (
                                <div className="  rounded-[6px] w-[230px] h-[135px] text-center" style={{ background: item.bg }} key={ind}>

                                    <Link href="#" key={item.title} className='flex flex-col items-center justify-center w-[100%] h-[100%]'>

                                        <Image src={item.img} alt='not found' width={130} height={90} />

                                        <h1 className="text-[#07A29E] text-sm font-semibold mt-5">{item.title}</h1>



                                    </Link>



                                </div>

                            ))
                        }
                    </div>




                    <div className='w-full md:w-[35%] flex flex-col items-start'>
                        <h2 className='selectedCard'>Selected test</h2>
                        <div className='w-full rounded-[7px] flex flex-col items-center justify-center mt-3 gap-5 bg-[#F6F7F9] py-5 px-5'>
                            <div className='flex items-center justify-center gap-5 py-4 px-10 rounded-[13px]' style={{ background: 'rgba(7, 162, 158, 0.10)' }}>
                                <h2 className='text-[#07A29E] text-sm font-semibold'>Pregnancy Test Serum (BHCG)</h2>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='text-xl w-7 h-7 flex justify-center item-center rounded-full border border-white' style={{ background: 'rgba(27, 43, 58, 0.10)' }}>-</span>
                                    <span className='text-xl ' >1</span>
                                    <span className='text-xl w-7 h-7 flex justify-center bg-[#07A29E] item-center rounded-full border border-white text-white' >+</span>
                                </div>

                            </div>

                            <button className=' w-full bg-[#07A29E] flex items-center justify-center gap-5 py-4 px-10 rounded-[13px] text-white ' >

                                Continue

                            </button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default page