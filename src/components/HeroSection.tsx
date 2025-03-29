//@ts-nocheck

// Reusable Hero Section Component
const HeroSection = ({
   badgeText,
   title,
   description,
   buttonText,
   buttonLink,
   backgroundImage,
   overlayColor = "rgba(102, 51, 204, 0.7)", // Default purple overlay
}: any) => {
   return (
      <div className="relative w-full py-24 md:py-32 overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
            <img src={backgroundImage || "/students-group.jpg"} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ backgroundColor: overlayColor }}></div>
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {badgeText && (
               <button className="mb-6 px-6 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
                  {badgeText}
               </button>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h1>

            <p className="text-white text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">{description}</p>

            {buttonText && (
               <a
                  href={buttonLink || "#"}
                  className="inline-block px-8 py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition-colors"
               >
                  {buttonText}
               </a>
            )}
         </div>
      </div>
   )
}

export default HeroSection

