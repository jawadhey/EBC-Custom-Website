import { FaArrowRight, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  return (
    <div
      className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-10 md:pb-24 pt-[30px] overflow-hidden"
      ref={ref}
    >
      <Container>
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-4 md:space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="flex w-fit px-3 md:px-4 h-[36px] md:h-[46px] items-center rounded-full bg-purple-100 border border-purple-200"
              variants={itemVariants}
            >
              <p className="text-TwPrimaryPurple text-xs md:text-sm font-medium">Best Medical Student Consultant in your City</p>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 !leading-tight md:!leading-snug"
              variants={itemVariants}
            >
              Get to Know Us Better – Your Trusted Partner for Studying Abroad
            </motion.h1>

            <motion.p
              className="text-gray-600 max-w-xl text-sm md:text-base !leading-relaxed"
              variants={itemVariants}
            >
              Helping You Study Abroad with Confidence! <br />
              At EBC, we believe in turning dreams into reality. Our goal is to guide and support students like you in pursuing medical education abroad, particularly in China's top universities. With expert counseling, a seamless application process, and unwavering support, we make your journey smooth, stress-free, and successful.
              <br /> <br />
              Join 15,000+ students who have taken the leap! Let's get started today.
            </motion.p>

            <motion.div
              className="flex items-center flex-row gap-4 md:gap-6 pt-2"
              variants={itemVariants}
            >
              <motion.button
                className="bg-TwPrimaryPurple hover:bg-TwPrimaryPurpleBgHover text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-md transition duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact-us')}
              >
                Book Consultation Now
              </motion.button>

              <motion.a
                href="#"
                className="flex items-center text-TwPrimaryPurple font-medium hover:text-purple-800 transition duration-300 text-sm md:text-base"
                whileHover={{ x: 5 }}
              >
                About Us <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start md:gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { count: "7000", text: "Happy Students" },
                { count: "5", text: "Offices Across Asia" },
                { count: "50", text: "Partner Universities" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  className="bg-[#ECE5F9] rounded-lg p-3 md:p-4 w-28 md:w-40"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-baseline mb-1 md:mb-2">
                    <span className="text-TwPrimaryPurple text-2xl md:text-3xl font-bold">{item.count}</span>
                    <span className="text-yellow-500 text-2xl md:text-3xl font-bold">+</span>
                  </div>
                  <p className="text-gray-700 text-xs md:text-sm">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="w-full lg:w-1/2 relative mt-8 md:mt-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative">
              {/* Floating animation for the main image */}
              <motion.div
                className="relative mx-auto lg:ml-auto z-10 rounded-2xl md:rounded-3xl max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
              >
                <img
                  src={Images.EbcAboutHero}
                  alt="Medical Students Consultation"
                  className="w-full h-auto min-h-[320px] md:min-h-[400px] rounded-2xl md:rounded-3xl object-cover"
                />
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -z-10 top-1/4 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-purple-100 rounded-full opacity-70"
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
                className="absolute -z-10 bottom-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-yellow-100 rounded-full opacity-60"
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