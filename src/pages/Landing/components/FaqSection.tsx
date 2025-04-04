"use client"

import { useState } from "react"
import { FaPlus, FaTimes } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Animation variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.3
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

const badgeVariants = {
   hidden: { scale: 0.8, opacity: 0 },
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: 0.5,
         type: "spring",
         stiffness: 200
      }
   }
}

const headingVariants = {
   hidden: { y: 30, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.6,
         ease: "easeOut"
      }
   }
}

const faqItemVariants = {
   hidden: { opacity: 0, y: 10 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.4,
         ease: "easeOut"
      }
   }
}

const faqContentVariants = {
   open: {
      opacity: 1,
      height: "auto",
      transition: {
         duration: 0.3,
         ease: "easeInOut"
      }
   },
   closed: {
      opacity: 0,
      height: 0,
      transition: {
         duration: 0.3,
         ease: "easeInOut"
      }
   }
}

const buttonVariants = {
   initial: { scale: 1 },
   hover: { scale: 1.05 },
   tap: { scale: 0.95 }
}

const FaqSection = () => {
   const [openAboutFaqs, setOpenAboutFaqs] = useState([0])
   const [openProgramsFaqs, setOpenProgramsFaqs] = useState([0])
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
   })

   const aboutFaqs = [
      {
         question: "Who is behind this student consultancy?",
         answer:
            "We are a dedicated team of education consultants with years of experience in helping students navigate their journey to study abroad. Our mission is to make the process as smooth and stress-free as possible for you.",
      },
      {
         question: "How long have you been helping students?",
         answer:
            "We have been assisting students for over [X] years, with a proven track record of successful placements in top medical universities abroad, especially in China.",
      },
      {
         question: "Is your consultancy fee high?",
         answer:
            "Our services are affordable and tailored to the needs of each student. We aim to provide value and ensure that every student gets the best possible guidance throughout the application process.",
      },
      {
         question: "Can I contact you for advice even after I've enrolled in my program?",
         answer:
            "Absolutely! We believe in ongoing support, so we’re always here to help, even after you’ve started your studies abroad.",
      },
   ]
   const programsFaqs = [
      {
         question: "Which universities in China do you work with?",
         answer:
            "We partner with top-tier medical universities in China, including [University A], [University B], and [University C], all recognized for their high-quality medical programs and global reputation.",
      },
      {
         question: "What documents do I need to apply for a program?",
         answer:
            "Generally, you'll need your academic transcripts, passport, proof of language proficiency (if required), a recommendation letter, and a medical check-up certificate. Our team will guide you through the specific requirements for each university.",
      },
      {
         question: "How long does the application process take?",
         answer:
            "The application process typically takes 2-3 months, depending on the university’s requirements and the time needed to process your visa. We work with you to ensure everything is submitted on time.",
      },
      {
         question: "Can I work while studying abroad?",
         answer:
            "Yes, many students can work part-time during their studies, depending on visa regulations. We’ll provide you with all the necessary information to ensure you’re aware of the rules regarding work while studying in China.",
      },
      {
         question: "What are the living costs in China?",
         answer:
            "Living costs vary depending on the city, but on average, students spend between $300 to $600 per month on accommodation, food, transportation, and other expenses. We’ll help you plan a budget to make sure you’re financially prepared.",
      },
   ]

   const toggleAboutFaq = (index: number) => {
      if (openAboutFaqs.includes(index)) {
         setOpenAboutFaqs(openAboutFaqs.filter((item) => item !== index))
      } else {
         setOpenAboutFaqs([...openAboutFaqs, index])
      }
   }

   const toggleProgramsFaq = (index: number) => {
      if (openProgramsFaqs.includes(index)) {
         setOpenProgramsFaqs(openProgramsFaqs.filter((item) => item !== index))
      } else {
         setOpenProgramsFaqs([...openProgramsFaqs, index])
      }
   }

   return (
      <div className="py-16 lg:py-24 bg-white" ref={ref}>
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
                     className="bg-purple-100 text-TwPrimaryPurple px-6 py-2 rounded-full inline-block"
                     variants={badgeVariants}
                  >
                     Clearing out your confusions
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
                  variants={headingVariants}
               >
                  Frequently Asked Questions
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
                  variants={itemVariants}
               >
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </motion.p>

               {/* Two Column Layout */}
               <motion.div
                  className="grid md:grid-cols-2 gap-8 lg:gap-16"
                  variants={containerVariants}
               >
                  {/* About Us FAQs */}
                  <motion.div
                     className="bg-purple-50 rounded-2xl p-8"
                     variants={faqItemVariants}
                     whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                     <motion.h3 className="text-2xl font-semibold text-gray-800 mb-3">About Us</motion.h3>
                     <motion.p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. At est phasellus feugiat.</motion.p>

                     <div className="space-y-4">
                        {aboutFaqs.map((faq, index) => (
                           <motion.div
                              key={index}
                              className="border-b border-purple-100 pb-4 last:border-0"
                              variants={faqItemVariants}
                           >
                              <motion.div
                                 className="flex justify-between items-start cursor-pointer"
                                 onClick={() => toggleAboutFaq(index)}
                                 whileHover={{ x: 5 }}
                              >
                                 <h4 className="text-gray-700 font-medium pr-8">{faq.question}</h4>
                                 <motion.button
                                    className="bg-purple-100 rounded-full p-2 flex-shrink-0 hover:bg-purple-200 transition-colors"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                 >
                                    {openAboutFaqs.includes(index) ? (
                                       <FaTimes className="text-TwPrimaryPurple text-sm" />
                                    ) : (
                                       <FaPlus className="text-TwPrimaryPurple text-sm" />
                                    )}
                                 </motion.button>
                              </motion.div>

                              <AnimatePresence>
                                 {openAboutFaqs.includes(index) && (
                                    <motion.div
                                       className="mt-3 text-gray-600 overflow-hidden"
                                       initial="closed"
                                       animate="open"
                                       exit="closed"
                                       variants={faqContentVariants}
                                    >
                                       {faq.answer}
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Our Programs FAQs */}
                  <motion.div
                     className="bg-[#FFF7E8] rounded-2xl p-8"
                     variants={faqItemVariants}
                     whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                     <motion.h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Programs</motion.h3>
                     <motion.p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. At est phasellus feugiat.</motion.p>

                     <div className="space-y-4">
                        {programsFaqs.map((faq, index) => (
                           <motion.div
                              key={index}
                              className="border-b border-amber-100 pb-4 last:border-0"
                              variants={faqItemVariants}
                           >
                              <motion.div
                                 className="flex justify-between items-start cursor-pointer"
                                 onClick={() => toggleProgramsFaq(index)}
                                 whileHover={{ x: 5 }}
                              >
                                 <h4 className="text-gray-700 font-medium pr-8">{faq.question}</h4>
                                 <motion.button
                                    className="bg-amber-100 rounded-full p-2 flex-shrink-0 hover:bg-amber-200 transition-colors"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                 >
                                    {openProgramsFaqs.includes(index) ? (
                                       <FaTimes className="text-amber-600 text-sm" />
                                    ) : (
                                       <FaPlus className="text-amber-600 text-sm" />
                                    )}
                                 </motion.button>
                              </motion.div>

                              <AnimatePresence>
                                 {openProgramsFaqs.includes(index) && (
                                    <motion.div
                                       className="mt-3 text-gray-600 overflow-hidden"
                                       initial="closed"
                                       animate="open"
                                       exit="closed"
                                       variants={faqContentVariants}
                                    >
                                       {faq.answer}
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default FaqSection