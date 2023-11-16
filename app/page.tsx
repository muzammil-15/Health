import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Fqe from '@/components/Fqe'
import HeroSection from '@/components/HeroSection'
import JoinSection from '@/components/JoinSection'
import ReviewSection from '@/components/ReviewSection'
import ServiceSection from '@/components/ServiceSection'
import Image from 'next/image';
import ModalLocation from '@/components/ModalLocation'

const Home=async()=> {
  const accessToken = 'pk.eyJ1IjoiYWJkdWxyYTdtYW4iLCJhIjoiY2xvdnJrcDk3MHYwZjJrcWU4bHRsaTRhaSJ9.92ZDJwJAgFil80ZXA4gQcw';
  return (
    <main className="">

      <HeroSection/>

      <ModalLocation/>
      <ServiceSection/>
      <AboutSection/>
      <ReviewSection/> 
      <Fqe/>
      <JoinSection/>
   
      
     
    </main>
  )
}
export default  Home;