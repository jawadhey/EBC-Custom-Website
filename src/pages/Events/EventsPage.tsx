import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection'
import { Images } from '../../assets/images'
import InstitutionSection from '../SingleUniversity/components/InstituteSection'
import AboutUsSection from '../../components/AboutSection'
import ImageGallerySection from '../../components/ImageGallerySection'
import TeamSection from '../../components/TeamsSection'
import CtaSection from '../../components/CtaSection'

const EventsPage = () => {

     useEffect(() => {
         window.scrollTo(0, 0);
      }, []);

   return (
      <>
         <HeroSection
            // badgeText="Put in the Word"
            title="How Can You Reach Us"
            description="Lorem ipsum dolor sit amet consectetur. Vel dui molestie tempor elementum gravida nibh vitae ullamcorper ac. Molestie sit phasellus faucibus urna urna in phasellus nullam amet."
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage={Images.Universities.UniversityHero}
         />
         <InstitutionSection />
         <InstitutionSection />
         <AboutUsSection />
         <ImageGallerySection />
         <TeamSection />
         <CtaSection />

      </>
   )
}

export default EventsPage