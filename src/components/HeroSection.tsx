//@ts-nocheck
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable Hero Section Component
const HeroSection = ({
   badgeText,
   title,
   description,
   buttonText,
   buttonLink,
   backgroundImage,
   overlayColor = "rgba(0, 0, 0, 0.5)", // Default purple overlay
}: any) => {
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
      <div className="relative w-full py-24 md:py-32 overflow-hidden" ref={ref}>
         {/* Animated Background Image with Overlay */}
         <motion.div
            className="absolute inset-0 z-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={backgroundVariants}
         >
            <img
               src={backgroundImage || "/students-group.jpg"}
               alt="Background"
               className="w-full h-full object-cover opacity-50"
            />
            <div
               className="absolute inset-0"
               style={{ backgroundColor: overlayColor }}
            ></div>
         </motion.div>

         {/* Animated Content */}
         <motion.div
            className="relative z-10 max-w-5xl mx-auto text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentContainerVariants}
         >
            {badgeText && (
               <motion.button
                  className="mb-6 px-6 py-2 bg-TwPrimaryPurple text-white rounded-full text-sm font-medium"
                  variants={badgeVariants}
                  whileHover="hover"
               >
                  {badgeText}
               </motion.button>
            )}

            <motion.h1
               className="text-3xl md:text-5xl font-bold text-white mb-6"
               variants={itemVariants}
            >
               {title}
            </motion.h1>

            <motion.p
               className="text-white text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10"
               variants={itemVariants}
            >
               {description}
            </motion.p>

            {buttonText && (
               <motion.a
                  href={buttonLink || "#"}
                  className="inline-block px-8 py-3 bg-TwPrimaryPurple text-white rounded-md font-medium hover:bg-TwPrimaryPurpleBgHover transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
               >
                  {buttonText}
               </motion.a>
            )}
         </motion.div>
      </div>
   );
};

export default HeroSection;