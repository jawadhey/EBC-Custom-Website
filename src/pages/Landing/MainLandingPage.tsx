import React, { useEffect } from 'react'
import Container from '../../components/Container'
import LandingHeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import HelpSection from './components/HelpSection'
import ContactSection from './components/ContactSection'
import FoundersMessageSection from './components/FounderMessageSection'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'
import ProgramsSection from '../Universities/components/ProgramsSection'

const MainLandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

  return (
    <>
      <LandingHeroSection />
      <StatsSection/>
      <ServicesSection/>
      <HelpSection/>
      <ProgramsSection isLanding/>
      <ContactSection/>
      <FoundersMessageSection/>
      <TestimonialSection/>
      <FaqSection/>
    </>

  )
}

export default MainLandingPage