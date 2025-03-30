import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { FaArrowRight, FaStethoscope, FaHardHat, FaPills, FaFlag } from "react-icons/fa"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Container from "../../../components/Container"

const ServicesSection = () => {
  const services = [
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "MBBS in China",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
    },
    {
      icon: <FaHardHat className="text-white text-2xl" />,
      title: "PFP for Engineers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
    },
    {
      icon: <FaPills className="text-white text-2xl" />,
      title: "MD in Europe",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
    },
    {
      icon: <FaFlag className="text-white text-2xl" />,
      title: "Study in USA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
    },
    {
      icon: <FaStethoscope className="text-white text-2xl" />,
      title: "MBBS in Australia",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu.",
    },
  ]

  return (
    <div className="py-16">
      <Container>

        <div className="  mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Our Services</h2>

          {/* Subheading */}
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus
          </p>

          {/* Services Swiper */}
          <Swiper
            slidesPerView={1}
            // spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
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
            modules={[Pagination, Navigation]}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-TwBoxShadow p-6 h-full flex flex-col">
                  <div className="bg-TwPrimaryPurple w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>

                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <a
                    href="#"
                    className="text-TwPrimaryPurple font-medium flex items-center hover:text-purple-700 transition-colors"
                  >
                    View More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center items-center mt-10 space-x-2"></div>
        </div>
      </Container>

    </div>
  )
}

export default ServicesSection

