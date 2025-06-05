import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import { FaHospital, FaBook, FaFlask, FaGraduationCap, FaHome, FaRunning, FaGlobe, FaUsers } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import { Images } from '../../assets/images'
import europeImage from '../../assets/images/Services/pexels-diana-2910042-4445240.jpg'

// Import university images
import gomelImage from '../../assets/images/Services/mdineurope/gomel.jpg'
import vitebskImage from '../../assets/images/Services/mdineurope/vitebsk.jpg'
import belarusianImage from '../../assets/images/Services/mdineurope/Belarusian-State-Medical-University-1.jpg'
import nsuImage from '../../assets/images/Services/mdineurope/nakhchivan-state-university.jpg'
import azerbaijanImage from '../../assets/images/Services/mdineurope/Medical uni azerbaijan.jpg'
import georgiaImage from '../../assets/images/Services/mdineurope/university of Georgia.jpeg'
import alteImage from '../../assets/images/Services/mdineurope/alte.jpg'
import seuImage from '../../assets/images/Services/mdineurope/Study-medicine-in-Georgian-Natio-1.jpg'
import tbilisiImage from '../../assets/images/Services/mdineurope/tbilisi.jpg'
import tbilisiStateImage from '../../assets/images/Services/mdineurope/tbilisi.jpg'
import ibsuImage from '../../assets/images/Services/mdineurope/IBSU1.jpg'
import iuliuImage from '../../assets/images/Services/mdineurope/Iuliu-Hatieganu-University-of-Medicine.jpg'
import lucianBlagaImage from '../../assets/images/Services/mdineurope/Rectoratul_Universitatii__Lucian_Blaga__din_Sibiu.jpg'
import oradeaImage from '../../assets/images/Services/mdineurope/the-university-of-oradea.jpg'
import timisoaraImage from '../../assets/images/Services/mdineurope/Uni+Timisoara.jpg'
import vasileGoldisImage from '../../assets/images/Services/mdineurope/Medicine-at-Vasile-Goldis-Western-University.jpg'

import europeCover from '../../assets/images/Services/mdineurope/ruropeCover.jpg'

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

const universities = {
  belarus: [
    {
      id: 1,
      name: "GOMEL STATE MEDICAL UNIVERSITY",
      image: gomelImage,
      country: "Belarus",
      details: {
        features: [
          "Modern Medical Simulation Center",
          "Research Laboratories",
          "University Hospital",
          "Digital Library",
          "Student Dormitories",
          "Sports Complex",
          "International Relations Office",
          "Student Support Center"
        ]
      }
    },
    {
      id: 2,
      name: "VITEBSK STATE MEDICAL UNIVERSITY",
      image: vitebskImage,
      country: "Belarus",
      details: {
        features: [
          "Clinical Skills Center",
          "Research Facilities",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Office",
          "Student Services"
        ]
      }
    },
    {
      id: 3,
      name: "BELARUSIAN STATE MEDICAL UNIVERSITY",
      image: belarusianImage,
      country: "Belarus",
      details: {
        features: [
          "Medical Simulation Lab",
          "Research Centers",
          "University Hospital",
          "Central Library",
          "Student Housing",
          "Sports Center",
          "International Relations Department",
          "Career Development Office"
        ]
      }
    }
  ],
  azerbaijan: [
    {
      id: 4,
      name: "NAKHCHIVAN STATE UNIVERSITY",
      image: nsuImage,
      country: "Azerbaijan",
      details: {
        features: [
          "Clinical Training Center",
          "Research Laboratories",
          "University Hospital",
          "Digital Library",
          "Student Dormitories",
          "Sports Complex",
          "International Relations Office",
          "Student Support Services"
        ]
      }
    },
    {
      id: 5,
      name: "AZERBAIJAN MEDICAL UNIVERSITY",
      image: azerbaijanImage,
      country: "Azerbaijan",
      details: {
        features: [
          "Medical Simulation Center",
          "Research Facilities",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Office",
          "Career Guidance Center"
        ]
      }
    }
  ],
  georgia: [
    {
      id: 6,
      name: "UNIVERSITY OF GEORGIA",
      image: georgiaImage,
      country: "Georgia",
      details: {
        features: [
          "Clinical Skills Center",
          "Research Laboratories",
          "University Hospital",
          "Digital Library",
          "Student Dormitories",
          "Sports Complex",
          "International Relations Office",
          "Student Services Center"
        ]
      }
    },
    {
      id: 7,
      name: "ALTE UNIVERSITY",
      image: alteImage,
      country: "Georgia",
      details: {
        features: [
          "Medical Simulation Lab",
          "Research Centers",
          "University Hospital",
          "Central Library",
          "Student Housing",
          "Sports Center",
          "International Office",
          "Career Development Center"
        ]
      }
    },
    {
      id: 8,
      name: "SOUTHEASTERN EUROPEAN UNIVERSITY",
      image: seuImage,
      country: "Georgia",
      details: {
        features: [
          "Clinical Training Center",
          "Research Facilities",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Relations Office",
          "Student Support Services"
        ]
      }
    },
    {
      id: 9,
      name: "TBILISI MEDICAL ACADEMY",
      image: tbilisiImage,
      country: "Georgia",
      details: {
        features: [
          "Medical Simulation Center",
          "Research Laboratories",
          "University Hospital",
          "Digital Library",
          "Student Dormitories",
          "Sports Complex",
          "International Office",
          "Student Services"
        ]
      }
    },
    {
      id: 10,
      name: "TBILISI STATE MEDICAL UNIVERSITY",
      image: tbilisiStateImage,
      country: "Georgia",
      details: {
        features: [
          "Clinical Skills Center",
          "Research Centers",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Relations Office",
          "Career Guidance Center"
        ]
      }
    },
    {
      id: 11,
      name: "INTERNATIONAL BLACK SEA UNIVERSITY",
      image: ibsuImage,
      country: "Georgia",
      details: {
        features: [
          "Medical Simulation Lab",
          "Research Facilities",
          "University Hospital",
          "Central Library",
          "Student Housing",
          "Sports Center",
          "International Office",
          "Student Support Services"
        ]
      }
    }
  ],
  romania: [
    {
      id: 12,
      name: "IULIU HATIEGANU UNIVERSITY OF MEDICINE AND PHARMACY",
      image: iuliuImage,
      country: "Romania",
      details: {
        features: [
          "Center for Simulation in Medical Education",
          "Research Center for Advanced Medicine",
          "University Hospital",
          "Central Library with Digital Resources",
          "Student Dormitories",
          "Sports Complex",
          "International Relations Office",
          "Career Development Center"
        ]
      }
    },
    {
      id: 13,
      name: "VICTOR BABES UNIVERSITY OF MEDICINE AND PHARMACY",
      image: timisoaraImage,
      country: "Romania",
      details: {
        features: [
          "Clinical Skills Center",
          "Research Laboratories",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Relations Office",
          "Student Counseling Center"
        ]
      }
    },
    {
      id: 14,
      name: "LUCIAN BLAGA UNIVERSITY",
      image: lucianBlagaImage,
      country: "Romania",
      details: {
        features: [
          "Medical Simulation Center",
          "Research Laboratories",
          "University Hospital",
          "Central Library",
          "Student Housing",
          "Sports Center",
          "International Office",
          "Student Services Center"
        ]
      }
    },
    {
      id: 15,
      name: "UNIVERSITY OF ORADEA",
      image: oradeaImage,
      country: "Romania",
      details: {
        features: [
          "Clinical Training Center",
          "Research Facilities",
          "University Hospital",
          "Digital Library",
          "Student Dormitories",
          "Sports Complex",
          "International Relations Office",
          "Career Guidance Center"
        ]
      }
    },
    {
      id: 16,
      name: "VASILE GOLDIS WESTERN UNIVERSITY",
      image: vasileGoldisImage,
      country: "Romania",
      details: {
        features: [
          "Medical Simulation Lab",
          "Research Centers",
          "University Hospital",
          "Medical Library",
          "Student Accommodation",
          "Sports Facilities",
          "International Office",
          "Student Support Services"
        ]
      }
    }
  ]
}

const getFacilityIcon = (facility: string) => {
  const lowerFacility = facility.toLowerCase()
  if (lowerFacility.includes('hospital') || lowerFacility.includes('medical')) return <FaHospital className="text-blue-500" />
  if (lowerFacility.includes('library')) return <FaBook className="text-green-500" />
  if (lowerFacility.includes('research') || lowerFacility.includes('lab')) return <FaFlask className="text-purple-500" />
  if (lowerFacility.includes('simulation') || lowerFacility.includes('training')) return <FaGraduationCap className="text-yellow-500" />
  if (lowerFacility.includes('dormitory') || lowerFacility.includes('housing') || lowerFacility.includes('accommodation')) return <FaHome className="text-red-500" />
  if (lowerFacility.includes('sport')) return <FaRunning className="text-orange-500" />
  if (lowerFacility.includes('international')) return <FaGlobe className="text-indigo-500" />
  return <FaUsers className="text-gray-500" />
}

const MDinEurope = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const allUniversities = [
    ...universities.belarus,
    ...universities.azerbaijan,
    ...universities.georgia,
    ...universities.romania
  ]

  return (
    <div>
      <ServicesHeroSection
        title="MD in Europe"
        description="Explore prestigious medical universities across Europe offering world-class MD programs. Get expert guidance for your medical education journey with our comprehensive support services."
        backgroundImage={europeCover}
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
              MD in Europe
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Explore our partner universities across Europe offering world-class medical education with English-taught programs.
            </motion.p>

            {/* Countries Section */}
            {Object.entries(universities).map(([country, countryUniversities]) => (
              <div key={country} className="mb-12">
                <h3 className="text-xl font-bold text-gray-700 mb-6 capitalize">{country}</h3>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                  variants={containerVariants}
                >
                  {countryUniversities.map((university, index) => (
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
              </div>
            ))}

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
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-2xl font-bold text-gray-800">{selectedUniversity.name}</h2>
                      <button
                        onClick={() => setSelectedUniversity(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Facilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedUniversity.details.features.map((feature: string, index: number) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className="mr-4 text-2xl">
                                {getFacilityIcon(feature)}
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
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

export default MDinEurope 