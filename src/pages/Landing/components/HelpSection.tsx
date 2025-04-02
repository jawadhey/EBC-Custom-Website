import { FaQuestion, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
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

const HelpSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

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
            {/* Left Column - Image with Chat Bubbles */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              variants={imageVariants}
            >
              <motion.img
                src={Images.HelpImage}
                alt="Students Discussion"
                className="w-full max-h-[507px] object-contain rounded-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Uncomment if you want to add the chat bubbles back */}
              {/* Alen Joe Chat Bubble */}
              {/* <motion.div 
                className="absolute top-1/2 left-8 transform -translate-y-12 bg-white rounded-full py-2 px-4 shadow-md flex items-center max-w-xs"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex-shrink-0 mr-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Alen Joe"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Alen Joe</p>
                  <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ml-3 bg-yellow-400 rounded-full p-2">
                  <FaQuestion className="text-white text-xs" />
                </div>
              </motion.div> */}

              {/* Mary Jane Chat Bubble */}
              {/* <motion.div 
                className="absolute bottom-8 right-8 bg-white rounded-full py-2 px-4 shadow-md flex items-center max-w-xs"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="mr-3 bg-yellow-400 rounded-full p-2">
                  <FaLightbulb className="text-white text-xs" />
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                  <p className="font-medium text-sm">Mary Jane</p>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mary Jane"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Column - Information Cards */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-50 rounded-xl p-6"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-3"
                    variants={itemVariants}
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </motion.h3>
                  <motion.p
                    className="text-gray-600"
                    variants={itemVariants}
                  >
                    Lorem ipsum dolor sit amet consectetur. Arcu quam mauris ornare senectus tortor sit. Quisque sed
                    facilisis aenean adipiscing pulvinar nunc et. Lectus a ac.
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