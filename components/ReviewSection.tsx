"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";




interface Testimonial {
    title: string;
    desc: string;
    img: string;
}





interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}




const testimonials: Testimonial[] = [
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,
    {
        title: "Eleanor",
        desc: "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve. ",
        img: "/images/creviwprofile.png"
    }
    ,


    // Add more testimonials here
];










function ReviewSection() {

    const [rating, setrating] = useState(5)

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
        autoplay:true,
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
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

            <div className="padding-x mt-10">
                <h1 className='global__title my-5 flex text-[#07A29E]'> <Image src="/images/Line.png" alt='not found' width={30} height={30} className='mr-[10px]' /> Customer Review</h1>

                <Slider {...settings} >


                    {
                        testimonials.map((item, ind) => (


                            <div className="my-5" key={ind}>


                                <div className="Reviwcard mx-5 relative bg-[#FFF] rounded-lg">

                                    <div className="relative ">
                                        <div className=" absolute w-[100%] h-[100%] flex  justify-center items-end mt-5 ">
                                            <Image className='  rounded-full' src={item.img} alt='not found' width={50} height={50} />
                                        </div>
                                        <div className="bg-[#F6F7F9] px-4 py-10">

                                            <p className="text-[#111535] text-center text-sm font-normal">{item.desc}</p>


                                        </div>



                                    </div>




                                    <div className="mt-9 flex justify-center flex-col items-center">
                                        <StarRatings
                                            rating={2}
                                            starRatedColor="#ffb829"
                                            numberOfStars={5}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            name="rating"
                                        />
                                    </div>

                                    <h1 className='text-[#111535] text-center mt-5 text-sm font-semibold'>{item.title}</h1>

                                    <div className='pb-5'>
                                        <h1 className='text-[#111535] text-center mt-0 text-sm font-normal'>Customer</h1>
                                    </div>











                                </div>




                            </div>



                        ))
                    }



                </Slider>




            </div>

        </>
    )
}

export default ReviewSection