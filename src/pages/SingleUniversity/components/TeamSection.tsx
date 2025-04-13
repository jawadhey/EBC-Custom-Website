"use client"

import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../../assets/images'
import { FaLinkedin } from 'react-icons/fa'
import Container from '../../../components/Container'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TeamMember {
   id: number;
   name: string;
   title: string;
   experience: string;
   image: string;
   category: string;
}

const TeamSection = () => {
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
            delay: 0.2 + index * 0.1,
            duration: 0.6,
            ease: "backOut"
         }
      }),
      hover: {
         y: -5,
         boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
         transition: { duration: 0.3 }
      }
   }

   const teamMembers: TeamMember[] = [
      {
         id: 1,
         name: "SARAH ANDERSON",
         title: "Founder",
         experience: "15",
         image: Images.Universities.TeamImage,
         category: "founders",
      },
      {
         id: 2,
         name: "MARIA RODRIGUEZ",
         title: "Founder",
         experience: "15",
         image: Images.Universities.TeamImage,
         category: "founders",
      },
      {
         id: 3,
         name: "MARK THOMPSON",
         title: "Founder",
         experience: "15",
         image: Images.Universities.TeamImage,
         category: "founders",
      },
      {
         id: 4,
         name: "DIEGO MARTINEZ",
         title: "Founder",
         experience: "15",
         image: Images.Universities.TeamImage,
         category: "founders",
      },
   ]

   return (
      <Container>
         <section className="py-8 md:py-12 mt-6 md:mt-8 px-4 bg-white" ref={ref}>
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
                     className="bg-[#1ACD3B1A] text-[#1ACD3B] px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
                     whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(26, 205, 59, 0.15)"
                     }}
                     transition={{ duration: 0.3 }}
                  >
                     We are proud of them
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
                  variants={itemVariants}
               >
                  Our Proud Honors Students
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={itemVariants}
               >
                  Meet the exceptional students whose academic dedication, innovation, and leadership have made them stand out among their peers across the globe.
               </motion.p>

               {/* Team Members Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
                  {teamMembers.map((member, index) => (
                     <motion.div
                        key={member.id}
                        className="rounded-lg overflow-hidden relative"
                        custom={index}
                        variants={cardVariants}
                        whileHover="hover"
                     >
                        <Link to='/team-members' className="block">
                           <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                              <motion.img
                                 src={member.image}
                                 alt={member.name}
                                 className="w-full h-full object-cover"
                                 initial={{ scale: 1.1 }}
                                 animate={inView ? { scale: 1 } : {}}
                                 transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                 whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                              />
                              <motion.div
                                 className="absolute bottom-0 left-3 md:left-4"
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={inView ? { y: 0, opacity: 1 } : {}}
                                 transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                              >
                                 <h3 className="font-bold text-xl md:text-2xl">
                                    <span className="text-blue-800">{member.name.split(" ")[0]}</span> <br />
                                    <span className="text-black">{member.name.split(" ").slice(1).join(" ")}</span>
                                 </h3>
                              </motion.div>
                           </div>

                           <div className="p-3 md:p-4 bg-white">
                              <motion.p
                                 className="text-gray-700 mb-1 md:mb-2 text-sm md:text-base"
                                 initial={{ opacity: 0 }}
                                 animate={inView ? { opacity: 1 } : {}}
                                 transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                              >
                                 {member.title}
                              </motion.p>

                              <div className="flex justify-between items-center">
                                 <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                                 >
                                    <div className="font-bold text-base md:text-lg">{member.experience}+</div>
                                    <div className="text-xs md:text-sm text-gray-600">Years of Experience</div>
                                 </motion.div>

                                 <motion.a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800"
                                    aria-label={`${member.name}'s LinkedIn profile`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }}
                                 >
                                    <FaLinkedin size={24} className="md:w-7 md:h-7" />
                                 </motion.a>
                              </div>
                           </div>
                        </Link>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </section>
      </Container>
   )
}

export default TeamSection