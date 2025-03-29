import React from 'react'
import HeroSection from './components/AboutHeroSection'
import MissionVisionSection from './components/MissionSection'
import AboutUsSection from './components/AboutSection'
import ImageGallerySection from './components/ImageGallerySection'
import JourneySection from './components/JourneySection'
import GraduatesSection from './components/GraduatesSection'
import AnalyticsSection from './components/AnalyticsSection'
import TestimonialVideoSection from '../../components/TestimonialSection'
import TeamSection from './components/TeamsSection'
import CtaSection from '../../components/CtaSection'

const AboutUsPage = () => {
   return (
      <>
         <HeroSection />
         <MissionVisionSection />
         <AboutUsSection />
         <ImageGallerySection />
         <JourneySection />
         <GraduatesSection />
         <AnalyticsSection />
         <TestimonialVideoSection />
         <TeamSection />
         <CtaSection />
      </>
   )
}

export default AboutUsPage