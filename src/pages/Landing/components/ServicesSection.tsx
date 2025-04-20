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
import { Images } from "../../../assets/images"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const serviceCardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: any) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <FaStethoscope className="text-white text-xl" />,
      title: "MBBS in China",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      image: Images.Services.Service4,
    },
    {
      icon: <FaHardHat className="text-white text-xl" />,
      title: "PFP for Engineers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service3,

    },
    {
      icon: <FaPills className="text-white text-xl" />,
      title: "MD in Europe",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service1,

    },
    {
      icon: <FaFlag className="text-white text-xl" />,
      title: "Study in USA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service2,

    },
    {
      icon: <FaStethoscope className="text-white text-xl" />,
      title: "MBBS in Australia",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service1,

    },
    {
      icon: <FaPills className="text-white text-xl" />,
      title: "MD in Europe",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service3,

    },
    {
      icon: <FaFlag className="text-white text-xl" />,
      title: "Study in USA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service4,

    },
    {
      icon: <FaStethoscope className="text-white text-xl" />,
      title: "MBBS in Australia",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
      // image: "/placeholder.svg?height=192&width=384",
      image: Images.Services.Service2,

    },
  ]

  return (
    <div className="py-8 md:py-16 overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
            variants={itemVariants}
          >
            Explore our wide range of academic programs and global opportunities tailored to shape your professional
            journey and future success.
          </motion.p>

          {/* Services Swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="services-swiper px-2 sm:px-0"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col relative"
                  variants={serviceCardVariants}
                  custom={index}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Background Image */}
                  <div className="w-full h-48 relative">
                    <img
                      // src={`/placeholder.svg?height=192&width=384`}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Icon Badge */}
                    <div className="absolute bottom-0 translate-y-1/2 left-4 bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-5 mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>

                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                    <a
                      href="#"
                      className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors text-sm"
                    >
                      View More <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <motion.div
            className="swiper-pagination flex justify-center items-center mt-8 sm:mt-10 space-x-2"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ServicesSection
