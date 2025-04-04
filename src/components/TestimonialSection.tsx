import { FaPlay } from "react-icons/fa"
import Container from "./Container"
import { Images } from "../assets/images"

const TestimonialVideoSection = ({ Text }: any) => {
  return (
    <div className="py-16 bg-purple-50">
      <Container>

        <div className="mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Column - Video */}
            <div className="relative col-span-7">
              <img src={Images.About.Graduate} alt="Students in library" className="w-full h-auto object-cover max-h-[400px] rounded-2xl" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                  <FaPlay className="text-TwPrimaryPurple ml-1" />
                </button>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="col-span-5">
              <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-500 text-sm mb-6">
                There's a good word for us out there
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">What our students say about us</h2>

              <p className="text-gray-600">
                {Text || ''}

              </p>
            </div>
          </div>
        </div>

      </Container>

    </div>
  )
}

export default TestimonialVideoSection

