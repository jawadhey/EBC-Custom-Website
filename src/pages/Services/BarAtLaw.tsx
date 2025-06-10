import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import ukImage from '../../assets/images/Services/baratlaw/pexels-karolina-grabowska-7876088.jpg'

// Import university images from baratlaw folder
import cityUniversityImage from '../../assets/images/Services/baratlaw/City University of London.jpg'
import northumbriaImage from '../../assets/images/Services/baratlaw/about-us-northumbria-university-pathway.jpg'
import manchesterMetImage from '../../assets/images/Services/baratlaw/manchester-metropolitan-university-01-copy.jpg'
import bppImage from '../../assets/images/Services/baratlaw/Cover-BPP-University.jpg'
import cardiffImage from '../../assets/images/Services/baratlaw/Main building_2024.jpg'
import universityOfLawImage from '../../assets/images/Services/baratlaw/uni of law.jpeg'
import nottinghamTrentImage from '../../assets/images/Services/baratlaw/nottingham.jpg'

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
    name: "CITY ST GEORGE’S, UNIVERSITY OF LONDON",
    image: cityUniversityImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "London, UK",
      features: [
        "Merged with St George’s University in 2024",
        "Over 300 career‑focused degrees",
        "Strong professional schools (Bayes Business, City Law, Health Sciences)"
      ],
      programs: {
        undergraduate: [
          /* Course list depends on department – retains original examples */
          "Business Management",
          "Computer Science",
          "Engineering",
          "Law",
          "Psychology"
        ],
        postgraduate: [
          "MBA",
          "MSc Data Science",
          "MSc Finance",
          "LLM",
          "MA International Relations"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0‑7.0)",
        "Personal statement",
        "Reference letters",
        "Portfolio (for creative courses)",
        "Interview (for some courses)"
      ],
      fees: {
        undergraduate: "UK: £9,535/year (2025/26 cap); International: varies by course",
        postgraduate: "International: varies by course (~£15,000–£35,000)",
        living: "£12,000 - £15,000 per year (London)"
      }
    }
  },
  {
    id: 2,
    name: "NORTHUMBRIA UNIVERSITY",
    image: northumbriaImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Newcastle, UK",
      features: [
        "Modern campus facilities",
        "Strong industry links",
        "Excellent student support"
      ],
      programs: {
        undergraduate: [
          "Business",
          "Engineering",
          "Law",
          "Psychology",
          "Design"
        ],
        postgraduate: [
          "MBA",
          "MSc Computing",
          "MA Design",
          "LLM",
          "MSc Psychology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0‑6.5)",
        "Personal statement",
        "Reference letters",
        "Portfolio (for design courses)"
      ],
      fees: {
        undergraduate: "£19,350–£20,950/year (2025/26 International UG)",
        postgraduate: "£19,350–£22,350/year (International Masters)",
        living: "£8,000–£10,000 per year (Newcastle)",
        deposit: "£5,500 international tuition deposit"
      }
    }
  },
  {
    id: 3,
    name: "MANCHESTER METROPOLITAN UNIVERSITY",
    image: manchesterMetImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Manchester, UK",
      features: [
        "Industry-focused courses",
        "Modern facilities",
        "Strong research output"
      ],
      programs: {
        undergraduate: [
          "Business",
          "Engineering",
          "Law",
          "Psychology",
          "Art & Design"
        ],
        postgraduate: [
          "MBA",
          "MSc Data Science",
          "MA Education",
          "LLM",
          "MSc Psychology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0‑6.5)",
        "Personal statement",
        "Reference letters",
        "Portfolio (for art courses)"
      ],
      fees: {
        undergraduate: "£20,000–21,500/year (2025/26 International UG)﻿",
        postgraduate: "Varies by course; typically in same band",
        living: "£8,000–£10,000/year",
        abroadYear: "£1,430–1,850/year (study abroad placement)"
      }
    }
  },
  {
    id: 4,
    name: "BPP UNIVERSITY",
    image: bppImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Multiple locations across UK",
      features: [
        "Professional focus",
        "Industry connections",
        "Flexible study options"
      ],
      programs: {
        undergraduate: [
          "Law",
          "Business",
          "Accounting",
          "Psychology",
          "Healthcare"
        ],
        postgraduate: [
          "LLM",
          "MBA",
          "MSc Finance",
          "MA Education",
          "MSc Psychology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0‑6.5)",
        "Personal statement",
        "Reference letters",
        "Work experience (for some courses)"
      ],
      fees: {
        undergraduate: "£11,000–33,000/year (varies by program)",
        postgraduate: "£12,500–20,950/year",
        living: "£8,000–£12,000/year",
        deposit: "As per instalment schedule"
      }
    }
  },
  {
    id: 5,
    name: "CARDIFF UNIVERSITY",
    image: cardiffImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Cardiff, Wales",
      features: [
        "Russell Group member",
        "Research‑intensive",
        "Excellent student satisfaction"
      ],
      programs: {
        undergraduate: [
          "Business",
          "Engineering",
          "Law",
          "Medicine",
          "Psychology"
        ],
        postgraduate: [
          "MBA",
          "MSc Computer Science",
          "MA Journalism",
          "LLM",
          "MSc Psychology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.5‑7.0)",
        "Personal statement",
        "Reference letters",
        "Interview (for some courses)"
      ],
      fees: {
        undergraduate: "£18,700–25,500/year (International UG)",
        postgraduate: "£19,450–30,200/year (International Masters)",
        living: "£8,000–10,000/year"
      }
    }
  },
  {
    id: 6,
    name: "UNIVERSITY OF LAW",
    image: universityOfLawImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Multiple locations across UK",
      features: [
        "Specialized in law",
        "Professional focus",
        "Industry connections"
      ],
      programs: {
        undergraduate: [
          "LLB Law",
          "Business Law",
          "Criminology",
          "Politics",
          "International Relations"
        ],
        postgraduate: [
          "LLM",
          "LPC",
          "BPTC",
          "MA Law",
          "MSc Legal Technology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.5‑7.0)",
        "Personal statement",
        "Reference letters",
        "Interview (for some courses)"
      ],
      fees: {
        undergraduate: "£16,700/year (Non‑London), £17,550/year (London) – with bursaries in final year",
        postgraduate: "£14,750–20,350/year (International Masters)",
        living: "£8,000–12,000/year"
      }
    }
  },
  {
    id: 7,
    name: "NOTTINGHAM TRENT UNIVERSITY",
    image: nottinghamTrentImage,
    details: {
      accreditation: "QAA, UK Government recognized",
      location: "Nottingham, UK",
      features: [
        "Modern facilities",
        "Industry‑focused",
        "Strong graduate employability"
      ],
      programs: {
        undergraduate: [
          "Business",
          "Law",
          "Psychology",
          "Art & Design",
          "Engineering"
        ],
        postgraduate: [
          "LLM",
          "MBA",
          "MSc Computing",
          "MA Education",
          "MSc Psychology"
        ]
      },
      requirements: [
        "Academic transcripts",
        "English language proficiency (IELTS 6.0‑6.5)",
        "Personal statement",
        "Reference letters",
        "Portfolio (for art courses)"
      ],
      fees: {
        undergraduate: "£17,150–17,900/year (International UG)",
        postgraduate: "Varies by subject in similar range",
        living: "£8,000–10,000/year",
        abroadYear: "£1,385–1,850/year",
        advancePayment: "£6,000 minimum deposit"
      }
    }
  },
]

const BarAtLaw = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="Bar at Law"
        description="Discover top-ranked law schools in the UK offering world-class legal education. Get expert guidance for your legal career journey with our comprehensive support services."
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
              Bar at Law
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Explore our partner universities in the UK offering world-class legal education and bar qualification programs.
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
                      {/* Basic Info */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">University Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-600"><span className="font-medium">Accreditation:</span> {selectedUniversity.details.accreditation}</p>
                            <p className="text-gray-600"><span className="font-medium">Location:</span> {selectedUniversity.details.location}</p>
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

                      {/* Programs */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Programs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-gray-700 mb-1">Undergraduate Programs:</p>
                            <ul className="list-disc list-inside text-gray-600">
                              {selectedUniversity.details.programs.undergraduate.map((program: string, index: number) => (
                                <li key={index}>{program}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700 mb-1">Postgraduate Programs:</p>
                            <ul className="list-disc list-inside text-gray-600">
                              {selectedUniversity.details.programs.postgraduate.map((program: string, index: number) => (
                                <li key={index}>{program}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Fee Structure */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Fee Structure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(selectedUniversity.details.fees).map(([key, value]: [string, any]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                              <span className="text-gray-800 font-medium">{value}</span>
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

export default BarAtLaw 