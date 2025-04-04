import { FaArrowRight } from "react-icons/fa"
import { Images } from "../assets/images"
import Container from "./Container"

const CtaSection = ({ backgroundImage, Heading, Text }: any) => {
  return (
    <Container>

      <div className="py-16 bg-purple-50 overflow-hidden relative">
        <img src={backgroundImage || Images.About.ContactBg} className="absolute object-cover left-0 top-0 w-full h-full z-10" />


        <div className="z-20  mx-auto relative px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="col-span-full lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                {Heading || 'Lorem'}
              </h2>

              <p className="text-gray-600 mb-8">
                {Text || 'Lorem'}
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center col-span-full lg:col-span-4">
              <img src={Images.About.Contact} alt="Business professional" className="w-full max-h-[200px] max-w-[200px] h-full rounded-lg mb-4" />

              <button className="bg-TwPrimaryPurple text-white px-6 py-3 rounded-lg flex items-center hover:bg-TwPrimaryPurpleBgHover transition-colors">
                Contact Us <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </Container>

  )
}

export default CtaSection

