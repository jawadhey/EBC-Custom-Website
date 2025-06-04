import { FaArrowRight } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'


import uni1 from '../../../assets/logos/ncus.png'
import uni2 from '../../../assets/logos/kust.png'
import uni3 from '../../../assets/logos/Birmingham_City_University_Logo.png'
import uni4 from '../../../assets/logos/eeu.png'
import uni5 from '../../../assets/logos/gmc.png'
import uni6 from '../../../assets/logos/Logo-UB.jpg'
import uni7 from '../../../assets/logos/Ulaw BS Logo.png'
import uni8 from '../../../assets/logos/belarusian-state-university-logo-png_seeklogo-484456.png'
import uni9 from '../../../assets/logos/logo-en_1738066967.png'
import uni10 from '../../../assets/logos/nakhvhivan.png'

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

   // University logos array
   const chineseUniversityLogos = [
      uni1, uni2, uni3, uni4, uni5,
      uni6, uni7, uni8, uni9, uni10,
   ];

   const backgroungImages = [
      Images.Landing.Hero1,
      Images.Landing.Hero2,
      Images.Landing.Hero3,
      Images.Landing.Hero4,
      Images.Landing.Hero5,
      Images.Landing.Hero6,
      Images.Landing.Hero7,
   ]

   return (
      <div
         className="relative w-full h-fit overflow-hidden"
         ref={ref}
         style={{ paddingTop: "100px", paddingBottom: "40px" }}
      >
         {/* Background Slider */}
         <div className="absolute top-0 left-0 w-full h-full">
            <Swiper
               modules={[Autoplay, EffectFade]}
               effect="fade"
               speed={2500}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               loop={true}
               className="w-full h-full"
            >
               {backgroungImages.map((item, index) =>
                  <SwiperSlide className="w-full h-full" key={index}>
                     <img
                        src={item}
                        alt="Hero Background 1"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  </SwiperSlide>
               )}

            </Swiper>
         </div>

         {/* Content */}
         <Container className="relative z-40 h-full pt-16 lg:pt-20">
            <div className="w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-3 md:gap-10">
               {/* Left Content */}
               <motion.div
                  className="w-full xl:w-1/2 space-y-4 md:space-y-6 z-40"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={containerVariants}
               >
                  <motion.div
                     className="flex w-fit px-3 md:px-4 h-[30px] md:h-[46px] items-center rounded-full bg-purple-100 border border-purple-200"
                     variants={itemVariants}
                  >
                     <p className="text-TwPrimaryPurple text-xs md:text-sm font-medium">Best Student Consultant in your City</p>
                  </motion.div>

                  <motion.h1
                     className="text-3xl sm:text-4xl md:text-5xl font-bold text-white !leading-[1.3] md:!leading-normal"
                     variants={itemVariants}
                  >
                     Your Trusted Guide to Study Abroad
                  </motion.h1>

                  <motion.p
                     className="text-gray-200 max-w-xl text-sm md:text-base !leading-relaxed"
                     variants={itemVariants}
                  >
                     Helping FSC Students Achieve Their Dream of Studying Abroad! <br />
                     Secure admission to top international universities with expert guidance and a smooth application process. Whether you're pursuing medicine, engineering, business, or more, we'll help you earn a globally recognized degree. Guaranteed admission, affordable tuition, and full visa support—your global journey begins here.
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
                        className="flex items-center text-white font-medium hover:text-purple-200 transition duration-300 text-sm md:text-base"
                        whileHover={{ x: 5 }}
                     >
                        About Us <FaArrowRight className="ml-2" />
                     </motion.a>
                  </motion.div>

                  {/* University Logo Swiper */}
                  <motion.div
                     className="pt-8 md:pt-12 w-auto overflow-hidden rounded-lg p-4"
                     variants={containerVariants}
                  >
                     <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        autoplay={{
                           delay: 2000,
                           disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        breakpoints={{
                           640: {
                              slidesPerView: 2,
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
                                    alt={`University Logo ${index + 1}`}
                                    className="h-auto w-auto !max-h-[100px] !max-w-[180px] md:max-h-none object-contain"
                                 />
                              </motion.div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </motion.div>
               </motion.div>

               {/* Right Content - Student Image */}
               {/* <motion.div
                  className="w-full xl:w-1/2 relative mt-6 md:mt-0"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={imageVariants}
               >
                  <div className="relative">
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
               </motion.div> */}
            </div>
         </Container>
      </div>
   )
}

export default LandingHeroSection