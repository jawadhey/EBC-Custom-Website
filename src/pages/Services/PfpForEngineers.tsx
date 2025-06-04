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
  university: "Sumgayit State University",
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
}

const PfpForEngineers = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div>
      <ServicesHeroSection
        title="PFP for Engineers"
        description="Discover the Bright Future scholarships for international students at Sumgayit State University, Azerbaijan. Full tuition coverage for selected engineering and science programs."
        backgroundImage={azerbaijanImage}
      />

      <div className="py-8 md:py-16 bg-white overflow-hidden" ref={ref}>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Main Content Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {scholarshipDetails.university}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {scholarshipDetails.description}
                </p>

                {/* Scholarship Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Number of Scholarships</h3>
                    <p className="text-gray-600">{scholarshipDetails.details.numberOfScholarships}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Coverage</h3>
                    <p className="text-gray-600">{scholarshipDetails.details.coverage}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Duration</h3>
                    <p className="text-gray-600">{scholarshipDetails.details.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Language of Instruction</h3>
                    <p className="text-gray-600">{scholarshipDetails.details.language}</p>
                  </div>
                </div>

                {/* Eligible Majors Button */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-6"
                >
                  {showDetails ? "Hide Eligible Majors" : "View Eligible Majors"}
                </button>

                {/* Eligible Majors Details */}
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Undergraduate Programs</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {scholarshipDetails.eligibleMajors.undergraduate.map((major, index) => (
                          <li key={index}>{major}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Graduate Programs</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {scholarshipDetails.eligibleMajors.graduate.map((major, index) => (
                          <li key={index}>{major}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Application Process */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Application Process</h3>
                  <ul className="list-decimal list-inside text-gray-600 space-y-2">
                    {scholarshipDetails.applicationProcess.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  )
}

export default PfpForEngineers 