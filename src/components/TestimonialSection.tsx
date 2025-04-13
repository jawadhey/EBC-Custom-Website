import { FaPlay } from "react-icons/fa"
import Container from "./Container"
import { Images } from "../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const TestimonialVideoSection = ({ Text }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const videoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const playButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-8 md:py-16 bg-purple-50" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Column - Video */}
            <motion.div
              className="relative md:col-span-7 col-span-12"
              variants={videoVariants}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={Images.About.Graduate}
                  alt="Students in library"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[400px] rounded-xl md:rounded-2xl"
                />
              </motion.div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  variants={playButtonVariants}
                  whileHover="hover"
                >
                  <FaPlay className="text-TwPrimaryPurple ml-1 text-sm md:text-base" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Testimonial */}
            <motion.div
              className="md:col-span-5 col-span-12"
              variants={contentVariants}
            >
              <motion.div
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-100 text-red-500 text-xs md:text-sm mb-4 md:mb-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fee2e2"
                }}
                transition={{ duration: 0.3 }}
              >
                There's a good word for us out there
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 md:mb-6 !leading-tight"
                variants={itemVariants}
              >
                What our students say about us
              </motion.h2>

              <motion.p
                className="text-gray-600 text-sm md:text-base !leading-relaxed"
                variants={itemVariants}
              >
                {Text || "Our students' journeys speak for themselves! From securing admissions in top medical universities to thriving in their careers, their success stories reflect our commitment to guiding them every step of the way. Watch the video to hear firsthand experiences and discover how we make studying abroad a seamless and rewarding experience."}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default TestimonialVideoSection