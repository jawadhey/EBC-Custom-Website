"use client"

import { FaGraduationCap } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const GraduatesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sections = [
    {
      title: "Commitment to Student Success",
      content:
        "We are dedicated to guiding students toward the best educational opportunities abroad. From personalized counseling to hassle-free admission processes, we ensure that every student gets the support they need to thrive.",
    },
    {
      title: "Transparency & Trust",
      content:
        "Our process is built on honesty and clarity, ensuring students and parents receive accurate information about universities, tuition, and visa procedures, leaving no room for uncertainty.",
    },
    {
      title: "Proven Track Record",
      content:
        "With 15000+ successful student placements and partnerships with top medical universities, we take pride in our impact on shaping future doctors and healthcare professionals.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const textBlocksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const textBlockVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const overlayVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <div className="py-16 bg-white" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Top Badge */}
          <motion.div className="flex justify-center mb-6" variants={headerVariants}>
            <motion.div
              className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              Looking back, we have come a long way
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto"
            variants={headerVariants}
          >
            Our Core Values & Achievements
          </motion.h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <motion.div className="relative" variants={imageContainerVariants}>
              <motion.img
                src={Images.About.Graduate || "/placeholder.svg"}
                alt="Graduates taking selfie"
                className="w-full h-full max-h-[470px] object-cover rounded-2xl"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute bottom-6 left-0 mx-auto justify-center xl:left-1/2 transform xl:-translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center"
                variants={overlayVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex-shrink-0 mr-3">
                  <img
                    src={Images.About.Graduate || "/placeholder.svg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Our Graduates Get-together</p>
                  <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ml-3 bg-gray-100 rounded-full p-2">
                  <FaGraduationCap className="text-gray-600 text-xs" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Text Blocks */}
            <motion.div className="space-y-6" variants={textBlocksContainerVariants}>
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-50 rounded-xl p-6"
                  variants={textBlockVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default GraduatesSection

