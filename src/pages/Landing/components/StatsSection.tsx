import Container from "../../../components/Container"

const StatsSection = () => {
   return (
      <div className="py-16 lg:py-32   bg-white">
         <Container>

         <div className="mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-16 max-w-3xl mx-auto">
               Lorem ipsum dolor sit amet consectetur. Sem faucibus.
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Stat 1 */}
               <div className="flex flex-col items-center text-center relative">
                  <div className="flex items-baseline mb-2">
                     <span className="text-TwPrimaryPurple text-5xl font-bold">15000</span>
                     <span className="text-yellow-500 text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-4">Students</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>

                  {/* Right divider (visible only on desktop) */}
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200 h-full"></div>
               </div>

               {/* Stat 2 */}
               <div className="flex flex-col items-center text-center relative">
                  <div className="flex items-baseline mb-2">
                     <span className="text-TwPrimaryPurple text-5xl font-bold">15000</span>
                     <span className="text-yellow-500 text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-4">Students</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>

                  {/* Right divider (visible only on desktop) */}
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200 h-full"></div>
               </div>

               {/* Stat 3 */}
               <div className="flex flex-col items-center text-center">
                  <div className="flex items-baseline mb-2">
                     <span className="text-TwPrimaryPurple text-5xl font-bold">15000</span>
                     <span className="text-yellow-500 text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-4">Students</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
               </div>
            </div>
         </div>
         </Container>

      </div>
   )
}

export default StatsSection

