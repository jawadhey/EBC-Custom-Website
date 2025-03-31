//@ts-nocheck
import { useState } from "react"
import Breadcrumb from "./BreadCrumbs"
import Container from "./Container"
import { Images } from "../assets/images"

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

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
      // Add your form submission logic here
   }

   return (
      <div className="py-8  ">
         <Container>

            <div className="  mx-auto">
               {/* Breadcrumb */}
               <Breadcrumb items={breadcrumbItems} />

               {/* Main Content */}
               <div className="bg-purple-50 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-12 gap-0">
                     {/* Left Column - Image */}
                     <div className="lg:h-full col-span-full w-full h-[400px] flex justify-center mt-5 lg:mt-0 lg:col-span-4">
                        <img src={Images.Contact.ContactForm || "/classroom.jpg"} alt="Contact" className="w-full h-full max-w-[550px] object-cover" />
                     </div>

                     {/* Right Column - Form */}
                     <div className="p-8 md:p-12 col-span-full lg:col-span-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title || "Lorem ipsum"}</h2>

                        <p className="text-gray-600 mb-8">
                           {description ||
                              "Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis tellus risus nullam risus. Eu amet feugiat enim nunc. Eget."}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                              <label htmlFor="fullName" className="block text-gray-700 mb-2">
                                 Full Name
                              </label>
                              <input
                                 type="text"
                                 id="fullName"
                                 name="fullName"
                                 value={formData.fullName}
                                 onChange={handleChange}
                                 placeholder="Jhon Doe"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                              />
                           </div>

                           <div>
                              <label htmlFor="email" className="block text-gray-700 mb-2">
                                 Email
                              </label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder="example@email.com"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                              />
                           </div>

                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <label htmlFor="phone" className="block text-gray-700 mb-2">
                                    Phone Number
                                 </label>
                                 <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+92 000 0000000"
                                    className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 />
                              </div>

                              <div>
                                 <label htmlFor="city" className="block text-gray-700 mb-2">
                                    City
                                 </label>
                                 <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Islamabad"
                                    className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 />
                              </div>
                           </div>

                           <div>
                              <label htmlFor="message" className="block text-gray-700 mb-2">
                                 Message
                              </label>
                              <textarea
                                 id="message"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 rows={4}
                                 placeholder="What's on your mind"
                                 className="w-full px-4 py-3 rounded-lg bg-purple-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
                                 required
                              ></textarea>
                           </div>

                           <button
                              type="submit"
                              className="w-full px-6 py-3 bg-TwPrimaryPurple text-white font-medium rounded-lg hover:bg-TwPrimaryPurpleBgHover transition-colors"
                           >
                              Submit
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         </Container>

      </div>
   )
}

export default ContactForm

