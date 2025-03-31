import { FaGraduationCap } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const GraduatesSection = () => {
  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="  mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block">
              Looking back, we have come a long way
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.
          </h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <img src={Images.About.Graduate} alt="Graduates taking selfie" className="w-full h-full max-h-[470px] object-cover rounded-2xl" />

              {/* Overlay */}
              <div className="absolute bottom-6 left-0 mx-auto justify-center xl:left-1/2 transform xl:-translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src={Images.About.Graduate}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Our Graduates Get-together</p>
                  <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ml-3 bg-gray-100 rounded-full p-2">
                  <FaGraduationCap className="text-gray-600 text-xs" />
                </div>
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-6">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Arcu quam mauris ornare senectus tortor sit. Quisque sed
                    facilisis aenean adipiscing pulvinar nunc et. Lectus a ac.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default GraduatesSection

