"use client"

import { useState } from "react"
import { FaPlus, FaTimes } from "react-icons/fa"

const FaqSection = () => {
   // State to track which FAQs are open
   const [openAboutFaqs, setOpenAboutFaqs] = useState([0])
   const [openProgramsFaqs, setOpenProgramsFaqs] = useState([0])

   // FAQ data
   const aboutFaqs = [
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
   ]

   const programsFaqs = [
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
   ]

   // Toggle FAQ open/closed
   const toggleAboutFaq = (index: any) => {
      if (openAboutFaqs.includes(index)) {
         setOpenAboutFaqs(openAboutFaqs.filter((item) => item !== index))
      } else {
         setOpenAboutFaqs([...openAboutFaqs, index])
      }
   }

   const toggleProgramsFaq = (index: any) => {
      if (openProgramsFaqs.includes(index)) {
         setOpenProgramsFaqs(openProgramsFaqs.filter((item) => item !== index))
      } else {
         setOpenProgramsFaqs([...openProgramsFaqs, index])
      }
   }

   return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
               <div className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full inline-block">
                  Clearing out your confusions
               </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Frequently Asked Questions</h2>

            {/* Subheading */}
            <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
               Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
               tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
            </p>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
               {/* About Us FAQs */}
               <div className="bg-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">About Us</h3>
                  <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. At est phasellus feugiat.</p>

                  <div className="space-y-4">
                     {aboutFaqs.map((faq, index) => (
                        <div key={index} className="border-b border-purple-100 pb-4 last:border-0">
                           <div
                              className="flex justify-between items-start cursor-pointer"
                              onClick={() => toggleAboutFaq(index)}
                           >
                              <h4 className="text-gray-700 font-medium pr-8">{faq.question}</h4>
                              <button className="bg-purple-100 rounded-full p-2 flex-shrink-0 hover:bg-purple-200 transition-colors">
                                 {openAboutFaqs.includes(index) ? (
                                    <FaTimes className="text-purple-600 text-sm" />
                                 ) : (
                                    <FaPlus className="text-purple-600 text-sm" />
                                 )}
                              </button>
                           </div>

                           {openAboutFaqs.includes(index) && <div className="mt-3 text-gray-600">{faq.answer}</div>}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Our Programs FAQs */}
               <div className="bg-amber-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Programs</h3>
                  <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. At est phasellus feugiat.</p>

                  <div className="space-y-4">
                     {programsFaqs.map((faq, index) => (
                        <div key={index} className="border-b border-amber-100 pb-4 last:border-0">
                           <div
                              className="flex justify-between items-start cursor-pointer"
                              onClick={() => toggleProgramsFaq(index)}
                           >
                              <h4 className="text-gray-700 font-medium pr-8">{faq.question}</h4>
                              <button className="bg-amber-100 rounded-full p-2 flex-shrink-0 hover:bg-amber-200 transition-colors">
                                 {openProgramsFaqs.includes(index) ? (
                                    <FaTimes className="text-amber-600 text-sm" />
                                 ) : (
                                    <FaPlus className="text-amber-600 text-sm" />
                                 )}
                              </button>
                           </div>

                           {openProgramsFaqs.includes(index) && <div className="mt-3 text-gray-600">{faq.answer}</div>}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqSection

