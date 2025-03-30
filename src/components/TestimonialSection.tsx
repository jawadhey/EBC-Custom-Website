import { FaPlay } from "react-icons/fa"

const TestimonialVideoSection = () => {
  return (
    <div className="py-16   bg-purple-50">
      <div className="  mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Video */}
          <div className="relative">
            <img src="/students-library.jpg" alt="Students in library" className="w-full h-auto rounded-2xl" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                <FaPlay className="text-TwPrimaryPurple ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-500 text-sm mb-6">
              There's a good word for us out there
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">What our students say about us</h2>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tellus augue libero convallis a. Elementum enim turpis aliquam
              porta sollicitudin nam. Turpis eu aliquet purus dolor egestas neque mauris. Pellentesque faucibus viverra
              risus elit commodo augue bibendum nulla est. Suspendisse lorem egestas urna et ornare accumsan mauris
              vitae nunc. Ac lobortis morbi ullamcorper convallis fames mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialVideoSection

