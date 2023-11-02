import React from 'react'

function HeroSection() {
  return (
   <div className="hero py-10 padding-x">


   <h1 className="hero__title text-[#111535] text-center">We Provide <span className='text-[#AF2245]'>Medical Services</span> <br className='hiddden lg:block' />
That You Can Trust!</h1>

<div className="lg:w-[50%] w-[100%] sm:w-[80%] my-5">

<p className='text-[#222]  hero__subtitle  text-center'>
Lorem ipsum dolor sit amet consectetur. Risus nec ullamcorper purus egestas. Fusce donec viverra tortor congue pulvinar. Nullam massa sit mauris morbi. Ac orci dolor sed auctor enim nec consequat  nec scelerisque interdum turpis enim justo. 

</p>
</div>

<button className='bg-[#AF2245] text-lg font-normal p-2 w-[160px] h-[50px] rounded-[8px] text-[#FFF]'>Contact Now</button>


   </div>
  )
}

export default HeroSection