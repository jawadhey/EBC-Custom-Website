"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  // Program categories
  const categories = [
    { id: "all", name: "All" },
    { id: "exclusive", name: "Our Exclusive Universities" },
    { id: "medical", name: "Medical" },
    { id: "engineering", name: "Engineering" },
    { id: "other", name: "other" },
  ]

  // Program data
  const allPrograms = [
    {
      id: 1,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["exclusive", "engineering"],
    },
    {
      id: 2,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["", "medical"],
    },
    {
      id: 3,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["other", "medical"],
    },
    {
      id: 4,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["", "medical"],
    },
    {
      id: 5,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["exclusive", "medical"],
    },
    {
      id: 6,
      title: "Wuhan University of Medical Sciences",
      description: "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue.",
      image: "/university-building.jpg",
      categories: ["", "medical"],
    },
  ]

  // Filter programs based on active tab
  const filteredPrograms =
    activeTab === "all" ? allPrograms : allPrograms.filter((program) => program.categories.includes(activeTab))

  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Programs We Offer</h2>

          {/* Subheading */}
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
            tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === category.id ? "bg-TwPrimaryPurple text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="border rounded-xl overflow-hidden">
                <img src={Images.ProgramsImage || "/placeholder.svg"} alt={program.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-TwPrimaryPurple font-semibold text-lg mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a
                    href="#"
                    className="text-yellow-500 font-medium flex items-center hover:text-yellow-600 transition-colors"
                  >
                    View More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

    </div>
  )
}

export default ProgramsSection

