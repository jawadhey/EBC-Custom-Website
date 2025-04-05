import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const InstitutionSection = ({ Heading, Text }: any) => {
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: false,
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
      <div className="py-16 bg-white" ref={ref}>
         <Container>
            <motion.div
               className="mx-auto"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={containerVariants}
            >
               {/* Top Badge */}
               <motion.div className="flex justify-center mb-6" variants={badgeVariants}>
                  <motion.div
                     className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full inline-block"
                     whileHover="hover"
                     variants={badgeVariants}
                  >
                     Know about the institution
                  </motion.div>
               </motion.div>

               {/* Main Heading */}
               <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-tight"
                  variants={headingVariants}
               >
                  {Heading || 'Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.'}
               </motion.h2>

               {/* Main Content Section */}
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Left Column - Image */}
                  <motion.div
                     className="rounded-lg overflow-hidden"
                     variants={mainImageVariants}
                     whileHover="hover"
                  >
                     <motion.img
                        src={Images.Universities.InstituteMain}
                        alt="Lecture hall with students"
                        className="w-full h-full max-h-[470px] object-cover rounded-lg"
                     />
                  </motion.div>

                  {/* Right Column - Text */}
                  <motion.div
                     className="text-gray-600 space-y-4"
                     variants={textVariants}
                  >
                     {Text}
                  </motion.div>
               </div>

               {/* Image Gallery */}
               <motion.div
                  className="bg-purple-50 p-8 rounded-2xl"
                  variants={galleryContainerVariants}
               >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                           key={index}
                           className="rounded-lg overflow-hidden"
                           variants={galleryItemVariants}
                           whileHover="hover"
                           custom={index}
                        >
                           <img
                              src={Images.Universities.InstituteMain}
                              alt={`University image ${index + 1}`}
                              className="w-full h-60 object-cover"
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