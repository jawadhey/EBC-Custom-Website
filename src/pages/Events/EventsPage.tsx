import React, { useEffect } from 'react'
import HeroSection from '../../components/HeroSection'
import { Images } from '../../assets/images'
import InstitutionSection from '../SingleUniversity/components/InstituteSection'
import AboutUsSection from '../../components/AboutSection'
import ImageGallerySection from '../../components/ImageGallerySection'
import TeamSection from '../../components/TeamsSection'
import CtaSection from '../../components/CtaSection'

// Import EBC images
import ebcImage1 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.04 PM (1).jpeg'
import ebcImage2 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.05 PM (1).jpeg'
import ebcImage3 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.06 PM (1).jpeg'
import ebcImage4 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.07 PM (1).jpeg'
import ebcImage5 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.08 PM (1).jpeg'
import ebcImage6 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.09 PM (1).jpeg'
import ebcImage7 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.10 PM (1).jpeg'
import ebcImage8 from '../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.11 PM (1).jpeg'

const EventsPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <HeroSection
            // badgeText="Put in the Word"
            title="How Can You Reach Us "
            description="Stay connected with EBC through our latest events, seminars, and webinars held across different countries. Whether you're looking for admission guidance, visa tips, or direct interaction with university representatives, our events are the perfect opportunity to get all your questions answered in person. "
            buttonText="Book Consultation Now"
            buttonLink="/contact-us"
            backgroundImage={Images.EbcEventsHero}
            position={'center'}
         />
         <InstitutionSection
            Heading="Take a Look at the Seminars We Have Been Conducting"
            Text={<p>
               At EBC, we understand how important it is to make the right decisions when it comes to studying abroad, especially for medical students looking to pursue higher education after FSC. That's why we organize comprehensive seminars to guide students through every aspect of the journey. Our seminars cover everything from the detailed application process, visa requirements, and scholarships to preparing for life in some of the top medical universities abroad, particularly in China. <br /> <br />
               These sessions are designed to provide you with in-depth knowledge, practical tips, and real-life experiences shared by students who have successfully navigated the path to studying medicine overseas. You'll also get the chance to interact with industry experts, ask questions, and gain confidence in your ability to make informed decisions about your future. <br /> <br />
               Whether you're still considering your options or ready to start your application, our seminars will equip you with all the information you need. Don't miss out on the opportunity to get the clarity and support you deserve as you take the next step towards your medical career abroad! Join us at our upcoming seminar and start building your future today.
            </p>}
            mainImage={Images.EbcAnalytics}
            galleryImages={[Images.EbcGuidance, Images.EbcAdmission, Images.EbcAdmission2, Images.EbcAdmission3]}
         />
         <InstitutionSection
            Heading="Providing Consulting Sessions at Your Institution"
            Text={<p>
               We're bringing our expertise directly to your campus! Our consulting sessions are tailored to help medical students understand the process of studying abroad, from application requirements to living in top international universities. Whether you're interested in studying in China or another destination, our team will provide personalized guidance and answer any questions you may have.
               <br /><br />
               These sessions are designed to make it easier for you to plan your future and gain the clarity you need to make confident decisions. We can schedule a session at your institution, so you can get all the support you need without leaving campus. Reach out today to arrange a session and take the first step toward your career abroad!
            </p>}
            mainImage={ebcImage6}
            galleryImages={[ebcImage7, ebcImage8, ebcImage1, ebcImage2]}
         />
         <AboutUsSection
            Heading="Take a Look at Our Previous Achievements"
            Text={
               <p>
                  Over the years, we've helped countless students achieve their dreams of studying medicine abroad. From successful university placements to securing scholarships, our track record speaks for itself. In this section, we highlight some of our most notable achievements, showcasing the positive impact we've had on students' lives and futures. <br /><br />
                  Explore our success stories, see how we've helped students navigate the challenges of studying abroad, and get inspired by their journeys. We're proud of our past accomplishments and excited to help you achieve your goals too!
               </p>
            }
         />
         <ImageGallerySection />
         <TeamSection />
         <CtaSection 
            Heading="Take the First Step Toward Your Career Abroad!" 
            Text="Your dream of studying abroad is just one step away! Let our experts guide you through the admission, visa, and university selection process—hassle-free and stress-free. Get in touch now and take the first step toward your future!"
         />
      </>
   )
}

export default EventsPage