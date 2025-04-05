import { FaArrowRight } from "react-icons/fa"
import { Images } from "../assets/images"
import Container from "./Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CtaSection = ({ backgroundImage, Heading, Text }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

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

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <Container>
      <div className="py-16 bg-purple-50 overflow-hidden relative" ref={ref}>
        <img
          src={backgroundImage || Images.About.ContactBg}
          className="absolute object-cover left-0 top-0 w-full h-full z-10"
        />

        <motion.div
          className="z-20 mx-auto relative px-8 lg:px-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="col-span-full lg:col-span-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-700 mb-6"
                variants={contentVariants}
              >
                {Heading || 'Lorem'}
              </motion.h2>

              <motion.p
                className="text-gray-600 mb-8"
                variants={contentVariants}
              >
                {Text || 'Lorem'}
              </motion.p>
            </div>

            {/* Right Content */}
            <motion.div
              className="flex flex-col items-center col-span-full lg:col-span-4"
              variants={contentVariants}
            >
              <motion.img
                src={Images.About.Contact}
                alt="Business professional"
                className="w-full max-h-[200px] max-w-[200px] h-full rounded-lg mb-4"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />

              <motion.button
                className="bg-TwPrimaryPurple text-white px-6 py-3 rounded-lg flex items-center hover:bg-TwPrimaryPurpleBgHover transition-colors"
                variants={buttonVariants}
                whileHover="hover"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default CtaSection