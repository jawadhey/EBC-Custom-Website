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
   const [openAboutFaqs, setOpenAboutFaqs] = useState<number[]>([])
   const [openProgramsFaqs, setOpenProgramsFaqs] = useState<number[]>([])
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
   })

   const aboutFaqs = [
      {
         question: "What is ebc worldwide?",
         answer:
            "EBC Worldwide is a leading study abroad consultancy that helps students apply to universities overseas. We specialize in MBBS and MD programs along with business, IT, engineering, and other undergrad and postgrad programs in countries like China, Azerbaijan, Georgia, Belarus, and more.",
      },
      {
         question: "Why choose ebc worldwide for studying abroad?",
         answer:
            "With years of experience and a strong track record, EBC Worldwide offers complete, reliable, and transparent study abroad services. Our direct partnerships with international universities ensure a smooth admission process, up-to-date information, and professional guidance for students and parents. Our expert team guides you every step from university admission to visa processing and student support.",
      },
      {
         question: "Does ebc worldwide specialize in MBBS/MD admissions?",
         answer:
            "Yes, EBC Worldwide is one of the leading MBBS/MD consultants for studying medicine abroad. We assist students with MBBS admissions in top medical universities recognized by the WHO, PMDC, ECFMG, WFME, and other international medical bodies.",
      },
      {
         question: "Does ebc worldwide help with student visas?",
         answer:
            "Yes, we provide complete visa support including documentation, interview preparation, embassy guidance, and assistance throughout the visa process to increase approval chances.",
      },
      {
         question: "Does ebc worldwide assist after students arrive abroad?",
         answer:
            "Yes, our services continue even after you travel. We help with airport pickup, hostel accommodation, student orientation, and ongoing support to ensure a smooth transition and successful academic journey.",
      },
      {
         question: "How can I apply to study abroad with ebc worldwide?",
         answer:
            "You can apply easily through our website enquiry form, contact us via WhatsApp or phone, or visit our office for a free one-on-one consultation. Our expert counsellors will guide you step by step through the entire admission process.",
      },
      {
         question: "Does ebc worldwide charge a consultancy fee?",
         answer:
            "Yes, but our fee structure is transparent and depends on the country, university, and program you choose. All details are discussed clearly during your counselling session.",
      },
      {
         question: "Does ebc worldwide offer scholarships?",
         answer:
            "Some universities offer partial scholarships or tuition discounts based on academic performance. We help students explore these opportunities during the admission process.",
      },
   ]

   const programsFaqs = [
      {
         question: "What is the duration of MBBS/MD programs abroad?",
         answer:
            "Most MBBS/MD programs abroad are 6 years in duration: 5 years academic and one year internship.",
      },
      {
         question: "Are medical degrees from abroad recognised in Pakistan?",
         answer:
            "Yes, provided the universities are listed on WHO, WFME, and PMDC directories. We guide students towards recognized universities to ensure smooth licensing and registration upon return.",
      },
      {
         question: "Do I need to pass any exams before applying for medical programs abroad?",
         answer:
            "Generally, no entrance exam is required for medical admission in most of our partner universities. However, students must meet minimum academic qualifications.",
      },
      {
         question: "Will I be eligible for USMLE, PLAB and PMDC licensing exams after graduation?",
         answer:
            "Yes, graduates from our partner universities are eligible to apply for licensing exams like USMLE, PLAB, AMC, and PMDC after fulfilling relevant requirements.",
      },
      {
         question: "Am I allowed to work while studying abroad?",
         answer:
            "Yes, you are allowed to work in several countries while studying abroad, but in some countries like China, undergrad students are not allowed to work during their study tenure.",
      },
      {
         question: "Is the medium of instruction English?",
         answer:
            "Yes, all programs offered through EBC Worldwide partner universities are taught fully in English.",
      },
   ]

   const toggleAboutFaq = (index: number) => {
      setOpenAboutFaqs(prev =>
         prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index]
      )
   }

   const toggleProgramsFaq = (index: number) => {
      setOpenProgramsFaqs(prev =>
         prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index]
      )
   }

   return (
      <div className="py-8 md:py-16 lg:py-20 bg-white" ref={ref}>
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
                     className="bg-purple-200 text-TwPrimaryPurple px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-sm md:text-base"
                     variants={badgeVariants}
                  >
                     Clearing out your confusions
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
                  variants={headingVariants}
               >
                  Frequently Asked Questions
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={itemVariants}
               >
                  Got questions? We've got answers! Check out our most frequently asked questions to get quick, clear info about studying abroad with EBC.
               </motion.p>

               {/* Two Column Layout */}
               <motion.div
                  className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
                  variants={containerVariants}
               >
                  {/* About Us FAQs */}
                  <motion.div
                     className="bg-purple-200 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
                     variants={faqItemVariants}
                     whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                     <motion.h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">About Us</motion.h3>
                     <motion.p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                        Helping students study abroad with expert guidance and ongoing support.
                     </motion.p>

                     <div className="space-y-3 md:space-y-4">
                        {aboutFaqs.map((faq, index) => (
                           <motion.div
                              key={index}
                              className="border-b border-purple-100 pb-3 md:pb-4 last:border-0"
                              variants={faqItemVariants}
                           >
                              <motion.div
                                 className="flex justify-between items-start cursor-pointer gap-2"
                                 onClick={() => toggleAboutFaq(index)}
                                 whileHover={{ x: 3 }}
                              >
                                 <h4 className="text-gray-700 font-medium text-sm md:text-base pr-4 md:pr-8">
                                    {faq.question}
                                 </h4>
                                 <motion.button
                                    className="bg-purple-100 rounded-full p-1.5 md:p-2 flex-shrink-0 hover:bg-purple-200 transition-colors"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                 >
                                    {openAboutFaqs.includes(index) ? (
                                       <FaTimes className="text-TwPrimaryPurple text-xs md:text-sm" />
                                    ) : (
                                       <FaPlus className="text-TwPrimaryPurple text-xs md:text-sm" />
                                    )}
                                 </motion.button>
                              </motion.div>

                              <AnimatePresence>
                                 {openAboutFaqs.includes(index) && (
                                    <motion.div
                                       className="mt-2 md:mt-3 text-gray-600 overflow-hidden text-sm md:text-base"
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
                     className="bg-TwOrangeBg rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
                     variants={faqItemVariants}
                     whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                     <motion.h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">Our Programs</motion.h3>
                     <motion.p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                        Offering top-tier medical programs through our trusted university partners.
                     </motion.p>

                     <div className="space-y-3 md:space-y-4">
                        {programsFaqs.map((faq, index) => (
                           <motion.div
                              key={index}
                              className="border-b border-amber-100 pb-3 md:pb-4 last:border-0"
                              variants={faqItemVariants}
                           >
                              <motion.div
                                 className="flex justify-between items-start cursor-pointer gap-2"
                                 onClick={() => toggleProgramsFaq(index)}
                                 whileHover={{ x: 3 }}
                              >
                                 <h4 className="text-gray-700 font-medium text-sm md:text-base pr-4 md:pr-8">
                                    {faq.question}
                                 </h4>
                                 <motion.button
                                    className="bg-amber-100 rounded-full p-1.5 md:p-2 flex-shrink-0 hover:bg-amber-200 transition-colors"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                 >
                                    {openProgramsFaqs.includes(index) ? (
                                       <FaTimes className="text-amber-600 text-xs md:text-sm" />
                                    ) : (
                                       <FaPlus className="text-amber-600 text-xs md:text-sm" />
                                    )}
                                 </motion.button>
                              </motion.div>

                              <AnimatePresence>
                                 {openProgramsFaqs.includes(index) && (
                                    <motion.div
                                       className="mt-2 md:mt-3 text-gray-600 overflow-hidden text-sm md:text-base"
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