import { Images } from "../../../assets/images"
import Container from "../../../components/Container"


const InstitutionSection = ({ Heading, Text }: any) => {
   return (
      <div className="py-16 bg-white">
         <Container>

            <div className="mx-auto">
               {/* Top Badge */}
               <div className="flex justify-center mb-6">
                  <div className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full inline-block">
                     Know about the institution
                  </div>
               </div>

               {/* Main Heading */}
               <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-tight">
                  {Heading || 'Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.'}
               </h2>

               {/* Main Content Section */}
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Left Column - Image */}
                  <div className="rounded-lg overflow-hidden">
                     <img src={Images.Universities.InstituteMain} alt="Lecture hall with students" className="w-full h-full max-h-[470px] object-cover rounded-lg" />
                  </div>

                  {/* Right Column - Text */}
                  <div className="text-gray-600 space-y-4">
                     {Text}
                  </div>
               </div>

               {/* Image Gallery */}
               <div className="bg-purple-50 p-8 rounded-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     <div className="rounded-lg overflow-hidden">
                        <img src={Images.Universities.InstituteMain} alt="Graduates throwing caps" className="w-full h-60 object-cover" />
                     </div>
                     <div className="rounded-lg overflow-hidden">
                        <img src={Images.Universities.InstituteMain} alt="University building" className="w-full h-60 object-cover" />
                     </div>
                     <div className="rounded-lg overflow-hidden">
                        <img src={Images.Universities.InstituteMain} alt="Students in lecture hall" className="w-full h-60 object-cover" />
                     </div>
                     <div className="rounded-lg overflow-hidden">
                        <img src={Images.Universities.InstituteMain} alt="Academics sign with graduates" className="w-full h-60 object-cover" />
                     </div>
                  </div>
               </div>
            </div>
         </Container>

      </div>
   )
}

export default InstitutionSection

