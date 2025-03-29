import React from 'react'
import ProgramsSection from './components/ProgramsSection'
import HeroSection from '../../components/HeroSection'
import TestimonialVideoSection from '../../components/TestimonialSection'
import CtaSection from '../../components/CtaSection'

const UniversitiesPage = () => {
   return (
      <>
         <HeroSection
            badgeText="Put in the Word"
            title="We would Love to Hear from You"
            description="Lorem ipsum dolor sit amet consectetur. Vel dui molestie tempor elementum gravida nibh vitae ullamcorper ac. Molestie sit phasellus faucibus urna urna in phasellus nullam amet."
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage="/students-group.jpg"
         />
         <ProgramsSection />
         <TestimonialVideoSection />
         <CtaSection />


      </>
   )
}

export default UniversitiesPage