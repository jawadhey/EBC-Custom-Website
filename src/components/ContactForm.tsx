//@ts-nocheck
import { useState } from "react"
import Breadcrumb from "./BreadCrumbs"
import Container from "./Container"
import { Images } from "../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import emailjs from 'emailjs-com'

interface FormData {
   fullName: string
   email: string
   phone: string
   city: string
   message: string
}

interface BreadcrumbItem {
   label: string
   href?: string
}

interface ContactFormProps {
   title?: string
   description?: string
   image?: string
   breadcrumbItems?: BreadcrumbItem[]
}

const ContactForm = ({
   title = "Get in Touch",
   description = "Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.",
   image,
   breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact Us" }],
}: ContactFormProps) => {
   const [formData, setFormData] = useState<FormData>({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
   })

   // Added loading state for form submission
   const [isSubmitting, setIsSubmitting] = useState(false)

   // EmailJS service ID from environment variable
   const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'default_service_id'

   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   // Updated handleSubmit to use the Google Script API and EmailJS
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
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

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
         },
      },
   }

   const formContainerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   }

   const imageVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.7,
            ease: "easeOut",
         },
      },
   }

   const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: "easeOut",
         },
      },
   }

   const formFieldVariants = {
      hidden: { opacity: 0, y: 15 },
      visible: (custom: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: custom * 0.1,
            duration: 0.5,
            ease: "easeOut",
         },
      }),
   }

   const buttonVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20,
         },
      },
      hover: {
         scale: 1.02,
         boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
         transition: {
            duration: 0.2,
         },
      },
   }

   const inputHoverVariants = {
      hover: {
         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
         transition: { duration: 0.2 },
      },
   }

   return (
      <div className="py-8 md:py-12" ref={ref}>
         <Container>
            <motion.div
               className="mx-auto"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={containerVariants}
            >
               {/* Breadcrumb */}
               <motion.div variants={contentVariants}>
                  <Breadcrumb items={breadcrumbItems} />
               </motion.div>

               {/* Main Content */}
               <motion.div
                  className="bg-purple-50 rounded-2xl md:rounded-3xl overflow-hidden"
                  variants={formContainerVariants}
               >
                  <div className="grid md:grid-cols-12 gap-0">
                     {/* Left Column - Image */}
                     <motion.div
                        className="lg:h-full col-span-full w-full h-[300px] sm:h-[350px] md:h-[400px] flex justify-center mt-4 md:mt-5 lg:mt-0 lg:col-span-4"
                        variants={imageVariants}
                     >
                        <motion.img
                           src={Images.EbcContactForm}
                           alt="Contact us illustration"
                           className="w-full h-full max-w-[550px] object-cover"
                           whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        />
                     </motion.div>

                     {/* Right Column - Form */}
                     <motion.div
                        className="p-6 sm:p-8 md:p-10 lg:p-12 col-span-full lg:col-span-8"
                        variants={contentVariants}
                     >
                        <motion.h2
                           className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 md:mb-4 !leading-tight"
                           variants={contentVariants}
                        >
                           {title}
                        </motion.h2>

                        <motion.p
                           className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base !leading-relaxed"
                           variants={contentVariants}
                        >
                           {description}
                        </motion.p>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                           <motion.div
                              custom={0}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="fullName" className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                                 Full Name
                              </label>
                              <motion.input
                                 type="text"
                                 id="fullName"
                                 name="fullName"
                                 value={formData.fullName}
                                 onChange={handleChange}
                                 placeholder="John Doe"
                                 className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm md:text-base"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <motion.div
                              custom={1}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="email" className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                                 Email
                              </label>
                              <motion.input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder="example@email.com"
                                 className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm md:text-base"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                              <motion.div
                                 custom={2}
                                 variants={formFieldVariants}
                              >
                                 <label htmlFor="phone" className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                                    Phone Number
                                 </label>
                                 <motion.input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+92 000 0000000"
                                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm md:text-base"
                                    whileHover={inputHoverVariants.hover}
                                    whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                                 />
                              </motion.div>

                              <motion.div
                                 custom={3}
                                 variants={formFieldVariants}
                              >
                                 <label htmlFor="city" className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                                    City
                                 </label>
                                 <motion.input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Islamabad"
                                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm md:text-base"
                                    whileHover={inputHoverVariants.hover}
                                    whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                                 />
                              </motion.div>
                           </div>

                           <motion.div
                              custom={4}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="message" className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                                 Message
                              </label>
                              <motion.textarea
                                 id="message"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 rows={4}
                                 placeholder="What's on your mind"
                                 className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm md:text-base"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <motion.button
                              type="submit"
                              className="w-full px-4 py-2 md:px-6 md:py-3 bg-TwPrimaryPurple text-white font-medium rounded-lg hover:bg-TwPrimaryPurpleBgHover transition-colors text-sm md:text-base flex items-center justify-center"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap={{ scale: 0.98 }}
                              disabled={isSubmitting}
                           >
                              {isSubmitting ? (
                                 <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                 </>
                              ) : (
                                 "Submit"
                              )}
                           </motion.button>
                        </form>
                     </motion.div>
                  </div>
               </motion.div>
            </motion.div>
         </Container>
      </div>
   )
}

export default ContactForm