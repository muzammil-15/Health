import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Fqe from '@/components/Fqe'
import HeroSection from '@/components/HeroSection'
import JoinSection from '@/components/JoinSection'
import ReviewSection from '@/components/ReviewSection'
import ServiceSection from '@/components/ServiceSection'
import Image from 'next/image';

const Home=async()=> {
  return (
    <main className="">

      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <ReviewSection/> 
      <Fqe/>
      <JoinSection/>
   
      
     
    </main>
  )
}
export default  Home;