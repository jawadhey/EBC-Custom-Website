import ContactForm from "../../components/ContactForm";
import HeroSection from "../../components/HeroSection";

export default function ContactPage() {
   return (
      <div>
         <HeroSection
            badgeText="Put in the Word"
            title="We would Love to Hear from You"
            description="Lorem ipsum dolor sit amet consectetur. Vel dui molestie tempor elementum gravida nibh vitae ullamcorper ac. Molestie sit phasellus faucibus urna urna in phasellus nullam amet."
            buttonText="Book Consultation Now"
            buttonLink="/contact"
            backgroundImage="/students-group.jpg"
         />
         <ContactForm
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis tellus risus nullam risus. Eu amet feugiat enim nunc. Eget."
            image="/classroom.jpg"
            breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
         />
      </div>
   )
}

