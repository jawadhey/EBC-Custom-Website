"use client"

import { useState } from "react"
import { FaPlus, FaChevronUp } from "react-icons/fa"
import Container from "../../../components/Container"

const FaqSection = () => {
   // FAQ data
   const faqs = [
      {
         id: 1,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         id: 2,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         id: 3,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         id: 4,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         id: 5,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
      {
         id: 6,
         question: "Lorem ipsum dolor sit amet consectetur. Pellentesque orci potenti non sit netus.",
         answer:
            "Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna lectus justo lectus quis duis odio montes. Lacus.",
      },
   ]

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

   return (
      <div className="py-16 bg-white">
         <Container>

            <div className="mx-auto">
               {/* Top Badge */}
               <div className="flex justify-center mb-6">
                  <div className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full inline-block">
                     Clearing out your confusions
                  </div>
               </div>

               {/* Heading */}
               <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Everything You Need to Know</h2>

               {/* Subheading */}
               <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </p>

               {/* FAQ Grid */}
               <div className="grid md:grid-cols-2 gap-6">
                  {faqs.map((faq) => (
                     <div key={faq.id} className="bg-white rounded-lg shadow-sm border h-fit border-gray-100 overflow-hidden">
                        <div className="flex justify-between items-start p-6 cursor-pointer" onClick={() => toggleFaq(faq.id)}>
                           <h3 className="text-gray-800 font-medium pr-8">{faq.question}</h3>
                           <button className="bg-purple-100 rounded-full p-2 flex-shrink-0 hover:bg-purple-200 transition-colors">
                              {openFaqs.includes(faq.id) ? (
                                 <FaChevronUp className="text-purple-600 text-sm" />
                              ) : (
                                 <FaPlus className="text-purple-600 text-sm" />
                              )}
                           </button>
                        </div>

                        {openFaqs.includes(faq.id) && <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>}
                     </div>
                  ))}
               </div>
            </div>

         </Container>

      </div>
   )
}

export default FaqSection

