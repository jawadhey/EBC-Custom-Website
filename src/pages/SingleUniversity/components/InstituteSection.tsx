import { Images } from "../../../assets/images"
import Container from "../../../components/Container"


const InstitutionSection = () => {
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
                  Lorem ipsum dolor sit amet consectetur. Lobortis id nibh urna velit. Lorem pellentesque elementum.
               </h2>

               {/* Main Content Section */}
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Left Column - Image */}
                  <div className="rounded-lg overflow-hidden">
                     <img src={Images.Universities.InstituteMain} alt="Lecture hall with students" className="w-full h-full max-h-[470px] object-cover rounded-lg" />
                  </div>

                  {/* Right Column - Text */}
                  <div className="text-gray-600 space-y-4">
                     <p>
                        Lorem ipsum dolor sit amet consectetur. Nulla amet mattis ut blandit id. Integer quis mauris amet habitant
                        varius suspendisse. Non nulla suspendisse duis placerat. Elit egestas elementum nisi nulla adipiscing
                        libero. Viverra hendrerit massa pellentesque volutpat rhoncus lobortis mattis vel. Sed felis sit arcu
                        tristique amet. Commodo morbi nulla egestas nam semper justo vitae nunc id. Enim lectus orci mauris velit.
                     </p>
                     <p>
                        Rhoncus leo magna tempus fringilla quam suspendisse vestibulum. Sit tempor auctor arcu semper in nibh
                        ullamcorper tortor diam. Ultricies in porta mattis pharetra. In sit ullamcorper gravida enim quisque in
                        vulputate vestibulum laoreet. Commodo et sodales nisl enim leo posuere. Aliquet quam lectus arcu turpis
                        pretium arcu. Id lacus tristique lacus amet adipiscing orci quisque semper porttitor.
                     </p>
                     <p>
                        Et amet leo gravida facilisi. Dui etiam eu massa ipsum. Pretium vel tincidunt vel quis morbi eget.
                        Ullamcorper ipsum erat in urna auctor curabitur id in egestas. Vitae scelerisque lectus odio arcu. Ante
                        cras consequat id cursus. Enim gravida nunc etiam volutpat diam. Ultricies sit volutpat mi tellus semper
                        dolor amet interdum. Blandit diam sem leo habitasse arcu. At dictum morbi suspendisse neque arcu vel
                        pulvinar sit. Praesent cum facilisis rutrum cum imperdiet morbi. Egestas sed maecenas nec amet proin
                        egestas quam cras sit.
                     </p>
                     <p>
                        At hendrerit feugiat aliquam augue. Proin rhoncus faucibus sollicitudin quam. Amet nunc enim malesuada dui
                        lacinia pellentesque. Eget felis accumsan erat ullamcorper consectetur luctus est viverra. Enim sed
                        suscipit quam blandit. Purus.
                     </p>
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

