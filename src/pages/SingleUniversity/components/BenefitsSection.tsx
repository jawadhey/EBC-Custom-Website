"use client"

import { FaArrowRight, FaGraduationCap } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const BenefitsSection = () => {
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

   // Benefits data
   const benefits = [
      {
         id: 1,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 2,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 3,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 4,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 5,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 6,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 7,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 8,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
   ]

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
                     className="bg-purple-100 text-TwPrimaryPurple px-6 py-2 rounded-full inline-block"
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
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
                  variants={itemVariants}
               >
                  Benefits of International Studies
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
                  variants={itemVariants}
               >
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </motion.p>

               {/* Benefits Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                     <motion.div
                        key={benefit.id}
                        className="bg-amber-50 bg-opacity-50 p-6 rounded-lg"
                        custom={index}
                        variants={cardVariants}
                        whileHover={{
                           y: -5,
                           boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
                           transition: { duration: 0.3 }
                        }}
                     >
                        {/* Icon */}
                        <motion.div
                           className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4"
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={inView ? { opacity: 1, scale: 1 } : {}}
                           transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        >
                           <FaGraduationCap className="text-white text-xl" />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                           className="text-purple-600 font-semibold text-lg mb-2"
                           initial={{ opacity: 0 }}
                           animate={inView ? { opacity: 1 } : {}}
                           transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        >
                           {benefit.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                           className="text-gray-600 mb-4"
                           initial={{ opacity: 0 }}
                           animate={inView ? { opacity: 1 } : {}}
                           transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        >
                           {benefit.description}
                        </motion.p>

                        {/* View More Link */}
                        <motion.a
                           href="#"
                           className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors"
                           whileHover={{
                              x: 5,
                              transition: { duration: 0.2 }
                           }}
                        >
                           View More <FaArrowRight className="ml-2" />
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