import { FaArrowRight } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
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

const logoVariants = {
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

const LandingHeroSection = () => {
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
   })

   return (
      <div
         className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-24 pt-[120px] lg:pt-[168px] overflow-hidden"
         ref={ref}
      >
         <Container>
            <div className="w-full mx-auto flex flex-col-reverse xl:flex-row items-center justify-between gap-10">
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
                     className="text-4xl md:text-5xl font-bold text-gray-700 !leading-normal"
                     variants={itemVariants}
                  >
                     Lorem ipsum dolor sit amet consectetur. Vivamus dignissim.
                  </motion.h1>

                  <motion.p
                     className="text-gray-600 max-w-xl"
                     variants={itemVariants}
                  >
                     Lorem ipsum dolor sit amet consectetur. Vitae purus massa felis sed velit urna. Nulla a commodo nulla at
                     cras nulla. Maecenas diam.
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
                     className="flex items-center flex-wrap gap-x-8 gap-y-4 pt-12 justify-center md:justify-start"
                     variants={containerVariants}
                  >
                     {[1, 2, 3].map((item, i) => (
                        <motion.img
                           key={item}
                           src={Images.HarwardLogo}
                           alt="Harvard University"
                           className="h-12"
                           variants={logoVariants}
                           custom={i}
                        />
                     ))}
                  </motion.div>
               </motion.div>

               {/* Right Content - Hexagon Image */}
               <motion.div
                  className="w-full xl:w-1/2 relative"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={imageVariants}
               >
                  <div className="relative">
                     {/* Main image with floating animation */}
                     <motion.div
                        className="relative mx-auto xl:ml-auto z-10 rounded-3xl max-w-[500px] xl:max-w-[550px]"
                        animate={{
                           y: [0, -15, 0],
                        }}
                        transition={{
                           duration: 6,
                           repeat: Infinity,
                           ease: "easeInOut"
                        }}
                     >
                        <img
                           src={Images.LandingHero}
                           alt="Medical Students Consultation"
                           className="w-auto h-auto rounded-3xl object-contain"
                        />
                     </motion.div>

                    
                  </div>
               </motion.div>
            </div>
         </Container>
      </div>
   )
}

export default LandingHeroSection