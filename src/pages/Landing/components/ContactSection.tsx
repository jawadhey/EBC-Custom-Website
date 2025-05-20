import { Icons } from "../../../assets/icons"
import { Images } from "../../../assets/images"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import Container from "../../../components/Container"
import emailjs from 'emailjs-com'

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
   
   // Form state management
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: ""
   })
   
   // Loading state for form submission
   const [isSubmitting, setIsSubmitting] = useState(false)
   
   // EmailJS service ID from environment variable
   const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'default_service_id'
   
   // Handle input changes
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData(prevData => ({
         ...prevData,
         [id]: value
      }))
   }
   
   // Handle form submission
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      try {
         // Send form data to Google Script
         const scriptURL = "https://script.google.com/macros/s/AKfycbzZnkDGQReRsNg3b_E2lCep9EmO4y_pRTEneEpCufMZhXD88zsmBA6hvwoCzLfkKDk1zQ/exec"
         await fetch(scriptURL, {
            method: "POST",
            mode: 'no-cors',
            body: JSON.stringify(formData),
            headers: {
               "Content-Type": "application/json"
            }
         })
         
         // Send form data via EmailJS
         await emailjs.send(
            serviceId,
            'template_tifm4xn', // Replace with your EmailJS template ID
            {
               to_email: 'info.ebcworldwide@gmail.com',
               from_name: formData.fullName,
               from_email: formData.email,
               phone: formData.phone,
               city: formData.city,
               message: formData.message
            },
            process.env.REACT_APP_EMAILJS_API_KEY
            // 'user_id' // Replace with your EmailJS user ID
         )
         
         // Reset form after successful submission
         setFormData({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            message: ""
         })
         
         alert("Form submitted successfully!")
      } catch (error) {
         alert("An error occurred. Please try again later.")
         console.error("Submission Error:", error)
      } finally {
         setIsSubmitting(false)
      }
   }

   return (
      <div className="relative overflow-hidden" ref={ref}>
         {/* Decorative Shapes - Hidden on mobile */}
         <motion.div
            className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 z-10 hidden sm:block"
            variants={decorationVariants}
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg1} alt="Decoration" className="w-full h-full" />
         </motion.div>

         <motion.div
            className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 z-10 hidden sm:block"
            variants={decorationVariants}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg2} alt="Decoration" className="w-full h-full" />
         </motion.div>

         <motion.div
            className="absolute bottom-0 left-0 z-10 hidden xl:block"
            variants={decorationVariants}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         >
            <img src={Icons.Landing.ContactSvg3} alt="Decoration" />
         </motion.div>

         <div className="flex flex-col md:grid md:grid-cols-12 min-h-[600px] md:h-[700px] lg:h-[820px]">
            {/* Left Column - Form */}
            <motion.div
               className="bg-TwPrimaryPurple md:col-span-7 py-12 px-6 sm:px-8 md:px-12 lg:px-16 relative"
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
                     className="w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full h-[36px] md:h-[40px] flex items-center bg-[#FFFFFF1A] text-white text-xs md:text-sm mb-6 md:mb-8"
                     variants={badgeVariants}
                     whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                     }}
                  >
                     Reach us out!
                  </motion.div>

                  <motion.h2
                     className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10 !leading-tight"
                     variants={itemVariants}
                  >
                     Start with a <span className="text-yellow-400">Message</span>
                  </motion.h2>

                  <motion.form
                     className="space-y-4 md:space-y-6"
                     variants={formVariants}
                     onSubmit={handleSubmit}
                  >
                     <motion.div variants={inputVariants} custom={0}>
                        <label htmlFor="fullName" className="block text-white mb-1 md:mb-2 text-sm md:text-base">
                           Full Name
                        </label>
                        <input
                           type="text"
                           id="fullName"
                           placeholder="John Doe"
                           className="w-full px-3 md:px-4 bg-[#FFFFFF33] py-2 md:py-3 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                           value={formData.fullName}
                           onChange={handleChange}
                           required
                        />
                     </motion.div>

                     <motion.div variants={inputVariants} custom={1}>
                        <label htmlFor="email" className="block text-white mb-1 md:mb-2 text-sm md:text-base">
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           placeholder="example@email.com"
                           className="w-full px-3 md:px-4 bg-[#FFFFFF33] py-2 md:py-3 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                           value={formData.email}
                           onChange={handleChange}
                           required
                        />
                     </motion.div>

                     <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                        variants={inputVariants}
                        custom={2}
                     >
                        <div>
                           <label htmlFor="phone" className="block text-white mb-1 md:mb-2 text-sm md:text-base">
                              Phone Number
                           </label>
                           <input
                              type="tel"
                              id="phone"
                              placeholder="+92 000 0000000"
                              className="w-full bg-[#FFFFFF33] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="city" className="block text-white mb-1 md:mb-2 text-sm md:text-base">
                              City
                           </label>
                           <input
                              type="text"
                              id="city"
                              placeholder="Islamabad"
                              className="w-full bg-[#FFFFFF33] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                              value={formData.city}
                              onChange={handleChange}
                              required
                           />
                        </div>
                     </motion.div>

                     <motion.div variants={inputVariants} custom={3}>
                        <label htmlFor="message" className="block text-white mb-1 md:mb-2 text-sm md:text-base">
                           Message
                        </label>
                        <textarea
                           id="message"
                           rows={3}
                           placeholder="What's on your mind"
                           className="w-full bg-[#FFFFFF33] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                           value={formData.message}
                           onChange={handleChange}
                           required
                        ></textarea>
                     </motion.div>

                     <motion.button
                        type="submit"
                        className="px-4 md:px-6 py-2 md:py-3 bg-yellow-400 text-purple-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors text-sm md:text-base flex items-center justify-center"
                        variants={inputVariants}
                        custom={4}
                        whileHover={{
                           scale: 1.05,
                           backgroundColor: "#FBBF24",
                           transition: { duration: 0.2 }
                        }}
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? (
                           <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                           </>
                        ) : (
                           "Send Message"
                        )}
                     </motion.button>
                  </motion.form>
               </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
               className="relative md:col-span-5 h-64 sm:h-80 md:h-full"
               variants={imageVariants}
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
            >
               <motion.img
                  src={Images.ContactImage}
                  alt="Group of students"
                  className="w-full h-full object-cover"
                  transition={{
                     duration: 8,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               />

               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
               <motion.div
                  className="absolute top-6 sm:top-12 left-0 right-0 text-center"
                  initial={{ y: -30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
               >
                  <p className="text-white text-base sm:text-xl mb-1 sm:mb-2">It starts with you</p>
                  <motion.div
                     className="inline-block bg-yellow-400 px-3 py-1 sm:px-4 sm:py-2"
                     whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                     }}
                  >
                     <p className="text-gray-800 text-lg sm:text-2xl font-bold">Don't miss out!</p>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default ContactSection