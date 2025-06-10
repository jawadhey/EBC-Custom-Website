//@ts-nocheck
import React, { useState } from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import Container from "../../components/Container"
import { FaTimes } from "react-icons/fa"
import ServicesHeroSection from "../../components/ServicesHero"
import { Images } from '../../assets/images'
import azerbaijanImage from '../../assets/images/Services/pfp/pexels-mikhail-nilov-8412701.jpg'

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

const scholarshipDetails = {
  universities: [
    {
      name: "Sumgayit State University",
      description: "SSU is a public University in Baku, Azerbaijan founded in 1962. SSU is delighted to announce a new scholarship program aimed at attracting talented international students. This program will cover the full tuition fee for a hundred students who wish to pursue undergraduate or graduate degrees at SSU in selected majors.",
      details: {
        numberOfScholarships: "100",
        coverage: "Full tuition fee",
        duration: "Up to 4 years of undergraduate programs or up to 2 years of graduate programs",
        language: "Azerbaijani"
      },
      eligibleMajors: {
        undergraduate: [
          "Chemical Engineering",
          "Electrical and Electronics Engineering",
          "Process Automation Engineering",
          "Information Technology",
          "Computer Engineering",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology",
          "Mathematics Education (in English)",
          "Chemistry Education (in English)",
          "Physics Education"
        ],
        graduate: [
          "MS Clinical Engineering (Chemical Technology of Polymers)",
          "MS Chemistry (Organic Chemistry)",
          "MS Process Automation Engineering (Automation of Technology Process and Production)",
          "MS Biology (Microbiology)",
          "MS Computer Science (Data Analytics)",
          "MS Computer Engineering (Computer Engineering)",
          "MS Information Technology (Systems Engineering Cyber Security)",
          "MS Electrical Engineering (Electrical Supply Optimization and Modelling)",
          "MS Electronic Engineering (Electro Energetics)",
          "MBA (Finance)",
          "MBA (Education Management)"
        ]
      },
      applicationProcess: {
        steps: [
          "Application form: the online form on portal.edu.az",
          "Email your personal statement, detailed academic achievements, career goals, and why you choose SSU to ird@sdu.edu.az",
          "Submission Deadline: September 15th, 2024"
        ]
      }
    },
    {
      name: "Baku Engineering University",
      description: "Baku Engineering University is a higher education institution which functions as a public legal entity under the Ministry of Education of Azerbaijan Republic. The university's mission is to prepare engineers at all levels of higher education, execute programs of higher and additional education in this sphere, and conduct fundamental and applied scientific research.",
      details: {
        tuitionFee: "$2000 per year (payable in two installments of $1,000 per semester)",
        registrationFee: "$500 (Once)",
        admissionFee: "$150 (Payable in advance with documents)",
        liaisonFee: "$1000 (Once)",
        visaFee: "$100 (After Admission)",
        language: "English"
      },
      additionalFees: {
        medicalExam: "$20-50 per year (includes HIV, HBVS reports)",
        trcExtension: "$40-60 per year",
        medicalInsurance: "$120 per year (Optional)",
        hostelFee: "$46 per month"
      },
      eligibleMajors: {
        undergraduate: [
          "Design",
          "Business Administration",
          "Public Administration",
          "Economics",
          "Finance",
          "Accounting",
          "Computer Science",
          "Ecological Engineering",
          "Electrical and Electronics",
          "Information Security",
          "Information Technology",
          "Civil Engineering",
          "Chemical Engineering",
          "Computer Engineering",
          "Logistics and Transport Engineering",
          "Architecture",
          "Mechanical Engineering",
          "Industrial Engineering",
          "Process Automation Engineering",
          "Physics",
          "Chemistry",
          "Mathematics"
        ]
      },
      admissionCriteria: {
        academicRequirements: "FSc/FA/A/O Levels with a minimum of 60% overall marks",
        ageRequirement: "17-27 years with no more than 3 years study gap",
        englishRequirement: "English Proficiency Certificate from the last attended college",
        requiredDocuments: [
          "Matric Results",
          "Fsc Results",
          "Medical Report (HIV, HBVS reports)",
          "English Proficiency Certificate",
          "Passport",
          "Police Clarence Certificate",
          "Email Address",
          "Contact number of Guardian",
          "Polio/Covid Cards"
        ]
      },
      applicationProcess: {
        steps: [
          "Submit all required documents",
          "Pay Admission & Translation Fee ($150) in advance",
          "Pay Registration Fee ($500)",
          "Pay Liaison Management Fee ($1000) after receiving visa",
          "Pay remaining fees on arrival",
          "Intake: September 2025"
        ]
      }
    }
  ]
}

const PfpForEngineers = () => {
  const [showDetails, setShowDetails] = useState<number | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="PFP for Engineers"
        description="Discover engineering and science programs at leading universities in Azerbaijan. Full tuition coverage and comprehensive scholarship opportunities available."
        backgroundImage={azerbaijanImage}
      />

      <div className="py-8 md:py-16 bg-white overflow-hidden" ref={ref}>
        <Container>
          <motion.div
            className="mx-auto  space-y-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {scholarshipDetails.universities.map((university, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={cardVariants}
                custom={index}
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {university.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {university.description}
                  </p>

                  {/* University Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {Object.entries(university.details).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </h3>
                        <p className="text-gray-600">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Fees Section for BEU */}
                  {university.additionalFees && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Additional Fees</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(university.additionalFees).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-1">
                              {key.split(/(?=[A-Z])/).join(' ')}
                            </h4>
                            <p className="text-gray-600">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Eligible Majors Button */}
                  <button
                    onClick={() => setShowDetails(showDetails === index ? null : index)}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-6"
                  >
                    {showDetails === index ? "Hide Eligible Majors" : "View Eligible Majors"}
                  </button>

                  {/* Eligible Majors Details */}
                  {showDetails === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      {Object.entries(university.eligibleMajors).map(([level, majors]) => (
                        <div key={level}>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            {level.charAt(0).toUpperCase() + level.slice(1)} Programs
                          </h3>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {majors.map((major: string, idx: number) => (
                              <li key={idx}>{major}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Application Process */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Application Process</h3>
                    <ul className="list-decimal list-inside text-gray-600 space-y-2">
                      {university.applicationProcess.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Admission Criteria for BEU */}
                  {university.admissionCriteria && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Admission Criteria</h3>
                      <div className="space-y-4">
                        {Object.entries(university.admissionCriteria).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">
                              {key.split(/(?=[A-Z])/).join(' ')}
                            </h4>
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {value.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600">{value}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </div>
  )
}

export default PfpForEngineers 