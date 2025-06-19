import { FaQuestion, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion, AnimatePresence } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "anticipate"
    }
  }
}

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

const cardVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i: any) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

// Content for the cards and images
const helpContent = [
  {
    title: "Get Expert Guidance",
    description: "Schedule a free consultation with our experts to discuss your goals and get personalized university recommendations based on your budget and preferences.",
    image: Images.EbcGuidance
  },
  {
    title: "Secure Admission & Visa",
    description: "We assist in preparing and submitting your university application while handling all documentation and guiding you through the visa process.",
    image: Images.EbcAdmission
  },
  {
    title: "Fly & Begin Your Journey",
    description: "Receive pre-departure support, including travel and accommodation guidance, then arrive at your university and start your journey toward becoming a doctor!",
    image: Images.EbcJourney
  }
]

const HelpSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % helpContent.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [paused])

  return (
    <div className="py-8 md:py-16 bg-white overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Top Badge */}
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            variants={badgeVariants}
          >
            <motion.div
              className="bg-[#FFC2551A] text-[#FFC255] px-3 md:px-4 h-[36px] md:h-[44px] flex items-center rounded-full inline-block text-sm md:text-base"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              We are here to help you
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-8 md:mb-12 max-w-4xl mx-auto !leading-tight"
            variants={itemVariants}
          >
            Your Journey to Studying Abroad in 3 Simple Steps
          </motion.h2>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
            {/* Left Column - Dynamic Image with Animation */}
            <motion.div
              className="relative rounded-2xl overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[507px]"
              variants={imageVariants}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={helpContent[activeIndex].image}
                  alt={helpContent[activeIndex].title}
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Information Cards */}
            <motion.div
              className="w-full space-y-4 md:space-y-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              variants={containerVariants}
            >
              {helpContent.map((item, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? "bg-[#ffcd767c] border-l-4 border-[#ffc15552]"
                    : "bg-purple-200 hover:bg-purple-300"
                    }`}
                  variants={cardVariants}
                  custom={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="flex items-center justify-between"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4 border-b border-purple-100 pb-2 md:pb-3">
                      {item.title}
                    </h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-600 text-sm md:text-base"
                    variants={itemVariants}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default HelpSection