import { FaArrowRight, FaQuoteLeft } from "react-icons/fa"
import Container from "../../../components/Container"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"

// Import founder images
import drAmjadImage from "../../../assets/images/Team/Dr Amjad Iqbal.jpeg"
import drFarmanImage from "../../../assets/images/Team/Dr farman.jpeg"
import drFarooqImage from "../../../assets/images/Team/Dr Farooq.jpeg"

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
  const navigate = useNavigate()

  return (
    <div className="py-8 md:py-16 lg:py-24 bg-white overflow-hidden" ref={ref}>
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
              className="bg-green-100 text-green-600 px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-sm md:text-base"
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
            variants={itemVariants}
          >
            Message from the Founders
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
            variants={itemVariants}
          >
            Helping students achieve their dreams is at the heart of everything we do.
          </motion.p>

          {/* Two Column Layout */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Column - Founder Images */}
            <motion.div
              className="flex gap-3 md:gap-4 order-2 md:order-1"
              variants={foundersImageVariants}
            >
              <motion.div className="w-2/3" variants={imageVariants}>
                <motion.img
                  src={drFarooqImage}
                  alt="Founder"
                  className="h-auto w-full rounded-lg object-cover object-top"
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <div className="w-1/3 flex flex-col justify-between gap-3 md:gap-4">
                <motion.img
                  src={drAmjadImage}
                  alt="Co-Founder"
                  className="h-full w-auto rounded-2xl md:rounded-[2rem] object-cover object-top"
                  variants={smallImageVariants}
                  custom={0}
                />
                <motion.img
                  src={drFarmanImage}
                  alt="Co-Founder"
                  className="h-full w-auto rounded-2xl md:rounded-[2rem] object-cover object-top"
                  variants={smallImageVariants}
                  custom={1}
                />
              </div>
            </motion.div>

            {/* Right Column - Message */}
            <motion.div
              className="order-1 md:order-2"
              variants={containerVariants}
            >
              <motion.div variants={quoteVariants}>
                <FaQuoteLeft className="text-gray-300 text-3xl md:text-5xl mb-4 md:mb-6" />
              </motion.div>

              <motion.p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                variants={itemVariants}
              >
                Our success is defined by <b>your success</b>. We take great pride in celebrating the <b>milestones and accomplishments</b> of our students. Your journey is our journey, and we are here to ensure that you have the <b>resources and support</b> necessary to reach your full potential.
                <br /><br />
                Thank you for considering <b>EBC Worldwide</b> as your partner in education. We are excited to embark on this journey with you and look forward to helping you achieve your dreams.
              </motion.p>

              <motion.div
                className="mt-6 md:mt-10 flex justify-end cursor-pointer"
                variants={itemVariants}
                onClick={() => navigate('/about-us')}
              >
                <motion.a
                  className="inline-flex items-center bg-purple-100 text-TwPrimaryPurple px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple-200 transition-colors text-sm md:text-base"
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