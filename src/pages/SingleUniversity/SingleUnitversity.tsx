import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection'
import { Images } from '../../assets/images'
import StatsSection from '../Landing/components/StatsSection'
import MissionVisionSection from '../About/components/MissionSection'
import InstitutionSection from './components/InstituteSection'
import BenefitsSection from './components/BenefitsSection'
import FaqSection from './components/FaqSection'
import TestimonialVideoSection from '../../components/TestimonialSection'
import TeamSection from './components/TeamSection'

const SingleUnitversity = () => {

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
         <StatsSection />
         <MissionVisionSection heading="Offered Programs for International Students" tagline="Choose the right program for yourself"/>
         <InstitutionSection/>
         <BenefitsSection/>
         <FaqSection/>
         <TeamSection/>
         <TestimonialVideoSection />


      </>)
}

export default SingleUnitversity