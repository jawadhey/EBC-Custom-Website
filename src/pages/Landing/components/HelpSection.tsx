import { FaQuestion, FaLightbulb } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const HelpSection = () => {
  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="  mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#FFC2551A] text-[#FFC255] px-4 h-[44px] flex items-center rounded-full inline-block">
              We are here to help you
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-tight">
            Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.
          </h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image with Chat Bubbles */}
            <div className="relative rounded-2xl overflow-hidden">
              <img src={Images.HelpImage} alt="Students Discussion" className="w-full max-h-[507px] object-contain rounded-2xl" />

              {/* Alen Joe Chat Bubble */}
              {/* <div className="absolute top-1/2 left-8 transform -translate-y-12 bg-white rounded-full py-2 px-4 shadow-md flex items-center max-w-xs">
              <div className="flex-shrink-0 mr-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Alen Joe"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <p className="font-medium text-sm">Alen Joe</p>
                <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="ml-3 bg-yellow-400 rounded-full p-2">
                <FaQuestion className="text-white text-xs" />
              </div>
            </div> */}

              {/* Mary Jane Chat Bubble */}
              {/* <div className="absolute bottom-8 right-8 bg-white rounded-full py-2 px-4 shadow-md flex items-center max-w-xs">
              <div className="mr-3 bg-yellow-400 rounded-full p-2">
                <FaLightbulb className="text-white text-xs" />
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-medium text-sm">Mary Jane</p>
              </div>
              <div className="flex-shrink-0 ml-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Mary Jane"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div> */}
            </div>

            {/* Right Column - Information Cards */}
            <div className="space-y-6">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
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

export default HelpSection

