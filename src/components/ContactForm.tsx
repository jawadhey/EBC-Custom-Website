//@ts-nocheck
import { useState } from "react"
import Breadcrumb from "./BreadCrumbs"
import Container from "./Container"
import { Images } from "../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Reusable Contact Form Component
const ContactForm = ({
   title,
   description,
   image,
   breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact Us" }],
}: any) => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
   })

   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
      // Add your form submission logic here
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
      visible: (custom) => ({
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
      <div className="py-8" ref={ref}>
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
                  className="bg-purple-50 rounded-3xl overflow-hidden"
                  variants={formContainerVariants}
               >
                  <div className="grid md:grid-cols-12 gap-0">
                     {/* Left Column - Image */}
                     <motion.div
                        className="lg:h-full col-span-full w-full h-[400px] flex justify-center mt-5 lg:mt-0 lg:col-span-4"
                        variants={imageVariants}
                     >
                        <motion.img
                           src={Images.Contact.ContactForm || "/classroom.jpg"}
                           alt="Contact"
                           className="w-full h-full max-w-[550px] object-cover"
                           whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        />
                     </motion.div>

                     {/* Right Column - Form */}
                     <motion.div
                        className="p-8 md:p-12 col-span-full lg:col-span-8"
                        variants={contentVariants}
                     >
                        <motion.h2
                           className="text-3xl font-bold text-gray-800 mb-4"
                           variants={contentVariants}
                        >
                           {title || "Lorem ipsum"}
                        </motion.h2>

                        <motion.p
                           className="text-gray-600 mb-8"
                           variants={contentVariants}
                        >
                           {description ||
                              "Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis tellus risus nullam risus. Eu amet feugiat enim nunc. Eget."}
                        </motion.p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                           <motion.div
                              custom={0}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="fullName" className="block text-gray-700 mb-2">
                                 Full Name
                              </label>
                              <motion.input
                                 type="text"
                                 id="fullName"
                                 name="fullName"
                                 value={formData.fullName}
                                 onChange={handleChange}
                                 placeholder="Jhon Doe"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <motion.div
                              custom={1}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="email" className="block text-gray-700 mb-2">
                                 Email
                              </label>
                              <motion.input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder="example@email.com"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <div className="grid grid-cols-2 gap-4">
                              <motion.div
                                 custom={2}
                                 variants={formFieldVariants}
                              >
                                 <label htmlFor="phone" className="block text-gray-700 mb-2">
                                    Phone Number
                                 </label>
                                 <motion.input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+92 000 0000000"
                                    className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                    whileHover={inputHoverVariants.hover}
                                    whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                                 />
                              </motion.div>

                              <motion.div
                                 custom={3}
                                 variants={formFieldVariants}
                              >
                                 <label htmlFor="city" className="block text-gray-700 mb-2">
                                    City
                                 </label>
                                 <motion.input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Islamabad"
                                    className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                    whileHover={inputHoverVariants.hover}
                                    whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                                 />
                              </motion.div>
                           </div>

                           <motion.div
                              custom={4}
                              variants={formFieldVariants}
                           >
                              <label htmlFor="message" className="block text-gray-700 mb-2">
                                 Message
                              </label>
                              <motion.textarea
                                 id="message"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 rows={4}
                                 placeholder="What's on your mind"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                                 whileHover={inputHoverVariants.hover}
                                 whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
                              />
                           </motion.div>

                           <motion.button
                              type="submit"
                              className="w-full px-6 py-3 bg-TwPrimaryPurple text-white font-medium rounded-lg hover:bg-TwPrimaryPurpleBgHover transition-colors"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap={{ scale: 0.98 }}
                           >
                              Submit
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