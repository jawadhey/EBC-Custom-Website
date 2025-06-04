import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import { Images } from '../../assets/images'
import chinaImage from '../../assets/images/Services/pexels-diana-2910042-4445240.jpg'

// Import university images
import shiheziImage from '../../assets/images/Services/china/Shihezi-University-1000x450.jpg'
import ningxiaImage from '../../assets/images/Services/china/ningxia.jpg'
import zhengzhouImage from '../../assets/images/Services/china/zhengzhou.jpg'
import nanjingImage from '../../assets/images/Services/china/nanjing.jpg'
import jiangsuImage from '../../assets/images/Services/china/juangsu.jpg'
import southwestImage from '../../assets/images/Services/china/southwest-Medical-Universit.jpg'
import kunmingImage from '../../assets/images/Services/china/kunming-medical-university.jpg'
import jilinImage from '../../assets/images/Services/china/jilin.png'

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
    name: "SHIHEZI UNIVERSITY",
    image: shiheziImage,
    details: {
      accreditation: "MOE, PMDC listed",
      duration: "06 years",
      language: "English taught program",
      features: ["No HSK 3-4 in the first year", "41000 international students enrolled"],
      fees: {
        tuition: "30000 RMB/year",
        hostel: "5000 RMB/year",
        management: "13500 RMB (once)",
        other: "1800 RMB (Insurance, visa extension, medical checkup, bedding etc)",
        total: "50300 RMB (First year total)"
      },
      requirements: [
        "SSC+ HSSC Mark sheet",
        "Passport First page in Scan",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Filled application Form",
        "Applicant Assessment Form",
        "Signed Fee Package in Scan"
      ]
    }
  },
  {
    id: 2,
    name: "NINGXIA MEDICAL UNIVERSITY",
    image: ningxiaImage,
    details: {
      accreditation: "MOE, PMDC, and ECFMG approved",
      duration: "6 years",
      language: "English taught program",
      features: ["No HSK 3-4 in first year", "Located in Muslim province", "Economical living"],
      fees: {
        tuition: "29800 RMB/year",
        hostel: "5000 RMB/year",
        application: "1000 RMB (once)",
        registration: "400 RMB (once)",
        visa: "400 RMB/year",
        medical: "500 RMB (once)",
        insurance: "200 RMB/year",
        management: "13000 RMB (once)",
        internship: "14900 RMB (half of tuition fee)"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  },
  {
    id: 3,
    name: "ZHENGZHOU UNIVERSITY",
    image: zhengzhouImage,
    details: {
      accreditation: "MOE, PMDC, and ECFMG approved",
      duration: "6 years",
      language: "English taught program",
      features: ["No HSK 3-4 in first year"],
      fees: {
        application: "1000 RMB (one time)",
        management: "13500 RMB (one time)",
        registration: "400 RMB per year",
        tuition: "35000 RMB per year",
        hostel: "5500 RMB per year",
        visa: "400 RMB per year",
        medical: "550 RMB per year",
        insurance: "800 RMB per year"
      },
      requirements: [
        "Application Form",
        "CV of Student",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  },
  {
    id: 4,
    name: "NANJING MEDICAL UNIVERSITY",
    image: nanjingImage,
    details: {
      accreditation: "WHO, WFME, WCAME, and ECFMG, PMDC recognized",
      duration: "6 years",
      language: "English taught program",
      fees: {
        application: "1000 RMB (one time)",
        registration: "800 RMB one-time",
        medical: "500 RMB one time",
        tuition: "34000 RMB per year",
        hostel: "6000 RMB per year",
        visa: "800 RMB per year",
        insurance: "800 RMB per year",
        management: "12000 RMB one-time"
      },
      requirements: [
        "Application Form",
        "Junior High School (grade 10)",
        "Senior High School/HSSC/A-levels/WAEC (grade 12)",
        "Passport First and 2nd page",
        "National Identity Card (Student and Parents)",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Bank/Financial Statement (with a closing balance of $6000)"
      ]
    }
  },
  {
    id: 5,
    name: "JIANGSU UNIVERSITY",
    image: jiangsuImage,
    details: {
      accreditation: "WHO, PMDC, WFME, ECFMG, and WCAME China",
      duration: "6 years",
      language: "English taught program",
      features: ["Min 70% marks req in FSC"],
      fees: {
        application: "1000 RMB (one time)",
        registration: "200 RMB (one time)",
        management: "13000 RMB (one time)",
        tuition: "34000 RMB/year",
        hostel: "6000 RMB/year",
        visa: "400 RMB/year",
        medical: "500 RMB/year",
        insurance: "800 RMB/year"
      },
      requirements: [
        "Application Form",
        "English Proficiency Certificate",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "Foreigner Physical Examination Form",
        "Non-criminal Record Certificate",
        "One Digital photo with a white background",
        "Family financial statement"
      ]
    }
  },
  {
    id: 6,
    name: "SOUTHWEST MEDICAL UNIVERSITY",
    image: southwestImage,
    details: {
      accreditation: "PMDC, ECFMG, WFME, WCAME and WHO approved",
      duration: "6 years",
      language: "English taught program",
      features: ["No HSK 4 in first year"],
      fees: {
        application: "1000 RMB one time",
        registration: "400 RMB per year",
        tuition: "31000 RMB per year",
        hostel: "2000 RMB per year dual sharing",
        visa: "400 RMB per year",
        medical: "500 RMB per year",
        insurance: "800 RMB per year"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  },
  {
    id: 7,
    name: "KUNMING MEDICAL UNIVERSITY",
    image: kunmingImage,
    details: {
      accreditation: "PMDC, ECFMG, WFME, WCAME and WHO approved",
      duration: "6 years",
      language: "English taught program",
      fees: {
        application: "1000 RMB one time",
        registration: "500 RMB one-time",
        tuition: {
          english: "35000 RMB per year",
          chinese: "24000 RMB per year"
        },
        hostel: "5000 RMB per year dual sharing",
        visa: "400 RMB per year",
        medical: "500 RMB per year",
        insurance: "800 RMB per year"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  },
  {
    id: 8,
    name: "JILIN UNIVERSITY",
    image: jilinImage,
    details: {
      accreditation: "PMDC, ECFMG, WFME, WCAME and WHO approved",
      duration: "6 years",
      language: "English taught program",
      features: ["No HSK 4 in the first year"],
      fees: {
        application: "1000 RMB (One time)",
        registration: "600 RMB (One time)",
        tuition: "33,000 RMB/year",
        hostel: "6000 RMB/year",
        visa: "800 RMB/year",
        medical: "750 RMB/year",
        insurance: "800 RMB/year"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A-Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "IELTS or TOEFL or English Proficiency Letter",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  }
]

const MbbsinChina = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
      //   badgeText="Medical Education"
        title="MBBS in China"
        description="Discover top-ranked medical universities in China offering world-class MBBS programs. Get expert guidance for your medical education journey with our comprehensive support services."
        backgroundImage={chinaImage}
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
              MBBS in China
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Explore our partner universities in China offering world-class medical education with English-taught programs.
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
                      className="w-full  object-fill h-[250px]"
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

export default MbbsinChina