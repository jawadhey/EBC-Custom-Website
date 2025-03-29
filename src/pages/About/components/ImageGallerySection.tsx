const ImageGallerySection = () => {
   return (
     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-12 gap-4 md:gap-6">
           {/* Top Row */}
           <div className="col-span-12 md:col-span-5">
             <img
               src="/students-discussion.jpg"
               alt="Students discussing"
               className="w-full h-64 md:h-72 object-cover rounded-2xl"
             />
           </div>
 
           <div className="col-span-12 md:col-span-7">
             <img
               src="/laptop-hands.jpg"
               alt="Hands working on laptop"
               className="w-full h-64 md:h-72 object-cover rounded-2xl"
             />
           </div>
 
           {/* Middle Row */}
           <div className="col-span-12 md:col-span-7">
             <img
               src="/cafe-study.jpg"
               alt="Students studying in cafe"
               className="w-full h-64 md:h-72 object-cover rounded-2xl"
             />
           </div>
 
           <div className="col-span-12 md:col-span-5 md:row-span-2">
             <img
               src="/graduation.jpg"
               alt="Student in graduation cap"
               className="w-full h-64 md:h-full object-cover rounded-2xl"
             />
           </div>
 
           {/* Bottom Row */}
           <div className="col-span-12 md:col-span-7">
             <img
               src="/office-study.jpg"
               alt="Students in office"
               className="w-full h-64 md:h-72 object-cover rounded-2xl"
             />
           </div>
         </div>
       </div>
     </div>
   )
 }
 
 export default ImageGallerySection
 
 