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
import uni4 from '../../assets/universities/uni4/hero.jpg'
import uni3 from '../../assets/universities/uni3/hero.jpg'
import uni6 from '../../assets/images/Universities/Yichun-University.jpg'
import uni2 from '../../assets/universities/uni2/hero.jpg'
import uni5 from '../../assets/universities/uni5/hero.png'

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
      accreditation: "MOE China, WHO, PMDC/PMC, ECFMG, WDOMS/WFME recognized",
      duration: "06 years (5 + 1 internship)",
      language: "English taught program",
      features: [
        "No HSK‑3/4 requirement in first year",
        "Over 400 international students enrolled"
      ],
      fees: {
        tuition: "30000 RMB/year",
        hostel: "5000 RMB/year",
        healthInsurance: "300 RMB/year",
        visaExtension: "400 RMB/year",
        medicalCheckup: "300 RMB/year",
        management: "13500 RMB (first year only)",
        other: "2200 RMB (insurance, visa, medical, bedding/books etc)",
        total: "50300 RMB (First year total approx)"
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
      accreditation: "MOE China, WHO, PMDC/PMC, ECFMG, NMC, BMDC, USMLE/PLAB approved",
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      features: ["No HSK‑3/4 requirement in first year", "Located in Muslim province", "Economical living"],
      fees: {
        tuition: "29800 RMB/year",
        hostel: "5000 RMB/year",
        application: "1000 RMB (once)",
        registration: "400 RMB (once)",
        visa: "800 RMB/year",
        medical: "500 RMB/year",
        insurance: "200 RMB/year",
        internship: "14900 RMB (6th year tuition, half fee)"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
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
      accreditation: "MOE, PMDC/PMC, ECFMG approved",
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      features: ["No HSK 3‑4 in first year"],
      fees: {
        application: "–",
        registration: "2000 RMB (first year, non‑refundable)",
        management: "7500 RMB (first year)",
        tuition: "35000 RMB/year",
        hostel: "5500 RMB/year",
        visa: "2100 RMB/year (visa+insurance)",
        other: "–",
        total: "51000 RMB (approx 1st year total)"
      },
      requirements: [
        "Application Form",
        "CV of Student",
        "SSC Certificate (grade 10)",
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
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
      accreditation: "MOE, WHO, WFME, WCAME, ECFMG, PMDC recognized",
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      fees: {
        application: "1000 RMB (once)",
        registration: "500 RMB (once)",
        deposit: "4000 RMB (refundable on graduation)",
        tuition: "34000 RMB/year",
        hostel: "6000 RMB/year",
        visa: "800 RMB/year",
        medical: "500 RMB (once)",
        insurance: "800 RMB/year",
        management: "–"
      },
      requirements: [
        "Application Form",
        "Junior High School (grade 10)",
        "Senior High School/HSSC/A‑Levels/WAEC (grade 12)",
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
      accreditation: "WHO, PMDC, WFME, ECFMG, WCAME China",
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      features: ["Min 70% marks req in FSC"],
      fees: {
        application: "≈300 RMB (USD41)",
        registration: "100 RMB/year",
        tuition: "34000 RMB/year",
        hostel: "4900 RMB/year",
        visa: "400 RMB/year",
        medical: "400 RMB (first year)",
        insurance: "600 RMB/year",
        other: "book & bedding: ~1000 RMB total"
      },
      requirements: [
        "Application Form",
        "English Proficiency Certificate",
        "SSC Certificate (grade 10)",
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
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
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
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
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      fees: {
        application: "1000 RMB (one time)",
        registration: "500 RMB (first year)",
        tuition: "30000 RMB per year",
        hostel: "3800–4800 RMB/year (double sharing)",
        food: "4500 RMB/year",
        residencePermit: "400 RMB/year",
        medical: "400 RMB (first year)",
        insurance: "800 RMB/year",
        deposit: "500 RMB (hostel deposit first year)"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
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
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      features: ["No HSK 4 in the first year"],
      fees: {
        application: "1000 RMB (one time)",
        registration: "2000 RMB (first year)",
        management: "7000 RMB (JW202, courier first year)",
        tuition: "33000 RMB/year",
        hostel: "4800–7200 RMB/year",
        visa: "2000 RMB/year (insurance + permit)",
        medical: "400 RMB/year",
        insurance: "600 RMB/year",
        books: "1000 RMB/year"
      },
      requirements: [
        "Application Form",
        "SSC Certificate (grade 10)",
        "HSSC/A‑Levels/WAEC or Senior High School (grade 12)",
        "Passport First page in Scan",
        "IELTS or TOEFL or English Proficiency Letter",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Financial Statement of Guardian"
      ]
    }
  },
  
  {
    id: 9,
    name: "GUANGXI MEDICAL UNIVERSITY",
    image: uni4,
    details: {
      accreditation: "WHO, IMED/Faimer, ECFMG recognized",
      duration: "6 years (5 + 1 internship)",
      language: "English taught program",
      features: [
        "12 affiliated hospitals",
        "81 medical practice bases",
        "Over 1,200 international students",
        "Established in 1934"
      ],
      fees: {
        tuition: "24000 RMB/year (after 11,000 RMB scholarship)",
        hostel: "3000 RMB/year (plus 1,000 RMB refundable deposit)",
        application: "1000 RMB (once)",
        registration: "800 RMB/year",
        visa: "400 RMB/year",
        medical: "500 RMB/year",
        insurance: "800 RMB/year"
      },
      requirements: [
        "High School Transcript",
        "Passport Copy",
        "Police Character Certificate",
        "Physical Examination Form",
        "Passport Photos",
        "Study Plan",
        "JW202 Application Form",
        "English Proficiency Certificate"
      ]
    }
  },
  
  {
    id: 10,
    name: "KUNMING UNIVERSITY OF SCIENCE & TECHNOLOGY",
    image: uni3,
    details: {
      accreditation: "WHO, WFME, ECFMG recognized",
      duration: "6 years (1 foundation + 4 + 1 internship)",
      language: "English taught program",
      features: [
        "Located in scenic Kunming city",
        "Over 49,000 students",
        "Three major campuses",
        "Modern facilities and labs"
      ],
      fees: {
        application: "1000 RMB (once)",
        registration: "—",
        management: "10400 + 13000 RMB (first year)",
        tuition: {
          english: "10000 RMB (first year)",
          subsequent: "18500 RMB/year"
        },
        hostel: {
          firstYear: "1200 RMB",
          subsequent: "1400 RMB/year"
        },
        visa: "—",
        insurance: "—",
        industrial: "—",
        other: "Insurance & visa: 1700 RMB first year, 1200 RMB subsequent years"
      },
      requirements: [
        "Passport",
        "10th and 12th grade mark sheets",
        "Medical report",
        "Police certificate",
        "Financial support form",
        "CV",
        "White background picture",
        "Affidavit (if under 18)"
      ]
    }
  },
  
  {
    id: 11,
    name: "YICHUN UNIVERSITY",
    image: uni6,
    details: {
      accreditation: "WHO, WFME, ECFMG, EPIC, GMC recognized",
      duration: "6 years (1 Chinese + 5 MBBS)",
      language: "English taught program",
      features: [
        "69 undergraduate programs",
        "18 schools",
        "Two affiliated hospitals",
        "Over 1,400 international students"
      ],
      fees: {
        tuition: "12200 RMB (first year), 18500 RMB (subsequent years)",
        hostel: "4500 RMB/year",
        application: "1000 RMB (once)",
        registration: "—",
        visa: "—",
        medical: "—",
        insurance: "—",
        management: "10000 RMB (first year Chinese/development fee)",
        other: "Insurance/visa/medical: 6250 RMB first year, 1200 RMB subsequent years"
      },
      requirements: [
        "Minimum 60% in FSc",
        "Minimum 50% in English",
        "Valid passport",
        "Academic documents",
        "Self-introduction video",
        "Study plan"
      ]
    }
  },
  
  {
    id: 12,
    name: "NORTH CHINA UNIVERSITY OF SCIENCE & TECHNOLOGY",
    image: uni2,
    details: {
      accreditation: "PMC (A‑listed), WHO, IMED/FAIMER, PMC/HEC, ECFMG/USMLE/PLAB eligible",
      duration: "6 years (1 Chinese + 4 + 1 internship)",
      language: "English taught program (foundation year Chinese)",
      features: [
        "Located in Tangshan, Hebei Province",
        "Established in 1926",
        "Over 48,000 students",
        "745‑acre campus"
      ],
      fees: {
        application: "1000 RMB (once)",
        registration: "9500 RMB (first year)",
        management: "13000 RMB (first year, JW202/courier)",
        tuition: "10500 RMB (1st year), 18000 RMB (subsequent years)",
        hostel: "5000 RMB/year",
        visa: "—",
        medicalInsurance: "2000 RMB (1st year), 1600 RMB (subsequent)",
        total: "40000 RMB (1st year), ~24600 RMB/year thereafter"
      },
      requirements: [
        "Minimum 60% in Biology & English; 50% in Physics & Chemistry",
        "Age 18–25 years",
        "Passport",
        "SSC & HSSC mark sheets",
        "Filled application Form + Resume",
        "Medical Check up on Chinese physical form",
        "Police clearance certificate",
        "One Digital photo with a white background",
        "Bank statement & affidavit of financial support (min ~USD 6,000)"
      ]
    }
  },
  {
    id: 13,
    name: "JIANGHAN UNIVERSITY",
    image: uni5,
    details: {
      accreditation: "WHO, PMDC/PMC, WFME, ECFMG recognized",
      duration: "4 years (MBBS)",
      language: "English taught program",
      features: [
        "Located in Wuhan, Hubei Province",
        "Modern medical facilities",
        "International student support",
        "Clinical training opportunities"
      ],
      fees: {
        tuition: "20000 RMB/year (includes dormitory)",
        application: "1000 RMB (once)",
        admissionService: "7200 RMB/year",
        hostel: "3200 RMB/year",
        visa: "400 RMB/year",
        medical: "500 RMB/year",
        insurance: "800 RMB/year"
      },
      requirements: [
        "Minimum 60% in Grade 12",
        "Age 18–25 years",
        "Passport Copy",
        "Physical Examination Form",
        "Police Clearance Certificate",
        "English Proficiency Certificate (if available)",
        "Financial Statement",
        "Application Form",
        "Passport Photos"
      ]
    }
  }
  
]

const MoeListedUniversities = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="MOE Listed Universities"
        description="Explore our partner universities in China that are recognized by the Ministry of Education (MOE). Get expert guidance for your academic journey with our comprehensive support services."
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
              MOE Listed Universities
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
              variants={containerVariants}
            >
              Discover our partner universities in China that are officially recognized by the Ministry of Education (MOE) and offer world-class education.
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
                    <p className="text-gray-600 text-sm text-center mt-1">{university.details.accreditation}</p>
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
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedUniversity.name}</h2>
                        <p className="text-gray-600">{selectedUniversity.details.accreditation}</p>
                      </div>
                      <button
                        onClick={() => setSelectedUniversity(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
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

export default MoeListedUniversities 