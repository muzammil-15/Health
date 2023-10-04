import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ReviewSection from '@/components/ReviewSection'
import ServiceSection from '@/components/ServiceSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
    
     
      <ReviewSection/> 
      
     
    </main>
  )
}
