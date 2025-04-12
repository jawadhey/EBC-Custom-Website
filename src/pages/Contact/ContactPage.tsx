import { useEffect } from "react";
import { Images } from "../../assets/images";
import ContactForm from "../../components/ContactForm";
import HeroSection from "../../components/HeroSection";

export default function ContactPage() {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div>
         <HeroSection
            badgeText="Put in the Word"
            title="We would Love to Hear from You"
            description="Whether you have questions, need guidance, or just want to explore your options to study abroad — we’re here for you. Reach out and let’s start shaping your future together! "
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage={Images.Contact.ContactHero}
         />
         <ContactForm
            title="Get in Touch"
            description="We’d love to hear from you! Fill out the form and we’ll get back to you shortly."
            image="/classroom.jpg"
            breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
         />
      </div>
   )
}

