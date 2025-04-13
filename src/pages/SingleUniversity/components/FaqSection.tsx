"use client"

import { useState } from "react"
import { FaPlus, FaChevronUp } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface FaqItem {
   id: number;
   question: string;
   answer: string;
}

interface FaqProps {
   title: string;
   description: string;
   content: FaqItem[];
}

const FaqSection = ({ faqs }: { faqs: FaqProps }) => {
   // State to track which FAQs are open
   const [openFaqs, setOpenFaqs] = useState<number[]>([1, 2]) // Initially open the first two FAQs

   // Toggle FAQ open/closed
   const toggleFaq = (id: number) => {
      if (openFaqs.includes(id)) {
         setOpenFaqs(openFaqs.filter((faqId) => faqId !== id))
      } else {
         setOpenFaqs([...openFaqs, id])
      }
   }

   // Animation with useInView
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

   const headerVariants = {
      hidden: { y: -20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   }

   const gridVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
         },
      },
   }

   const faqItemVariants = {
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
         y: -5,
         boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
         transition: { duration: 0.2 },
      },
   }

   const iconVariants = {
      open: { rotate: 0 },
      closed: { rotate: 180 },
      transition: { duration: 0.3, ease: "easeInOut" }
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
               <motion.div className="flex justify-center mb-4 md:mb-6" variants={headerVariants}>
                  <motion.div
                     className="bg-purple-100 text-purple-600 px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
                     whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                     Clearing out your confusions
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
                  variants={headerVariants}
               >
                  {faqs.title}
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={headerVariants}
               >
                  {faqs.description}
               </motion.p>

               {/* FAQ Grid */}
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                  variants={gridVariants}
               >
                  {faqs.content.map((faq) => (
                     <motion.div
                        key={faq.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                        variants={faqItemVariants}
                        whileHover="hover"
                     >
                        <div
                           className="flex justify-between items-start p-4 md:p-6 cursor-pointer"
                           onClick={() => toggleFaq(faq.id)}
                           aria-expanded={openFaqs.includes(faq.id)}
                           aria-controls={`faq-content-${faq.id}`}
                        >
                           <h3 className="text-gray-800 font-medium pr-4 md:pr-8 text-sm md:text-base !leading-snug">
                              {faq.question}
                           </h3>
                           <motion.button
                              className="bg-purple-100 rounded-full p-1 md:p-2 flex-shrink-0 hover:bg-purple-200 transition-colors"
                              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={openFaqs.includes(faq.id) ? "Collapse answer" : "Expand answer"}
                           >
                              <motion.div
                                 animate={openFaqs.includes(faq.id) ? "open" : "closed"}
                                 variants={iconVariants}
                              >
                                 {openFaqs.includes(faq.id) ? (
                                    <FaChevronUp className="text-purple-600 text-xs md:text-sm" />
                                 ) : (
                                    <FaPlus className="text-purple-600 text-xs md:text-sm" />
                                 )}
                              </motion.div>
                           </motion.button>
                        </div>

                        <AnimatePresence>
                           {openFaqs.includes(faq.id) && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{
                                    height: "auto",
                                    opacity: 1,
                                    transition: {
                                       height: { duration: 0.3 },
                                       opacity: { duration: 0.3, delay: 0.1 },
                                    },
                                 }}
                                 exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition: {
                                       height: { duration: 0.3 },
                                       opacity: { duration: 0.2 },
                                    },
                                 }}
                                 className="overflow-hidden"
                                 id={`faq-content-${faq.id}`}
                              >
                                 <motion.div
                                    className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 text-sm md:text-base !leading-relaxed"
                                    initial={{ y: 10 }}
                                    animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
                                 >
                                    {faq.answer}
                                 </motion.div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default FaqSection