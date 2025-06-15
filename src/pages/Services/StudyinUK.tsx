import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import { Images } from '../../assets/images'
import ukImage from '../../assets/images/Services/europe/pexels-pixabay-460672.jpg'

// Import UK university images
import eastLondonImage from '../../assets/images/Services/uk/uniofeastlondon.jpg'
import salfordImage from '../../assets/images/Services/uk/uni of salford manchester.webp'
import hullImage from '../../assets/images/Services/uk/uni of hull.webp'
import sunderlandImage from '../../assets/images/Services/uk/uni of sunderland.png'
import ulsterImage from '../../assets/images/Services/uk/ulster uni.jpg'
import greenwichImage from '../../assets/images/Services/uk/uni of greenwich.jpg'
import gcuImage from '../../assets/images/Services/uk/glasgow caledonian uni.jpg'
import chesterImage from '../../assets/images/Services/uk/uni of chester.webp'
import canterburyImage from '../../assets/images/Services/uk/canterbury christ.jpg'
import bppImage from '../../assets/images/Services/uk/bpp.png'
import londonMetImage from '../../assets/images/Services/uk/london metropolitan.webp'
import aruImage from '../../assets/images/Services/uk/Anglia-Ruskin-University-International-Excellence-Scholarships-in-UK-2020.jpg'

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

const universities = [
  {
    id: 1,
    name: "University of East London",
    image: eastLondonImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Modern campus facilities",
        "Strong industry connections",
        "Diverse student community",
        "Located in London's business district"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £6,000-8,000/year",
        living: "≈ £1,000-1,200/month",
        total: "≈ £22,000-26,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 2,
    name: "University of Salford Manchester",
    image: salfordImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Industry-focused education",
        "Strong research reputation",
        "Modern campus facilities",
        "Located in Greater Manchester"
      ],
      fees: {
        tuition: "≈ £14,000-16,000/year",
        accommodation: "≈ £5,000-7,000/year",
        living: "≈ £800-1,000/month",
        total: "≈ £21,000-25,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 3,
    name: "University of Hull",
    image: hullImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Research-intensive university",
        "Historic campus",
        "Strong student support",
        "Located in East Yorkshire"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £5,000-7,000/year",
        living: "≈ £700-900/month",
        total: "≈ £20,000-24,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 4,
    name: "University of Sunderland",
    image: sunderlandImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Industry-focused education",
        "Modern facilities",
        "Strong graduate employability",
        "Located in North East England"
      ],
      fees: {
        tuition: "≈ £12,000-14,000/year",
        accommodation: "≈ £4,000-6,000/year",
        living: "≈ £600-800/month",
        total: "≈ £18,000-22,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 5,
    name: "Ulster University",
    image: ulsterImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Multiple campuses across Northern Ireland",
        "Strong research focus",
        "Industry partnerships",
        "Modern facilities"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £4,000-6,000/year",
        living: "≈ £600-800/month",
        total: "≈ £19,000-23,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 6,
    name: "University of Greenwich",
    image: greenwichImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Historic campus in London",
        "Strong business and maritime programs",
        "Modern facilities",
        "Excellent location"
      ],
      fees: {
        tuition: "≈ £14,000-16,000/year",
        accommodation: "≈ £6,000-8,000/year",
        living: "≈ £1,000-1,200/month",
        total: "≈ £23,000-27,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 7,
    name: "Glasgow Caledonian University (GCU)",
    image: gcuImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Located in Glasgow city center",
        "Strong focus on social responsibility",
        "Modern campus",
        "Industry connections"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £5,000-7,000/year",
        living: "≈ £700-900/month",
        total: "≈ £20,000-24,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 8,
    name: "University of Chester",
    image: chesterImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Historic university",
        "Multiple campuses",
        "Strong student support",
        "Industry-focused programs"
      ],
      fees: {
        tuition: "≈ £12,000-14,000/year",
        accommodation: "≈ £4,000-6,000/year",
        living: "≈ £600-800/month",
        total: "≈ £18,000-22,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 9,
    name: "Canterbury Christ Church University",
    image: canterburyImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Historic location in Canterbury",
        "Strong teaching reputation",
        "Modern facilities",
        "Close-knit community"
      ],
      fees: {
        tuition: "≈ £12,000-14,000/year",
        accommodation: "≈ £4,000-6,000/year",
        living: "≈ £600-800/month",
        total: "≈ £18,000-22,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 10,
    name: "BPP University",
    image: bppImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Specialized in professional education",
        "Multiple locations across UK",
        "Strong industry links",
        "Focus on practical skills"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £6,000-8,000/year",
        living: "≈ £800-1,000/month",
        total: "≈ £21,000-25,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 11,
    name: "London Metropolitan University",
    image: londonMetImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Located in central London",
        "Diverse student body",
        "Modern facilities",
        "Strong industry connections"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £6,000-8,000/year",
        living: "≈ £1,000-1,200/month",
        total: "≈ £22,000-26,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  },
  {
    id: 12,
    name: "Anglia Ruskin University (ARU)",
    image: aruImage,
    details: {
      accreditation: "Recognized by UK's Quality Assurance Agency (QAA)",
      duration: "3-4 years (depending on program)",
      language: "English-medium programs",
      features: [
        "Multiple campuses across East Anglia",
        "Strong research focus",
        "Modern facilities",
        "Industry partnerships"
      ],
      fees: {
        tuition: "≈ £13,000-15,000/year",
        accommodation: "≈ £5,000-7,000/year",
        living: "≈ £700-900/month",
        total: "≈ £20,000-24,000/year (including tuition and living expenses)"
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0 or equivalent)",
        "Personal statement",
        "Reference letters",
        "Passport copy",
        "Visa documentation"
      ]
    }
  }
]

const StudyinUK = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="Study in UK"
        description="Discover top-ranked universities in UK offering world-class education. Get expert guidance for your academic journey with our comprehensive support services."
        backgroundImage={ukImage}
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
              Study in UK
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Explore our partner universities in UK offering world-class education with English-taught programs.
            </motion.p>

            {/* Universities Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {universities.map((university, index) => (
                <motion.div
                  key={university.id}
                  className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedUniversity(university)}
                >
                  <div className="">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full object-fill h-[250px]"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-800 font-semibold text-center">{university.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Popup */}
            {selectedUniversity && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">{selectedUniversity.name}</h2>
                      <button
                        onClick={() => setSelectedUniversity(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Accreditation & Basic Info */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Program Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-600"><span className="font-medium">Accreditation:</span> {selectedUniversity.details.accreditation}</p>
                            <p className="text-gray-600"><span className="font-medium">Duration:</span> {selectedUniversity.details.duration}</p>
                            <p className="text-gray-600"><span className="font-medium">Language:</span> {selectedUniversity.details.language}</p>
                          </div>
                          {selectedUniversity.details.features && (
                            <div>
                              <p className="font-medium text-gray-700 mb-1">Features:</p>
                              <ul className="list-disc list-inside text-gray-600">
                                {selectedUniversity.details.features.map((feature: string, index: number) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Fee Structure */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Fee Structure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(selectedUniversity.details.fees).map(([key, value]: [string, any]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                              <span className="text-gray-800 font-medium">{typeof value === 'object' ? (
                                <div>
                                  {Object.entries(value).map(([subKey, subValue]: [string, any]) => (
                                    <div key={subKey} className="text-right">
                                      <span className="capitalize">{subKey}: </span>
                                      <span>{subValue}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Requirements</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {selectedUniversity.details.requirements.map((req: string, index: number) => (
                            <li key={index}>{req}</li>
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

export default StudyinUK 