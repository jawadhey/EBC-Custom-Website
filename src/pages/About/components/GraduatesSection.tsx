import { FaGraduationCap } from "react-icons/fa"

const GraduatesSection = () => {
  return (
    <div className="py-16   bg-white">
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
            <img src="/graduates-selfie.jpg" alt="Graduates taking selfie" className="w-full h-auto rounded-2xl" />

            {/* Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center max-w-xs">
              <div className="flex-shrink-0 mr-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
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
    </div>
  )
}

export default GraduatesSection

