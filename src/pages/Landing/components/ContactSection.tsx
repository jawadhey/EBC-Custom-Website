import { Icons } from "../../../assets/icons"
import { Images } from "../../../assets/images"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

// Animation variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
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
         duration: 0.6,
         ease: "anticipate"
      }
   }
}

const formVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
         delayChildren: 0.4
      }
   }
}

const inputVariants = {
   hidden: { x: -30, opacity: 0 },
   visible: (i: any) => ({
      x: 0,
      opacity: 1,
      transition: {
         delay: i * 0.1,
         duration: 0.5,
         ease: "easeOut",
      }

   })
}

const imageVariants = {
   hidden: { scale: 0.95, opacity: 0 },
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: 0.8,
         ease: "easeOut"
      }
   }
}

const decorationVariants = {
   hidden: { opacity: 0, scale: 0.8 },
   visible: (i: any) => ({
      opacity: 0.8,
      scale: 1,
      transition: {
         delay: 0.2 + i * 0.2,
         duration: 0.7,
         ease: "easeOut"
      }
   })
}

const ContactSection = () => {
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: false
   })

   return (
      <div className="relative overflow-hidden" ref={ref}>
         {/* Decorative Shapes */}
         <motion.div
            className="absolute top-0 left-0 w-40 h-40 z-10"
            variants={decorationVariants}
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg1} />
         </motion.div>

         <motion.div
            className="absolute top-0 right-0 w-64 h-64 z-10"
            variants={decorationVariants}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg2} />
         </motion.div>

         <motion.div
            className="absolute bottom-0 left-0 z-10 hidden xl:block"
            variants={decorationVariants}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg3} />
         </motion.div>

         <div className="grid md:grid-cols-12 h-[820px]">
            {/* Left Column - Form */}
            <motion.div
               className="bg-TwPrimaryPurple col-span-7 py-16 px-8 md:px-12 lg:px-16 relative"
               initial={{ x: -50, opacity: 0 }}
               animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
               transition={{ duration: 0.7 }}
            >
               <motion.div
                  className="max-w-md mx-auto z-20 relative"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
               >
                  <motion.div
                     className="w-fit px-4 py-2 rounded-full h-[40px] flex items-center bg-[#FFFFFF1A] text-white text-sm mb-8"
                     variants={badgeVariants}
                     whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                     }}
                  >
                     Reach us out!
                  </motion.div>

                  <motion.h2
                     className="text-3xl md:text-4xl font-bold text-white mb-10"
                     variants={itemVariants}
                  >
                     Start with a <span className="text-yellow-400">Message</span>
                  </motion.h2>

                  <motion.form
                     className="space-y-6"
                     variants={formVariants}
                  >
                     <motion.div variants={inputVariants} custom={0}>
                        <label htmlFor="fullName" className="block text-white mb-2">
                           Full Name
                        </label>
                        <input
                           type="text"
                           id="fullName"
                           placeholder="Jhon Doe"
                           className="w-full px-4 bg-[#FFFFFF33] py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                     </motion.div>

                     <motion.div variants={inputVariants} custom={1}>
                        <label htmlFor="email" className="block text-white mb-2">
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           placeholder="example@email.com"
                           className="w-full px-4 bg-[#FFFFFF33] py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                     </motion.div>

                     <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={inputVariants}
                        custom={2}
                     >
                        <div>
                           <label htmlFor="phone" className="block text-white mb-2">
                              Phone Number
                           </label>
                           <input
                              type="tel"
                              id="phone"
                              placeholder="+92 000 0000000"
                              className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                           />
                        </div>

                        <div>
                           <label htmlFor="city" className="block text-white mb-2">
                              City
                           </label>
                           <input
                              type="text"
                              id="city"
                              placeholder="Islamabad"
                              className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                           />
                        </div>
                     </motion.div>

                     <motion.div variants={inputVariants} custom={3}>
                        <label htmlFor="message" className="block text-white mb-2">
                           Message
                        </label>
                        <textarea
                           id="message"
                           rows={4}
                           placeholder="What's on your mind"
                           className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                     </motion.div>

                     <motion.button
                        type="submit"
                        className="px-6 py-3 bg-yellow-400 text-purple-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                        variants={inputVariants}
                        custom={4}
                        whileHover={{
                           scale: 1.05,
                           backgroundColor: "#FBBF24",
                           transition: { duration: 0.2 }
                        }}
                     >
                        Send Message
                     </motion.button>
                  </motion.form>
               </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
               className="relative col-span-5"
               variants={imageVariants}
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
            >
               <motion.img
                  src={Images.ContactImage}
                  alt="Group of students"
                  className="w-full h-full object-cover"
                  // animate={{
                  //    scale: [1, 1.03, 1],
                  // }}
                  transition={{
                     duration: 8,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />

               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
               <motion.div
                  className="absolute top-12 left-0 right-0 text-center"
                  initial={{ y: -30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
               >
                  <p className="text-white text-xl mb-2">It starts with you</p>
                  <motion.div
                     className="inline-block bg-yellow-400 px-4 py-2"
                     whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                     }}
                  >
                     <p className="text-gray-800 text-2xl font-bold">Don't miss out!</p>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default ContactSection