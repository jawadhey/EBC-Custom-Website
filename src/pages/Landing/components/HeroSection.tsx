import { FaArrowRight } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"

const LandingHeroSection = () => {
   return (
      <div className="bg-gradient-to-br from-transparent to-[#ECE5F9] flex items-center justify-center pb-24 pt-[120px] lg:pt-[168px]">
         <Container>

            <div className="w-full mx-auto flex flex-col-reverse xl:flex-row items-center justify-between gap-10">
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

                  <div className="flex items-center flex-wrap gap-x-8 gap-y-4 pt-12 justify-center md:justify-start">
                     {[1, 2, 3].map((item) => (
                        <img key={item} src={Images.HarwardLogo} alt="Harvard University" className="h-12" />
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
                           src={Images.LandingHero}
                           alt="Medical Students Consultation"
                           className="w-auto h-auto rounded-3xl object-contain"
                        />

                        {/* Overlay elements */}
                        {/* <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
                           <FaGraduationCap className="text-TwPrimaryPurple text-xl" />
                        </div>

                        <div className="absolute top-1/4 left-0 transform -translate-x-1/2 translate-y-16 bg-white rounded-full p-3 shadow-md">
                           <FaGraduationCap className="text-TwPrimaryPurple text-xl" />
                        </div>

                        <div className="absolute top-1/4 left-0 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-md w-64 mt-4">
                           <div className="flex items-center">
                              <div className="w-full">
                                 <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                                 <div className="h-2 bg-gray-200 rounded-full"></div>
                              </div>
                           </div>
                        </div> */}

                        {/* <div className="absolute top-1/4 left-0 transform -translate-x-1/2 translate-y-24 bg-white rounded-lg p-4 shadow-md w-64 mt-8">
                           <div className="flex items-center">
                              <div className="w-full">
                                 <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                                 <div className="h-2 bg-gray-200 rounded-full"></div>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </Container>

      </div>
   )
}

export default LandingHeroSection

