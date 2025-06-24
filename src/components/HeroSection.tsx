import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroSectionProps {
   badgeText?: string;
   title: string;
   description: string;
   buttonText?: string;
   buttonLink?: string;
   backgroundImage?: string;
   overlayColor?: string;
   isSingleUniversity?: boolean
   position?: string
}

const HeroSection = ({
   badgeText,
   title,
   description,
   buttonText,
   buttonLink = "#",
   backgroundImage = "/students-group.jpg",
   isSingleUniversity,
   position,
   overlayColor = "rgba(67, 56, 202, 0.5)", // Purple overlay with 50% opacity
}: HeroSectionProps) => {
   const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });

   // Animation variants
   const backgroundVariants = {
      hidden: { scale: 1.1, opacity: 0.8 },
      visible: {
         scale: 1,
         opacity: 1,
         transition: {
            duration: 1.2,
            ease: "easeOut",
         },
      },
   };

   const contentContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
         },
      },
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   };

   const buttonVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
      hover: {
         scale: 1.05,
         boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
         transition: {
            duration: 0.2,
         },
      },
   };

   const badgeVariants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
         scale: 1,
         opacity: 1,
         transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
         },
      },
      hover: {
         y: -3,
         transition: {
            duration: 0.2,
         },
      },
   };

   return (
      <section className="relative w-full py-10 md:py-24 lg:py-32 overflow-hidden" ref={ref}>
         {/* Animated Background Image with Overlay */}
         <motion.div
            className="absolute inset-0 z-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={backgroundVariants}
         >
            <img
               src={backgroundImage}
               alt="Students studying together"
               className={`w-full h-full object-cover ${
                  position === 'bottom' ? 'object-bottom' : 
                  position === 'center' ? 'object-center' : 'object-top'
               }`}
               loading="eager"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div
               className="absolute inset-0"
               style={{ backgroundColor: isSingleUniversity ? overlayColor : '' }}
               aria-hidden="true"
            ></div>
         </motion.div>

         {/* Animated Content */}
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               className="relative z-10 max-w-5xl mx-auto text-center"
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               variants={contentContainerVariants}
            >
               {badgeText && (
                  <motion.div
                     className="mb-4 md:mb-6"
                     variants={badgeVariants}
                  >
                     <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-TwPrimaryPurple text-white rounded-full text-xs md:text-sm font-medium">
                        {badgeText}
                     </span>
                  </motion.div>
               )}

               <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 !leading-tight"
                  variants={itemVariants}
               >
                  {title}
               </motion.h1>

               <motion.p
                  className="text-white text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-10 !leading-relaxed"
                  variants={itemVariants}
               >
                  {description}
               </motion.p>

               {buttonText && (
                  <motion.div variants={buttonVariants}>
                     <a
                        href={buttonLink}
                        className="inline-block px-6 py-2 md:px-8 md:py-3 bg-TwPrimaryPurple text-white rounded-md font-medium hover:bg-TwPrimaryPurpleBgHover transition-colors text-sm md:text-base"
                     >
                        {buttonText}
                     </a>
                  </motion.div>
               )}
            </motion.div>
         </div>
      </section>
   );
};

export default HeroSection;