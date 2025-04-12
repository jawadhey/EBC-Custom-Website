"use client"

import { useState } from "react"
import { FaPlus, FaChevronUp } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FaqSection = ({ faqs }: any) => {
   // FAQ data
   // const faqs = [
   //    {
   //       id: 1,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   //    {
   //       id: 2,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   //    {
   //       id: 3,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   //    {
   //       id: 4,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   //    {
   //       id: 5,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   //    {
   //       id: 6,
   //       question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
   //       answer:
   //          "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
   //    },
   // ]

   // State to track which FAQs are open
   const [openFaqs, setOpenFaqs] = useState([1, 2]) // Initially open the first two FAQs

   // Toggle FAQ open/closed
   const toggleFaq = (id: any) => {
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
               <motion.div className="flex justify-center mb-6" variants={headerVariants}>
                  <motion.div
                     className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full inline-block"
                     whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                     Clearing out your confusions
                  </motion.div>
               </motion.div>

               {/* Heading */}
               <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
                  variants={headerVariants}
               >
                  {faqs.title}
               </motion.h2>

               {/* Subheading */}
               <motion.p className="text-gray-500 text-center max-w-3xl mx-auto mb-12" variants={headerVariants}>
                  {faqs.description}
               </motion.p>

               {/* FAQ Grid */}
               <motion.div className="grid md:grid-cols-2 gap-6" variants={gridVariants}>
                  {faqs.content.map((faq: any) => (
                     <motion.div
                        key={faq.id}
                        className="bg-white rounded-lg shadow-sm border h-fit border-gray-100 overflow-hidden"
                        variants={faqItemVariants}
                        whileHover={{
                           y: -5,
                           boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                           transition: { duration: 0.2 },
                        }}
                     >
                        <div className="flex justify-between items-start p-6 cursor-pointer" onClick={() => toggleFaq(faq.id)}>
                           <h3 className="text-gray-800 font-medium pr-8">{faq.question}</h3>
                           <motion.button
                              className="bg-purple-100 rounded-full p-2 flex-shrink-0 hover:bg-purple-200 transition-colors"
                              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                              whileTap={{ scale: 0.95 }}
                           >
                              <motion.div
                                 animate={{ rotate: openFaqs.includes(faq.id) ? 0 : 180 }}
                                 transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                 {openFaqs.includes(faq.id) ? (
                                    <FaChevronUp className="text-purple-600 text-sm" />
                                 ) : (
                                    <FaPlus className="text-purple-600 text-sm" />
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
                              >
                                 <motion.div
                                    className="px-6 pb-6 text-gray-600"
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

