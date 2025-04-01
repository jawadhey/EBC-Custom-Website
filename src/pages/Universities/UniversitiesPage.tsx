import React, { useEffect } from 'react'
import ProgramsSection from './components/ProgramsSection'
import HeroSection from '../../components/HeroSection'
import TestimonialVideoSection from '../../components/TestimonialSection'
import CtaSection from '../../components/CtaSection'
import { Images } from '../../assets/images'

const UniversitiesPage = () => {

     useEffect(() => {
         window.scrollTo(0, 0);
      }, []);

   return (
      <>
         <HeroSection
            badgeText="Put in the Word"
            title="We would Love to Hear from You"
            description="Lorem ipsum dolor sit amet consectetur. Vel dui molestie tempor elementum gravida nibh vitae ullamcorper ac. Molestie sit phasellus faucibus urna urna in phasellus nullam amet."
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage={Images.Universities.UniversityHero}
         />
         <ProgramsSection />
         <TestimonialVideoSection />
         <div className='my-14 lg:my-28'>

            <CtaSection backgroundImage={Images.Universities.UniversityBack}/>
         </div>


      </>
   )
}

export default UniversitiesPage