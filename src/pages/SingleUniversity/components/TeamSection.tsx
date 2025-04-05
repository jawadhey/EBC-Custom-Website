"use client"

import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../../assets/images'
import { FaLinkedin } from 'react-icons/fa'
import Container from '../../../components/Container'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const TeamSection = () => {
   const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
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
      visible: (index:any) => ({
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.3 + index * 0.1, // Faster stagger for cards
            duration: 0.6,
            ease: "backOut"
         }
      })
   }

   const teamMembers = [
      {
         id: 1,
         name: "SARAH ANDERSON",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 2,
         name: "MARIA RODRIGUEZ",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 3,
         name: "MARK THOMPSON",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 4,
         name: "DIEGO MARTINEZ",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
   ]

   return (
      <Container>
         <section className="py-12 mt-8 px-4 bg-white" ref={ref}>
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
                     className="bg-[#1ACD3B1A] text-[#1ACD3B] px-6 py-2 rounded-full inline-block"
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
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
                  variants={itemVariants}
               >
                  Our Proud Honors Students
               </motion.h2>

               {/* Subheading */}
               <motion.p 
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
                  variants={itemVariants}
               >
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </motion.p>

               {/* Team Members Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {teamMembers.map((member, index) => (
                     <motion.div 
                        key={member.id} 
                        className="rounded-lg overflow-hidden relative"
                        custom={index}
                        variants={cardVariants}
                        whileHover={{
                           y: -5,
                           boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                           transition: { duration: 0.3 }
                        }}
                     >
                        <Link to='/team-members'>
                           <div className="relative h-80 overflow-hidden">
                              <motion.img
                                 src={Images.Universities.TeamImage}
                                 alt={member.name}
                                 className="w-full h-full object-cover"
                                 initial={{ scale: 1.1 }}
                                 animate={inView ? { scale: 1 } : {}}
                                 transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                 whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                              />
                              <motion.div 
                                 className="absolute bottom-0 left-4"
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={inView ? { y: 0, opacity: 1 } : {}}
                                 transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                              >
                                 <h3 className="font-bold text-2xl">
                                    <span className="text-blue-800">{member.name.split(" ")[0]}</span> <br />
                                    <span className="text-black">{member.name.split(" ").slice(1).join(" ")}</span>
                                 </h3>
                              </motion.div>
                           </div>

                           <div className="p-4 bg-white">
                              <motion.p 
                                 className="text-gray-700 mb-2"
                                 initial={{ opacity: 0 }}
                                 animate={inView ? { opacity: 1 } : {}}
                                 transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                              >
                                 {member.title}
                              </motion.p>

                              <div className="flex justify-between items-center">
                                 <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                                 >
                                    <div className="font-bold text-lg">{member.experience}+</div>
                                    <div className="text-sm text-gray-600">Years of Experience</div>
                                 </motion.div>

                                 <motion.a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800"
                                    aria-label={`${member.name}'s LinkedIn profile`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }}
                                 >
                                    <FaLinkedin size={28} />
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