import { FaArrowRight, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
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
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "anticipate"
    }
  }
}

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2,
      duration: 0.6
    }
  })
}

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-24 pt-[70px] lg:pt-[70px] overflow-hidden"
      ref={ref}
    >
      <Container>
        <div className="w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            className="w-full xl:w-1/2 space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="flex w-fit px-4 h-[46px] items-center rounded-full bg-purple-100 border border-purple-200"
              variants={itemVariants}
            >
              <p className="text-TwPrimaryPurple text-sm font-medium">Best Medical Student Consultant in your City</p>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-700 !leading-snug"
              variants={itemVariants}
            >
              Get to Know Us Better – Your Trusted Partner for Studying Abroad
            </motion.h1>

            <motion.p
              className="text-gray-600 max-w-xl"
              variants={itemVariants}
            >
              Helping You Study Abroad with Confidence! <br />
              At EBC, we believe in turning dreams into reality. Our goal is to guide and support students like you in pursuing medical education abroad, particularly in China's top universities. With expert counseling, a seamless application process, and unwavering support, we make your journey smooth, stress-free, and successful.
              <br /> <br />
              Join 15,000+ students who have taken the leap! Let's get started today.
            </motion.p>

            <motion.div
              className="flex items-center flex-col md:flex-row gap-6 pt-2"
              variants={itemVariants}
            >
              <motion.button
                className="bg-TwPrimaryPurple hover:bg-TwPrimaryPurpleBgHover text-white font-medium py-3 px-6 rounded-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation Now
              </motion.button>

              <motion.a
                href="#"
                className="flex items-center text-TwPrimaryPurple font-medium hover:text-purple-800 transition duration-300"
                whileHover={{ x: 5 }}
              >
                About Us <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { count: "15000", text: "Happy Students" },
                { count: "95", text: "Success Rate %" },
                { count: "50", text: "Partner Universities" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  className="bg-[#ECE5F9] rounded-lg p-4 w-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-baseline mb-2">
                    <span className="text-TwPrimaryPurple text-3xl font-bold">{item.count}</span>
                    {index !== 1 ? (
                      <span className="text-yellow-500 text-3xl font-bold">+</span>
                    ) : (
                      <span className="text-yellow-500 text-3xl font-bold">%</span>
                    )}
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="w-full xl:w-1/2 relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative">
              {/* Floating animation for the main image */}
              <motion.div
                className="relative mx-auto xl:ml-auto z-10 rounded-3xl max-w-[500px] xl:max-w-[550px]"

              >
                <img
                  src={Images.About.AboutHero}
                  alt="Medical Students Consultation"
                  className="w-auto h-auto rounded-3xl object-contain"
                />
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -z-10 top-1/4 right-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              <motion.div
                className="absolute -z-10 bottom-1/4 left-1/4 w-24 h-24 bg-yellow-100 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection