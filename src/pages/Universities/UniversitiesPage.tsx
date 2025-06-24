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
            title="Explore Top International Universities with EBC "
            description="Discover a world of opportunities as you browse through the top-ranked universities we work with. From medicine to engineering, we connect you with institutions that match your academic goals and dreams of studying abroad. "
            buttonText="Book Consultation Now"
            buttonLink="/contact-us"
            backgroundImage={Images.EbcUniversitiesHero}
         />
         <ProgramsSection />
         <TestimonialVideoSection Text="Our students' success stories speak volumes! From smooth application processes to achieving their dreams of studying medicine abroad, we've helped countless students embark on life-changing journeys. Hear firsthand from those who've experienced our support, and discover how our team has made studying abroad easier, stress-free, and more rewarding. Join the community of successful students and start your journey with us today!
"/>
         <div className='my-14 lg:my-28'>

            <CtaSection backgroundImage={Images.Universities.UniversityBack} Heading="Ready to Take the First Step Towards Your Career Abroad? We're Here to Help!" Text="Don't wait any longer—start your journey today! Whether you have questions or need guidance on the application process, our team is ready to assist you every step of the way. Click the button below to get in touch with us and take the first step toward studying at a top medical university in China. Your dream is just one click away!
"/>
         </div>


      </>
   )
}

export default UniversitiesPage