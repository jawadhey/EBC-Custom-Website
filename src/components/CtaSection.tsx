import { FaArrowRight } from "react-icons/fa"

const CtaSection = () => {
  return (
    <div className="py-16   bg-purple-50 relative overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="#6b46c1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="  mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur. Massa mi.
            </h2>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Quis non leo sit ac tristique. Sed pharetra sodales nullam
              venenatis gravida venenatis sed maecenas tristique. Fringilla eros in malesuada aliquam mauris sed lacus.
              Tempus eu risus est enim cursus. Ipsum nisl nibh quis vulputate sollicitudin arcu adipiscing. Id.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center">
            <img src="/business-man.jpg" alt="Business professional" className="w-full max-w-sm rounded-lg mb-4" />

            <button className="bg-TwPrimaryPurple text-white px-6 py-3 rounded-lg flex items-center hover:bg-TwPrimaryPurpleBgHover transition-colors">
              Contact Us <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection

