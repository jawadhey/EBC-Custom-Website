"use client"

import { useState, useEffect, useRef } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { motion, AnimatePresence } from "motion/react"
import { useInView } from "react-intersection-observer"

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

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0, x: -30 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.5
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.5
    }
  }
}

const navButtonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

const quoteIconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      type: "spring",
      stiffness: 200
    }
  }
}

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState("right")
  const [progressWidth, setProgressWidth] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 6000 // 6 seconds per slide

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  })

  const testimonials = [
    {
      id: 1,
      name: "Mary Jane",
      position: "MBBS Wuhan University of Medical Sciences",
      image: Images.TestimonialImage,
      text: `"The best decision I made!" – Thanks to their guidance, I got into a top medical university in China without any hassle. They handled everything, from applications to visas, making the entire process smooth and stress-free. Studying abroad was a life-changing experience, and I'm now living my dream of studying medicine! Highly recommend their support.`,
    },
    {
      id: 2,
      name: "John Smith",
      position: "MD European Medical University",
      image: Images.TestimonialImage,
      text: `"The best decision I made!" – Thanks to their guidance, I got into a top medical university in China without any hassle. They handled everything, from applications to visas, making the entire process smooth and stress-free. Studying abroad was a life-changing experience, and I'm now living my dream of studying medicine! Highly recommend their support.`,
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "MBBS Beijing Medical University",
      image: Images.TestimonialImage,
      text: `"The best decision I made!" – Thanks to their guidance, I got into a top medical university in China without any hassle. They handled everything, from applications to visas, making the entire process smooth and stress-free. Studying abroad was a life-changing experience, and I'm now living my dream of studying medicine! Highly recommend their support.`,
    },
  ];


  // Function to handle slide transition
  const changeSlide = (direction: "next" | "prev") => {
    if (isTransitioning) return

    // Stop current progress animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setIsTransitioning(true)
    setProgressWidth(0)
    setSlideDirection(direction === "next" ? "right" : "left")

    if (direction === "next") {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    } else {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    setTimeout(() => {
      setIsTransitioning(false)
      startProgressTimer()
    }, 500)
  }

  // Timer for progress bar
  const startProgressTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setProgressWidth(0)
    let startTime = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newWidth = (elapsed / slideDuration) * 100

      if (newWidth >= 100) {
        changeSlide("next")
      } else {
        setProgressWidth(newWidth)
      }
    }, 30)
  }

  useEffect(() => {
    if (inView) {
      startProgressTimer()
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [inView])

  return (
    <div className="py-8 md:py-16 bg-TwOrangeBg overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Timer Progress Bar */}
          <motion.div
            className="w-40 sm:w-64 h-1.5 sm:h-2 bg-gray-200 rounded-full mx-auto mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="h-full bg-TwPrimaryPurple rounded-full transition-none"
              style={{ width: `${progressWidth}%` }}
            ></motion.div>
          </motion.div>

          {/* Testimonial Content */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
            {/* Image Column */}
            <div className="md:col-span-3 w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${currentSlide}`}
                  src={testimonials[currentSlide].image || "/placeholder.svg"}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] max-w-[300px] sm:max-w-[400px] rounded-xl sm:rounded-2xl"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Text Column */}
            <div className="md:col-span-9 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {testimonials[currentSlide].text}
                  </motion.p>

                  <div className="flex items-start">
                    <motion.div
                      className="bg-TwPrimaryPurple p-2 sm:p-3 rounded-lg mr-3 sm:mr-4"
                      variants={quoteIconVariants}
                    >
                      <FaQuoteLeft className="text-white text-lg sm:text-xl" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{testimonials[currentSlide].name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{testimonials[currentSlide].position}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-amber-200 mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>

          {/* Navigation */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
            variants={itemVariants}
          >
            <motion.button
              className="border border-gray-300 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-gray-700 hover:bg-amber-100 transition-colors text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FDE68A",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              See All Reviews
            </motion.button>

            <div className="flex space-x-2">
              <motion.button
                onClick={() => changeSlide("prev")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-amber-100 transition-colors"
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isTransitioning}
              >
                <FaChevronLeft className="text-gray-700 text-sm sm:text-base" />
              </motion.button>
              <motion.button
                onClick={() => changeSlide("next")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isTransitioning}
              >
                <FaChevronRight className="text-white text-sm sm:text-base" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default TestimonialSection