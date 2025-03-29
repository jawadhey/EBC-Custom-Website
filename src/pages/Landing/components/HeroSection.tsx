import { FaArrowRight } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"

const LandingHeroSection = () => {
   return (
      <div className=" bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
               <div className="inline-block px-4 py-1 rounded-full bg-purple-100 border border-purple-200">
                  <p className="text-purple-600 text-sm font-medium">Best Medical Student Consultant in your City</p>
               </div>

               <h1 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
                  Lorem ipsum dolor sit amet consectetur. Vivamus dignissim.
               </h1>

               <p className="text-gray-600 max-w-xl">
                  Lorem ipsum dolor sit amet consectetur. Vitae purus massa felis sed velit urna. Nulla a commodo nulla at
                  cras nulla. Maecenas diam.
               </p>

               <div className="flex items-center space-x-6 pt-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                     Book Consultation Now
                  </button>

                  <a
                     href="#"
                     className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                  >
                     About Us <FaArrowRight className="ml-2" />
                  </a>
               </div>

               <div className="flex items-center space-x-8 pt-8">
                  {[1, 2, 3].map((item) => (
                     <img key={item} src="/harvard-logo.png" alt="Harvard University" className="h-12" />
                  ))}
               </div>
            </div>

            {/* Right Content - Hexagon Image */}
            <div className="w-full lg:w-1/2 relative">
               <div className="relative">
                  {/* Hexagon shape */}
                  <div className="absolute inset-0 bg-white rounded-3xl transform rotate-45 scale-[0.7] origin-center -z-10"></div>

                  {/* Main image */}
                  <div className="relative z-10 rounded-3xl overflow-hidden">
                     <img
                        src="/medical-students.jpg"
                        alt="Medical Students Consultation"
                        className="w-full h-auto rounded-3xl"
                     />

                     {/* Overlay elements */}
                     <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
                        <FaGraduationCap className="text-purple-500 text-xl" />
                     </div>

                     <div className="absolute top-1/4 left-0 transform -translate-x-1/2 translate-y-16 bg-white rounded-full p-3 shadow-md">
                        <FaGraduationCap className="text-purple-500 text-xl" />
                     </div>

                     <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-md w-64 mt-4">
                        <div className="flex items-center">
                           <div className="w-full">
                              <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                              <div className="h-2 bg-gray-200 rounded-full"></div>
                           </div>
                        </div>
                     </div>

                     <div className="absolute top-1/4 left-0 transform -translate-x-1/2 translate-y-24 bg-white rounded-lg p-4 shadow-md w-64 mt-8">
                        <div className="flex items-center">
                           <div className="w-full">
                              <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                              <div className="h-2 bg-gray-200 rounded-full"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LandingHeroSection

