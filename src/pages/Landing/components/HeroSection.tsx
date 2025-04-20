import { FaArrowRight } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import uni1 from '../../../assets/logos/logo1.png'
import uni2 from '../../../assets/logos/logo2.png'
import uni3 from '../../../assets/logos/logo3.png'
import uni4 from '../../../assets/logos/logo4.png'
import uni5 from '../../../assets/logos/logo5.png'
import uni6 from '../../../assets/logos/logo6.jpg'

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

   // Harvard university images array
   const chineseUniversityLogos = [
      uni1,
      uni2,
      uni3,
      // uni4,
      uni5,
      uni6
   ];

   return (
      <div
         className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-10 md:pb-24 pt-[100px] lg:pt-[168px] overflow-hidden"
         ref={ref}
      >
         <Container>
            <div className="w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-3 md:gap-10">
               {/* Left Content */}
               <motion.div
                  className="w-full xl:w-1/2 space-y-4 md:space-y-6"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={containerVariants}
               >
                  <motion.div
                     className="flex w-fit px-3 md:px-4 h-[30px] md:h-[46px] items-center rounded-full bg-purple-100 border border-purple-200"
                     variants={itemVariants}
                  >
                     <p className="text-TwPrimaryPurple text-xs md:text-sm font-medium">Best Medical Student Consultant in your City</p>
                  </motion.div>

                  <motion.h1
                     className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 !leading-[1.3] md:!leading-normal"
                     variants={itemVariants}
                  >
                     Your Trusted Guide to Study Abroad
                  </motion.h1>

                  <motion.p
                     className="text-gray-600 max-w-xl text-sm md:text-base !leading-relaxed"
                     variants={itemVariants}
                  >
                     Assisting FSC Students in Fulfilling Their Medical Dreams! <br />
                     Obtain admission to China's best medical schools with professional assistance and a simple application process. Begin your path to a degree that is recognized throughout the world right now! Admission is assured. Reasonably priced tuition. Full-Service Visa Support.
                  </motion.p>

                  <motion.div
                     className="flex items-center flex-row gap-4 md:gap-6 pt-0 md:pt-2"
                     variants={itemVariants}
                  >
                     <motion.button
                        className="bg-TwPrimaryPurple hover:bg-TwPrimaryPurpleBgHover text-white font-medium py-2 px-5 md:py-3 md:px-6 rounded-md transition duration-300 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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

                  {/* Harvard Swiper instead of static logos */}
                  <motion.div
                     className="pt-8 md:pt-12 w-auto overflow-hidden"
                     variants={containerVariants}
                  >
                     <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={{
                           delay: 2000,
                           disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        breakpoints={{
                           640: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                           },
                           768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                           },
                           1024: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                           },
                        }}
                        className="w-[90vw] sm:w-[80vw] xl:w-auto mx-auto md:ml-0"
                     >
                        {chineseUniversityLogos.map((image, index) => (
                           <SwiperSlide key={index} className="py-2 md:py-4">
                              <motion.div
                                 custom={index}
                                 variants={logoVariants}
                                 className="flex justify-center items-center"
                              >
                                 <img
                                    src={image}
                                    alt={`Harvard University ${index + 1}`}
                                    className="h-auto w-auto max-h-[40px] md:max-h-none object-contain"
                                 />
                              </motion.div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </motion.div>
               </motion.div>

               {/* Right Content - Hexagon Image */}
               <motion.div
                  className="w-full xl:w-1/2 relative mt-6 md:mt-0"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={imageVariants}
               >
                  <div className="relative">
                     {/* Main image with floating animation */}
                     <motion.div
                        className="relative mx-auto xl:ml-auto z-10 rounded-3xl max-w-[450px] sm:max-w-[550px] xl:max-w-[650px]"
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