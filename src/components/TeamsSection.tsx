"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import Container from "./Container"
import { Images } from "../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Import team member images
import drAmjadImage from "../assets/images/Team/Dr Amjad Iqbal.jpeg"
import drKhadijaImage from "../assets/images/Team/Dr Khadija Nawaz.jpeg"
import qasimGhaffarImage from "../assets/images/Team/Mr Qasim Ghaffar.jpeg"
import kamranAliImage from "../assets/images/Team/Dr Farman Ali.jpeg"
import laibaSaeedImage from "../assets/images/Team/Ma Laiba Saeed.jpeg"

const TeamSection = () => {
   // Team members data
   const teamMembers = [
      {
         id: 1,
         name: "Dr Amjad Iqbal",
         title: "Managing Director",
         image: drAmjadImage,
      },
      {
         id: 2,
         name: "Dr Khadija Nawaz",
         title: "Assisting Managing Director",
         image: drKhadijaImage,
      },
      {
         id: 3,
         name: "Mr Qasim Ghaffar",
         title: "Regional Head KPK",
         image: qasimGhaffarImage,
      },
      {
         id: 4,
         name: "Mr Kamran Ali Khan",
         title: "Student counsellor",
         image: kamranAliImage,
      },
      {
         id: 5,
         name: "Ms Laiba Saeed",
         title: "Office manager",
         image: laibaSaeedImage,
      },
   ]

   // Animation hooks
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
   });

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            ease: "easeOut"
         }
      }
   };

   const memberVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: (custom: number) => ({
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: custom * 0.1
         }
      })
   };

   const cornerVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: {
         scale: 1,
         opacity: 1,
         transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.5
         }
      }
   };

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
               <motion.div
                  className="flex justify-center mb-4 md:mb-6"
                  variants={itemVariants}
               >
                  <motion.div
                     className="bg-green-100 text-green-600 px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
                     whileHover={{
                        scale: 1.05,
                        backgroundColor: "#dcfce7"
                     }}
                     transition={{ duration: 0.3 }}
                  >
                     Get to know us better
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
                  variants={itemVariants}
               >
                  Our Executive Team
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={itemVariants}
               >
                  Meet the passionate professionals driving our mission to guide students toward successful academic journeys abroad.
               </motion.p>

               {/* Team Members Grid */}
               <motion.div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12"
                  variants={containerVariants}
               >
                  {teamMembers.map((member, index) => (
                     <motion.div
                        key={member.id}
                        className="flex flex-col items-center"
                        custom={index}
                        variants={memberVariants}
                     >
                        {/* Image with corner accents */}
                        <motion.div
                           className="relative mb-3 md:mb-4"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                        >
                           <motion.div
                              className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -bottom-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -bottom-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <img
                              src={member.image}
                              alt={member.name}
                              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover"
                           />
                        </motion.div>

                        <motion.h3
                           className="text-lg md:text-xl font-semibold text-TwPrimaryPurple mb-1 !leading-snug"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.3 + (index * 0.1) }}
                        >
                           {member.name}
                        </motion.h3>
                        <motion.p
                           className="text-gray-500 text-sm md:text-base !leading-relaxed"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                           {member.title}
                        </motion.p>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default TeamSection