import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import { Images } from '../../assets/images'
import europeImage from '../../assets/images/Services/europe/pexels-pixabay-460672.jpg'

// Import country images
import hungaryImage from '../../assets/images/Services/europe/hungary-in-pictures-beautiful-places-to-photograph-hungarian-parliament-building.jpg'
import irelandImage from '../../assets/images/Services/europe/ireland.jpg'
import AzerbaijanImage from '../../assets/images/Services/europe/Azerbaijan-MAIN-jpg-1536x884.webp'
import georgiaImage from '../../assets/images/Services/europe/georgia.webp'

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

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const countries = [
  {
    id: 1,
    name: "HUNGARY",
    image: hungaryImage,
    description: "Hungary is home to renowned universities with modern and historic campuses. Because of its acknowledged expertise in Engineering, IT, Computer Science, Business management and General Medicine, Hungary is considered the most prioritized destination for studying in Europe.",
    universities: [
      "Wekerle Business School"
    ]
  },
  {
    id: 2,
    name: "IRELAND",
    image: irelandImage,
    description: "Irish Universities are some of the top research universities in the world. You can select from various programs in this amazing country which hosts about 34000 international students from all over the world.",
    universities: [
      "University College Cork",
      "University College Dublin",
      "Trinity College Dublin",
      "National University of Ireland",
      "City University Dublin",
      "Maynooth University",
      "Griffith College Dublin",
      "National College of Ireland",
      "Cork Institute of Technology",
      "Letterkenny Institute of Technology"
    ]
  },
  {
    id: 3,
    name: "AZERBAIJAN",
    image: AzerbaijanImage,
    description: "Azerbaijan offers high-quality education with modern facilities and a rich cultural experience. The country's universities are known for their strong programs in Medicine, Engineering, and Business, with many offering English-taught programs.",
    universities: [
      "Baku State University",
    ]
  },
  {
    id: 4,
    name: "GEORGIA",
    image: georgiaImage,
    description: "Georgia is an increasingly popular destination for international students, especially for medical and engineering programs. Georgian universities offer affordable tuition, English-taught programs, and a multicultural environment in the heart of Europe-Asia.",
    universities: [
      "Tbilisi State Medical University",
      "Ivane Javakhishvili Tbilisi State University",
      "European University",
      "Caucasus International University",
      "Georgian National University SEU",
      "Batumi Shota Rustaveli State University"
    ]
  }
]

const StudyInEurope = () => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="Study in Europe"
        description="Discover top-ranked universities in Europe offering world-class education. Get expert guidance for your academic journey with our comprehensive support services."
        backgroundImage={europeImage}
      />

      <div className="py-8 md:py-16 bg-white overflow-hidden" ref={ref}>
        <Container>
          <motion.div
            className="mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
              variants={containerVariants}
            >
              Study in Europe
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Explore our partner universities in Europe offering world-class education with English-taught programs.
            </motion.p>

            {/* Countries Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full object-fill h-[300px]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-800 font-semibold text-center text-xl">{country.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Popup */}
            {selectedCountry && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">{selectedCountry.name}</h2>
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
                        <p className="text-gray-600">{selectedCountry.description}</p>
                      </div>

                      {/* Universities */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Partner Universities</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {selectedCountry.universities.map((university: string, index: number) => (
                            <li key={index}>{university}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </Container>
      </div>
    </div>
  )
}

export default StudyInEurope 