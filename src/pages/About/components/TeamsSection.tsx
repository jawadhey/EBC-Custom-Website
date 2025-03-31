"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const TeamSection = () => {
   // Team categories
   const categories = [
      { id: "founders", name: "Founders" },
      { id: "executive", name: "Executive Members" },
      { id: "directors", name: "Lorem ipsum" },
      { id: "managers", name: "Lorem ipsum" },
      { id: "staff", name: "Lorem ipsum" },
   ]

   // Team members data
   const teamMembers: any = {
      founders: [
         {
            id: 1,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-1.jpg",
         },
         {
            id: 2,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-2.jpg",
         },
         {
            id: 3,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-3.jpg",
         },
         {
            id: 4,
            name: "Sarah Anderson",
            title: "Founder",
            image: "/team-member-4.jpg",
         },
      ],
      executive: [
         {
            id: 5,
            name: "John Smith",
            title: "CEO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 6,
            name: "Emily Johnson",
            title: "CTO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 7,
            name: "Michael Brown",
            title: "CFO",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 8,
            name: "Jessica Williams",
            title: "COO",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      directors: [
         {
            id: 9,
            name: "Robert Davis",
            title: "Director of Marketing",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 10,
            name: "Lisa Miller",
            title: "Director of Operations",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      managers: [
         {
            id: 11,
            name: "David Wilson",
            title: "Project Manager",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 12,
            name: "Amanda Taylor",
            title: "HR Manager",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
      staff: [
         {
            id: 13,
            name: "James Anderson",
            title: "Senior Developer",
            image: "/placeholder.svg?height=200&width=200",
         },
         {
            id: 14,
            name: "Sophia Martinez",
            title: "Marketing Specialist",
            image: "/placeholder.svg?height=200&width=200",
         },
      ],
   }

   // State for active category
   const [activeCategory, setActiveCategory] = useState("founders")

   return (
      <div className="py-16   bg-white">
         <Container>

            <div className="  mx-auto">
               {/* Top Badge */}
               <div className="flex justify-center mb-6">
                  <div className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block">Get to know us better</div>
               </div>

               {/* Heading */}
               <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Our Executive Team</h2>

               {/* Subheading */}
               <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </p>

               {/* Category Tabs */}
               <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => (
                     <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                           ? "bg-TwPrimaryPurple text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                           }`}
                     >
                        {category.name}
                     </button>
                  ))}
               </div>

               {/* Team Members Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly gap-8 mb-12">
                  {teamMembers[activeCategory].map((member: any) => (
                     <div key={member.id} className="flex flex-col items-center">
                        {/* Image with corner accents */}
                        <div className="relative mb-4">
                           <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400"></div>
                           <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-400"></div>
                           <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400"></div>
                           <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400"></div>
                           <img
                              src={Images.About.Founder || "/placeholder.svg"}
                              alt={member.name}
                              className="w-48 h-48 rounded-full object-cover"
                           />
                        </div>

                        <h3 className="text-xl font-semibold text-TwPrimaryPurple mb-1">{member.name}</h3>
                        <p className="text-gray-500">{member.title}</p>
                     </div>
                  ))}
               </div>

               {/* View All Button */}
               <div className="flex justify-center">
                  <a
                     href="#"
                     className="inline-flex items-center bg-purple-100 text-TwPrimaryPurple px-6 py-3 rounded-full hover:bg-purple-200 transition-colors"
                  >
                     View Whole Team <FaArrowRight className="ml-2" />
                  </a>
               </div>
            </div>

         </Container>

      </div>
   )
}

export default TeamSection

