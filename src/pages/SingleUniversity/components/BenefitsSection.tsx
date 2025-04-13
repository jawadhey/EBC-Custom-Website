"use client"

import { FaArrowRight, FaGraduationCap } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface BenefitItem {
   id: string;
   title: string;
   description: string;
}

interface BenefitsProps {
   title?: string;
   content: BenefitItem[];
}

const BenefitsSection = ({ benefits }: { benefits: BenefitsProps }) => {
   const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true
   })

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
         }
      }
   }

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: "easeOut"
         }
      }
   }

   const cardVariants = {
      hidden: { y: 40, opacity: 0 },
      visible: (index: number) => ({
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.2 + index * 0.1, // Faster stagger for cards
            duration: 0.6,
            ease: "backOut"
         }
      }),
      hover: {
         y: -5,
         boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
         transition: { duration: 0.3 }
      }
   }

   const iconVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: (index: number) => ({
         opacity: 1,
         scale: 1,
         transition: {
            delay: 0.3 + index * 0.1,
            duration: 0.5
         }
      })
   }

   const textVariants = {
      hidden: { opacity: 0 },
      visible: (index: number) => ({
         opacity: 1,
         transition: {
            delay: 0.4 + index * 0.1,
            duration: 0.4
         }
      })
   }

   return (
      <div className="py-12 md:py-16 bg-white" ref={ref}>
         <Container>
            <motion.div
               className="mx-auto"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={containerVariants}
            >
               {/* Top Badge */}
               <motion.div
                  className="flex justify-center mb-4 md:mb-6"
                  variants={itemVariants}
               >
                  <motion.div
                     className="bg-purple-100 text-TwPrimaryPurple px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
                     whileHover={{
                        scale: 1.05,
                        backgroundColor: "#f3e8ff"
                     }}
                     transition={{ duration: 0.3 }}
                  >
                     Why study internationally
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
                  variants={itemVariants}
               >
                  Benefits of International Studies
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={itemVariants}
               >
                  {benefits.title || "Discover the advantages of pursuing your education abroad with our global network of institutions"}
               </motion.p>

               {/* Benefits Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {benefits.content.map((benefit: BenefitItem, index: number) => (
                     <motion.div
                        key={benefit.id}
                        className="bg-amber-50 bg-opacity-50 p-4 md:p-6 rounded-lg"
                        custom={index}
                        variants={cardVariants}
                        whileHover="hover"
                     >
                        {/* Icon */}
                        <motion.div
                           className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3 md:mb-4"
                           custom={index}
                           variants={iconVariants}
                        >
                           <FaGraduationCap className="text-white text-lg md:text-xl" />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                           className="text-purple-600 font-semibold text-base md:text-lg mb-1 md:mb-2 !leading-snug"
                           custom={index}
                           variants={textVariants}
                        >
                           {benefit.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                           className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base !leading-relaxed"
                           custom={index}
                           variants={textVariants}
                        >
                           {benefit.description}
                        </motion.p>

                        {/* View More Link */}
                        <motion.a
                           href="#"
                           className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors text-xs md:text-sm"
                           whileHover={{
                              x: 5,
                              transition: { duration: 0.2 }
                           }}
                           custom={index}
                           variants={textVariants}
                        >
                           View More <FaArrowRight className="ml-1 md:ml-2 text-xs md:text-sm" />
                        </motion.a>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </Container>
      </div>
   )
}

export default BenefitsSection