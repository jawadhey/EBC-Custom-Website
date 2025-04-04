import { FaArrowRight, FaQuoteLeft } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { motion } from "motion/react"
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
  }
}

const quoteVariants = {
  hidden: { opacity: 0, rotate: -15 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const foundersImageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const smallImageVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const FoundersMessageSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  return (
    <div className="py-16 lg:py-32 bg-white overflow-hidden" ref={ref}>
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
              className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Get to know us better
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
            variants={itemVariants}
          >
            Message from the Founders
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Helping students achieve their dreams is at the heart of everything we do.

          </motion.p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Founder Images */}
            <motion.div
              className="flex gap-4"
              variants={foundersImageVariants}
            >
              <motion.div className="w-2/3" variants={imageVariants}>
                <motion.img
                  src={Images.FounderImage}
                  alt="Founder"
                  className="h-auto w-full rounded-lg object-cover object-top"

                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <div className="w-1/3 flex flex-col justify-between gap-4">
                <motion.img
                  src={Images.coFounderImage}
                  alt="Co-Founder"
                  className="h-full w-auto rounded-[2rem] object-cover object-top"
                  variants={smallImageVariants}
                  custom={0}
                />
                <motion.img
                  src={Images.coFounderImage}
                  alt="Co-Founder"
                  className="h-full w-auto rounded-[2rem] object-cover object-top"
                  variants={smallImageVariants}
                  custom={1}
                />
              </div>
            </motion.div>

            {/* Right Column - Message */}
            <motion.div variants={containerVariants}>
              <motion.div variants={quoteVariants}>
                <FaQuoteLeft className="text-gray-300 text-5xl mb-6" />
              </motion.div>

              <motion.p
                className="text-gray-700 text-lg leading-relaxed"
                variants={itemVariants}
              >
                We started this platform to <b>make international education simple and accessible.</b> From choosing the right university to securing your admission and visa, we guide you every step of the way. Your success is our pride, and we’re here to help you achieve it!

              </motion.p>

              <motion.div
                className="mt-10 flex justify-end"
                variants={itemVariants}
              >
                <motion.a
                  href="#"
                  className="inline-flex items-center bg-purple-100 text-TwPrimaryPurple px-6 py-3 rounded-full hover:bg-purple-200 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#E9D5FF",
                    transition: { duration: 0.2 }
                  }}
                >
                  View Executive Team <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default FoundersMessageSection