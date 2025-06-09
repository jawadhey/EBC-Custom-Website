import React, { useEffect } from 'react'
import HeroSection from './components/AboutHeroSection'
import MissionVisionSection from './components/MissionSection'
import AboutUsSection from '../../components/AboutSection'
import ImageGallerySection from '../../components/ImageGallerySection'
import JourneySection from './components/JourneySection'
import GraduatesSection from './components/GraduatesSection'
import AnalyticsSection from './components/AnalyticsSection'
import TestimonialVideoSection from '../../components/TestimonialSection'
import CtaSection from '../../components/CtaSection'
import TeamSection from '../../components/TeamsSection'

const AboutUsPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <HeroSection />
         <MissionVisionSection />
         <AboutUsSection />
         <ImageGallerySection />
         <JourneySection />
         <GraduatesSection />
         <AnalyticsSection />
         <TestimonialVideoSection Text="Our students' journeys speak for themselves! From securing admissions in top medical universities to thriving in their careers, their success stories reflect our commitment to guiding them every step of the way. Watch the video to hear firsthand experiences and discover how we make studying abroad a seamless and rewarding experience."/>
         <TeamSection />
         <CtaSection Heading="Take the First Step Toward Your Career Abroad!" Text="Your dream of studying abroad is just one step away! Let our experts guide you through the admission, visa, and university selection process—hassle-free and stress-free. Get in touch now and take the first step toward your future!
"/>
      </>
   )
}

export default AboutUsPage