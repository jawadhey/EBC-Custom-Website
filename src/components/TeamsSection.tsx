"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import Container from "./Container"
import { Images } from "../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const TeamSection = () => {
   // Team categories
   const categories = [
      { id: "founders", name: "Founders" },
      { id: "executive", name: "Executive Members" },
      { id: "directors", name: "Directors" },
      // { id: "managers", name: "Lorem ipsum" },
      { id: "staff", name: "staff" },
   ]

   // Team members data
   const teamMembers: any = {
      founders: [
         {
            id: 1,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-1.jpg",
         },
         {
            id: 2,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-2.jpg",
         },
         {
            id: 3,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-3.jpg",
         },
         {
            id: 4,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-4.jpg",
         },
      ],
      executive: [
         {
            id: 5,
            name: "John Smith",
            title: "CEO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 6,
            name: "Emily Johnson",
            title: "CTO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 7,
            name: "Michael Brown",
            title: "CFO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 8,
            name: "Jessica Williams",
            title: "COO",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      directors: [
         {
            id: 9,
            name: "Robert Davis",
            title: "Director of Marketing",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 10,
            name: "Lisa Miller",
            title: "Director of Operations",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      managers: [
         {
            id: 11,
            name: "David Wilson",
            title: "Project Manager",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 12,
            name: "Amanda Taylor",
            title: "HR Manager",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      staff: [
         {
            id: 13,
            name: "James Anderson",
            title: "Senior Developer",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 14,
            name: "Sophia Martinez",
            title: "Marketing Specialist",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
   }

   // State for active category
   const [activeCategory, setActiveCategory] = useState("founders")

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
      <div className="py-16 bg-white" ref={ref}>
         <Container>
            <motion.div
               className="mx-auto"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={containerVariants}
            >
               {/* Top Badge */}
               <motion.div
                  className="flex justify-center mb-6"
                  variants={itemVariants}
               >
                  <motion.div
                     className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block"
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
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
                  variants={itemVariants}
               >
                  Our Executive Team
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
                  variants={itemVariants}
               >
                  Meet the passionate professionals driving our mission to guide students toward successful academic journeys abroad.

               </motion.p>

               {/* Category Tabs */}
               <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-12"
                  variants={itemVariants}
               >
                  {categories.map((category) => (
                     <motion.button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                              ? "bg-TwPrimaryPurple text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                           }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                     >
                        {category.name}
                     </motion.button>
                  ))}
               </motion.div>

               {/* Team Members Grid */}
               <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly gap-8 mb-12"
                  variants={containerVariants}
                  key={activeCategory} // Force re-render animation when category changes
                  initial="hidden"
                  animate="visible"
               >
                  {teamMembers[activeCategory].map((member: any, index: number) => (
                     <motion.div
                        key={member.id}
                        className="flex flex-col items-center"
                        custom={index}
                        variants={memberVariants}
                     >
                        {/* Image with corner accents */}
                        <motion.div
                           className="relative mb-4"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                        >
                           <motion.div
                              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <motion.div
                              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400"
                              variants={cornerVariants}
                           ></motion.div>
                           <img
                              src={Images.About.Founder || "/placeholder.svg"}
                              alt={member.name}
                              className="w-48 h-48 rounded-full object-cover"
                           />
                        </motion.div>

                        <motion.h3
                           className="text-xl font-semibold text-TwPrimaryPurple mb-1"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.3 + (index * 0.1) }}
                        >
                           {member.name}
                        </motion.h3>
                        <motion.p
                           className="text-gray-500"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                           {member.title}
                        </motion.p>
                     </motion.div>
                  ))}
               </motion.div>

               {/* View All Button */}
               <motion.div
                  className="flex justify-center"
                  variants={itemVariants}
               >
                  <motion.a
                     href="#"
                     className="inline-flex items-center bg-purple-100 text-TwPrimaryPurple px-6 py-3 rounded-full hover:bg-purple-200 transition-colors"
                     whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                     }}
                     whileTap={{ scale: 0.98 }}
                     transition={{ duration: 0.2 }}
                  >
                     View Whole Team
                     <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                           duration: 1.2,
                           repeat: Infinity,
                           repeatDelay: 1
                        }}
                     >
                        <FaArrowRight className="ml-2" />
                     </motion.span>
                  </motion.a>
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default TeamSection