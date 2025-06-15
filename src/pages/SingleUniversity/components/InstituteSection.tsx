import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Import EBC images
import ebcImage1 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.04 PM (1).jpeg'
import ebcImage2 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.05 PM (1).jpeg'
import ebcImage3 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.06 PM (1).jpeg'
import ebcImage4 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.07 PM (1).jpeg'
import ebcImage5 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.08 PM (1).jpeg'
import ebcImage6 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.09 PM (1).jpeg'
import ebcImage7 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.10 PM (1).jpeg'
import ebcImage8 from '../../../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.11 PM (1).jpeg'

interface InstitutionSectionProps {
   Heading?: string;
   Text?: React.ReactNode;
   mainImage: string;
   galleryImages: string[];
}

const InstitutionSection = ({ Heading, Text, mainImage, galleryImages }: InstitutionSectionProps) => {
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   })

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
         },
      },
   }

   const badgeVariants = {
      hidden: { y: -20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20,
         },
      },
      hover: {
         y: -5,
         scale: 1.05,
         transition: { duration: 0.2 },
      },
   }

   const headingVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.7,
            ease: "easeOut",
         },
      },
   }

   const mainImageVariants = {
      hidden: { x: -30, opacity: 0 },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            duration: 0.7,
            ease: "easeOut",
         },
      },
      hover: {
         scale: 1.03,
         transition: { duration: 0.3 },
      },
   }

   const textVariants = {
      hidden: { x: 30, opacity: 0 },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            duration: 0.7,
            ease: "easeOut",
         },
      },
   }

   const galleryContainerVariants = {
      hidden: { y: 40, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.3,
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.15,
            delayChildren: 0.4,
         },
      },
   }

   const galleryItemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: "easeOut",
         },
      },
      hover: {
         y: -10,
         scale: 1.05,
         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
         transition: { duration: 0.3 },
      },
   }

   return (
      <div className="py-8 md:py-16 bg-white" ref={ref}>
         <Container>
            <motion.div
               className="mx-auto"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={containerVariants}
            >
               {/* Top Badge */}
               <motion.div className="flex justify-center mb-4 md:mb-6" variants={badgeVariants}>
                  <motion.div
                     className="bg-yellow-100 text-yellow-600 px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
                     whileHover="hover"
                     variants={badgeVariants}
                  >
                     Know about the institution
                  </motion.div>
               </motion.div>

               {/* Main Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-8 md:mb-12 max-w-4xl mx-auto !leading-tight"
                  variants={headingVariants}
               >
                  {Heading || 'Our Partner Institutions'}
               </motion.h2>

               {/* Main Content Section */}
               <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                  {/* Left Column - Image */}
                  <motion.div
                     className="rounded-lg overflow-hidden"
                     variants={mainImageVariants}
                     whileHover="hover"
                  >
                     <motion.img
                        src={mainImage}
                        alt="University campus with students"
                        className="w-full h-full max-h-[350px] md:max-h-[400px] lg:max-h-[470px] object-cover rounded-lg"
                     />
                  </motion.div>

                  {/* Right Column - Text */}
                  <motion.div
                     className="text-gray-600 space-y-3 md:space-y-4 text-sm md:text-base !leading-relaxed"
                     variants={textVariants}
                  >
                     {Text || (
                        <>
                           <p>We partner with top-tier educational institutions worldwide to provide our students with exceptional learning opportunities.</p>
                           <p>Our network includes prestigious universities known for their academic excellence, state-of-the-art facilities, and vibrant campus communities.</p>
                           <p>Each institution is carefully selected to ensure our students receive world-class education and support throughout their academic journey.</p>
                        </>
                     )}
                  </motion.div>
               </div>

               {/* Image Gallery */}
               <motion.div
                  className="bg-purple-200 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl"
                  variants={galleryContainerVariants}
               >
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                     {galleryImages.map((item, index) => (
                        <motion.div
                           key={index}
                           className="rounded-lg overflow-hidden"
                           variants={galleryItemVariants}
                           whileHover="hover"
                           custom={index}
                        >
                           <img
                              src={item}
                              alt={`Gallery image ${index + 1}`}
                              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
                           />
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default InstitutionSection