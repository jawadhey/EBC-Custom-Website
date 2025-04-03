import { FaArrowRight, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-24 pt-[70px] lg:pt-[70px]">

      <Container>

        <div className="w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full xl:w-1/2 space-y-6">
            <div className="flex w-fit px-4 h-[46px] items-center rounded-full bg-purple-100 border border-purple-200">
              <p className="text-TwPrimaryPurple text-sm font-medium">Best Medical Student Consultant in your City</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 !leading-normal">
              Lorem ipsum dolor sit amet consectetur. Vivamus dignissim.
            </h1>

            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Vitae purus massa felis sed velit urna. Nulla a commodo nulla at
              cras nulla. Maecenas diam.
            </p>

            <div className="flex items-center flex-col md:flex-row gap-6 pt-2">
              <button className="bg-TwPrimaryPurple hover:bg-TwPrimaryPurpleBgHover text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Book Consultation Now
              </button>

              <a
                href="#"
                className="flex items-center text-TwPrimaryPurple font-medium hover:text-purple-800 transition duration-300"
              >
                About Us <FaArrowRight className="ml-2" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="bg-[#ECE5F9] rounded-lg p-4 w-40">
                  <div className="flex items-baseline mb-2">
                    <span className="text-TwPrimaryPurple text-3xl font-bold">15000</span>
                    <span className="text-yellow-500 text-3xl font-bold">+</span>
                  </div>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hexagon Image */}
          <div className="w-full xl:w-1/2 relative">
            <div className="relative">
              {/* Hexagon shape */}
              {/* <div className="absolute inset-0 bg-white rounded-3xl transform rotate-45 scale-[0.7] origin-center -z-10"></div> */}

              {/* Main image */}
              <div className="relative mx-auto xl:ml-auto z-10 rounded-3xl max-w-[500px] xl:max-w-[550px] ">
                <img
                  src={Images.About.AboutHero}
                  alt="Medical Students Consultation"
                  className="w-auto h-auto rounded-3xl object-contain"
                />

               
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default HeroSection

