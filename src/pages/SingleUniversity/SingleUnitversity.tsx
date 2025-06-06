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
import { useParams } from 'react-router-dom'
import { universities } from '../../constant'

const SingleUnitversity = () => {

   const { id } = useParams();
   const university = universities.find((u: any) => u.id == id);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   if (!university) {
      return <div>University not found</div>;
   }


   return (
      <>
         <HeroSection
            badgeText="Put in the Word"
            title={university.description}
            description={"Discover everything you need to know about this prestigious institution—from academic programs and campus life to admission details and student experiences. Let EBC help you take the first step toward your dream of studying abroad."}
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage={university.heroImage}
            isSingleUniversity
         />
         {/* <StatsSection /> */}
         <StatsSection
            stats={university.stats.map((stat: any) => ({
               value: stat.title,
               label: stat.subtitle,
               description: stat.description
            }))}
         />

         <MissionVisionSection
            heading="Offered Programs for International Students"
            tagline="Choose the right program for yourself"
            programs={university.programs}
         />
         <InstitutionSection
            Heading={university.about.title}
            Text={university.about.content || <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus natus exercitationem quisquam illo explicabo sint, officia voluptates reprehenderit quos dolorum earum ullam perferendis impedit numquam dolorem dolor nobis, deleniti corporis ad eius odit eaque. Cum praesentium nisi exercitationem sequi!
               <br /><br />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem rerum corrupti tenetur, repellat nihil dignissimos eos pariatur sunt ullam libero possimus quas unde mollitia similique facilis voluptatem non. Explicabo, consequuntur. Labore est provident in dolores veritatis magnam quidem! Dolor, consectetur.
            </p>}
         />
         <BenefitsSection benefits={university.benefits} />
         <FaqSection faqs={university.faqs} />
         <TeamSection />
         <TestimonialVideoSection />


      </>)
}

export default SingleUnitversity