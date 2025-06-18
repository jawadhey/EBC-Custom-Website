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
import FarmanImage from "../assets/images/Team/Dr farman.jpeg"
import FarooqImage from "../assets/images/Team/Dr Farooq.jpeg"
import HaiderImage from "../assets/images/Team/Mr Haider.jpeg"

import AbidImage from "../assets/images/Team/Dr Abid Ali.jpeg"
import AmirImage from "../assets/images/Team/Dr Raja Aamir.jpeg"
// Add placeholder for missing images

// const placeholder = "https://via.placeholder.com/200x200?text=No+Image"

const TeamSection = () => {
   // Team members data (updated order and titles)
   const teamMembers = [
      {
         id: 1,
         name: "Dr Amjad Iqbal",
         title: "Managing Director",
         image: drAmjadImage,
         category: "founder"
      },
      {
         id: 2,
         name: "Dr Farman Ali Khan",
         title: "CEO",
         image: FarmanImage,
         category: "founder"
      },
      {
         id: 3,
         name: "Dr Farooq Korai",
         title: "Chairman",
         image: FarooqImage,
         category: "founder"
      },
      {
         id: 4,
         name: "Mr Qasim Ghaffar",
         title: "Regional Head KPK",
         image: qasimGhaffarImage,
         category: "team"
      },
      {
         id: 5,
         name: "Dr Abid Ali",
         title: "Director Operations",
         image: AbidImage,
         category: "team"
      },
      {
         id: 6,
         name: "Dr Raja Amir",
         title: "Director Sales",
         image: AmirImage,
         category: "team"
      },
      {
         id: 7,
         name: "Dr Khadija Nawaz",
         title: "Assisting Managing Director",
         image: drKhadijaImage,
         category: "team"
      },
      {
         id: 8,
         name: "Ms Laiba Saeed",
         title: "Regional Manager KPK",
         image: laibaSaeedImage,
         category: "team"
      },
      {
         id: 9,
         name: "Mr Kamran Ali",
         title: "Student counsellor",
         image: HaiderImage,
         category: "team"
      }
   ]

   const [activeTab, setActiveTab] = useState("all")
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
   });

   // Categories for tabs
   const categories = [
      { id: "all", name: "All" },
      { id: "founder", name: "Founders" },
   ]

   // Filter team members based on active tab
   const filteredMembers = activeTab === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeTab)

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

               {/* Tabs */}
               <motion.div
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
                  variants={containerVariants}
               >
                  {categories.map((category, index) => (
                     <motion.button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors ${activeTab === category.id
                              ? "bg-TwPrimaryPurple text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                           }`}
                        variants={itemVariants}
                        whileHover={{
                           scale: 1.05,
                           transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        {category.name}
                     </motion.button>
                  ))}
               </motion.div>

               {/* Team Members Grid */}
               <motion.div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12"
                  variants={containerVariants}
               >
                  {filteredMembers.map((member, index) => (
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