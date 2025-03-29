import { FaLightbulb } from "react-icons/fa"

const HeroSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-block px-6 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              Get to Know Us Better
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight mb-6">
              Lorem ipsum dolor sit amet consectetur. Vivamus dignissim.
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Vel dui molestie tempor elementum gravida nibh vitae ullamcorper
              ac. Molestie sit phasellus faucibus urna urna in phasellus nullam amet.
            </p>

            <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors mb-12">
              Book Consultation Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 w-40">
                  <div className="flex items-baseline mb-2">
                    <span className="text-purple-600 text-3xl font-bold">15000</span>
                    <span className="text-yellow-500 text-3xl font-bold">+</span>
                  </div>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/students-discussion.jpg"
              alt="Students Discussion"
              className="rounded-2xl w-full h-auto z-10 relative"
            />

            {/* UI Elements Overlay */}
            <div className="absolute top-1/4 right-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaLightbulb className="text-purple-600" />
                </div>
              </div>
              <div className="w-24 h-2 bg-purple-600 rounded-full"></div>
            </div>

            <div className="absolute bottom-1/4 right-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg z-20 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-yellow-600 text-xs">🔔</span>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

