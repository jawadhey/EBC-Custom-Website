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
    title: "Finding the Right Program",
    description: "Lorem ipsum dolor sit amet consectetur. Arcu quam mauris ornare senectus tortor sit. Quisque sed facilisis aenean adipiscing pulvinar nunc et.",
    image: Images.HelpImage // Replace with your actual image path
  },
  {
    title: "Application Process Guidance",
    description: "Nullam feugiat gravida risus, ac dignissim nibh tincidunt nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: Images.About.AboutGallery1 // Replace with your actual image path
  },
  {
    title: "Interview Preparation",
    description: "Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero.",
    image: Images.About.Graduate // Replace with your actual image path
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
    <div className="py-16 bg-white overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Top Badge */}
          <motion.div
            className="flex justify-center mb-6"
            variants={badgeVariants}
          >
            <motion.div
              className="bg-[#FFC2551A] text-[#FFC255] px-4 h-[44px] flex items-center rounded-full inline-block"
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
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-tight"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.
          </motion.h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Dynamic Image with Animation */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-[507px]"
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
                    // y: [0, -10, 0],
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
              className="space-y-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              variants={containerVariants}
            >
              {helpContent.map((item, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl p-6 cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? "bg-[#FFC2551A] border-l-4 border-[#ffc15552]"
                    : "bg-purple-50 hover:bg-purple-100"
                    }`}
                  variants={cardVariants}
                  custom={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="flex items-center justify-between"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-3">
                      {item.title}
                    </h3>
                    {/* {activeIndex === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 rounded-full bg-purple-500"
                      />
                    )} */}
                  </motion.div>
                  <motion.p
                    className="text-gray-600"
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