import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { FaArrowRight, FaStethoscope, FaHardHat, FaPills, FaFlag } from "react-icons/fa"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Container from "../../../components/Container"

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

const serviceCardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: any) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "anticipate"
    }
  }
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "MBBS in China",
      description:
        "Get globally recognized medical education at affordable costs, with modern facilities and English-taught programs.",
    },
    {
      icon: <FaHardHat className="text-white text-2xl" />,
      title: "PFP for Engineers",
      description:
        "A pre-foundation program designed to help aspiring engineers meet academic and language requirements for international universities.",
    },
    {
      icon: <FaPills className="text-white text-2xl" />,
      title: "MD in Europe",
      description:
        "Study medicine in top-tier European universities with world-class faculty, clinical exposure, and global career opportunities.",
    },
    {
      icon: <FaFlag className="text-white text-2xl" />,
      title: "Study in USA",
      description:
        "Pursue your academic dreams in the USA with guidance on admission, visa process, and choosing the right university.",
    },
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "MBBS in Australia",
      description:
        "Access high-quality medical education in Australia, known for its research excellence and modern clinical training.",
    },
    {
      icon: <FaPills className="text-white text-2xl" />,
      title: "MD in Europe",
      description:
        "Enroll in structured MD programs across Europe with globally respected degrees and hands-on experience in advanced hospitals.",
    },
    {
      icon: <FaFlag className="text-white text-2xl" />,
      title: "Study in USA",
      description:
        "Explore undergraduate and graduate programs in the USA, with full support from application to arrival.",
    },
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "MBBS in Australia",
      description:
        "Join top-ranked medical schools in Australia with a focus on innovation, practical learning, and international recognition.",
    },
  ];


  return (
    <div className="py-16 overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Explore our wide range of academic programs and global opportunities tailored to shape your professional journey and future success.
          </motion.p>

          {/* Services Swiper */}
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,

            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded-lg shadow-TwBoxShadow p-6 h-full flex flex-col"
                  variants={serviceCardVariants}
                  custom={index}
                  whileHover={{
                    y: -5,
                    // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="bg-TwPrimaryPurple w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                    variants={iconVariants}
                  // whileHover={{
                  //   rotate: [0, -10, 10, -5, 0],
                  //   transition: { duration: 0.5 }
                  // }}
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-4"
                    variants={itemVariants}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-6 flex-grow"
                    variants={itemVariants}
                  >
                    {service.description}
                  </motion.p>

                  <motion.a
                    href="#"
                    className="text-TwPrimaryPurple font-medium flex items-center hover:text-purple-700 transition-colors"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    View More <FaArrowRight className="ml-2" />
                  </motion.a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <motion.div
            className="swiper-pagination flex justify-center items-center mt-10 space-x-2"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ServicesSection