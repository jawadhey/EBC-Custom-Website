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
  const slideDuration = 6000 // 8 seconds per slide

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
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum. Enim arcu aliquet neque dolor eget in dolor in consectetur. Habitasse ornare aliquam faucibus cursus.",
    },
    {
      id: 2,
      name: "John Smith",
      position: "MD European Medical University",
      image: Images.TestimonialImage,
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum.",
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "MBBS Beijing Medical University",
      image: Images.TestimonialImage,
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum. Enim arcu aliquet neque dolor eget in dolor in consectetur.",
    },
  ]

  // Function to handle slide transition
  const changeSlide = (direction: "next" | "prev") => {
    // Stop current progress animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set transition flag to prevent rapid clicking
    setIsTransitioning(true)

    // Reset progress bar immediately
    setProgressWidth(0)

    // Update slide direction
    setSlideDirection(direction === "next" ? "right" : "left")

    // Calculate new slide index
    if (direction === "next") {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    } else {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    // Allow small delay for animation to complete
    setTimeout(() => {
      setIsTransitioning(false)
      startProgressTimer()
    }, 500)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    changeSlide("next")
  }

  const prevSlide = () => {
    if (isTransitioning) return
    changeSlide("prev")
  }

  // Timer for progress bar
  const startProgressTimer = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Reset progress width
    setProgressWidth(0)

    // Set up new timer
    let startTime = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newWidth = (elapsed / slideDuration) * 100

      if (newWidth >= 100) {
        // When timer is complete, move to next slide
        nextSlide()
      } else {
        // Update progress width
        setProgressWidth(newWidth)
      }
    }, 30) // Update every 50ms for smooth animation
  }

  // Start timer when component mounts or when inView changes
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
    <div className="py-16 bg-[#FFF7E8] overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Timer Progress Bar */}
          <motion.div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-12" variants={itemVariants}>
            <motion.div
              className="h-full bg-TwPrimaryPurple rounded-full transition-none"
              style={{ width: `${progressWidth}%` }}
            ></motion.div>
          </motion.div>

          {/* Testimonial Content */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
            {/* Left Column - Image */}
            <div className="col-span-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${currentSlide}`}
                  src={testimonials[currentSlide].image || "/placeholder.svg"}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-auto max-h-[400px] max-w-[400px] rounded-2xl"
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

            {/* Right Column - Testimonial */}
            <div className="col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {testimonials[currentSlide].text}
                  </motion.p>

                  <div className="flex items-start">
                    <motion.div
                      className="bg-TwPrimaryPurple p-3 rounded-lg mr-4"
                      variants={quoteIconVariants}
                    >
                      <FaQuoteLeft className="text-white text-xl" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentSlide].name}</h3>
                      <p className="text-gray-600">{testimonials[currentSlide].position}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-amber-200 mb-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center"
            variants={itemVariants}
          >
            <motion.button
              className="border border-gray-300 rounded-full px-8 py-3 text-gray-700 hover:bg-amber-100 transition-colors"
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
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-amber-100 transition-colors"
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isTransitioning}
              >
                <FaChevronLeft className="text-gray-700" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isTransitioning}
              >
                <FaChevronRight className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default TestimonialSection