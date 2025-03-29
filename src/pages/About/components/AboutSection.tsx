const AboutUsSection = () => {
   return (
     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
       <div className="max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 gap-8 items-start">
           {/* Left Image */}
           <div>
             <img src="/student-reading.jpg" alt="Student reading in library" className="w-full h-auto rounded-2xl" />
           </div>
 
           {/* Right Content */}
           <div>
             <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm mb-6">
               You can describe us as
             </div>
 
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
 
             <div className="space-y-4 text-gray-600">
               <p>
                 Lorem ipsum dolor sit amet consectetur. Tellus augue libero convallis a. Elementum enim turpis aliquam
                 porta sollicitudin nam. Turpis eu aliquet purus dolor egestas neque mauris. Pellentesque faucibus
                 viverra risus elit commodo augue bibendum nulla est. Suspendisse lorem egestas urna et ornare accumsan
                 mauris vitae nunc. Ac lobortis morbi ullamcorper convallis fames mauris.
               </p>
               <p>
                 Vulputate proin rutrum posuere quis facilisi. Amet egestas pharetra nibh placerat aenean sit tincidunt
                 fermentum interdum. Senectus rhoncus nulla viverra eros id viverra sit fringilla. Urna faucibus eget
                 nisi nunc tellus sed risus. Vel lacinia faucibus mauris fames. Mauris diam pellentesque diam posuere
                 duis posuere. Tellus nulla a neque sed sed dui libero orci. Risus commodo nulla quis purus sed eget in
                 euismod eu. Facilisi faucibus dictum amet cras semper urna. Eu sit vitae nibh luctus. Vel erat faucibus
                 augue faucibus dignissim elementum. Vel dui arcu neque id a nunc praesent. Sed aenean neque nibh
                 consequat duis. Malesuada augue morbi neque nunc vitae in malesuada sed maecenas.
               </p>
               <p>
                 Id proin non arcu quam. Et platea nunc risus ullamcorper tincidunt mauris proin egestas neque. Nec
                 ornare.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   )
 }
 
 export default AboutUsSection
 
 