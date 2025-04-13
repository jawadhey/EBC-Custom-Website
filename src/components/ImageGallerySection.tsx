"use client"

import { Images } from "../assets/images"
import Container from "./Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ImageGallerySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Individual image animation variants
  const imageVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Special animation for the tall image
  const tallImageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="py-8 md:py-16 bg-amber-50" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
            {/* Top Row - Full width on mobile, split on larger screens */}
            <motion.div
              className="sm:col-span-2 lg:col-span-7 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <img
                src={Images.About.AboutGallery2 || "/placeholder.svg"}
                alt="Students discussing"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="sm:col-span-2 lg:col-span-5 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <img
                src={Images.About.AboutGallery3 || "/placeholder.svg"}
                alt="Hands working on laptop"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
            </motion.div>

            {/* Middle Row - Tall image on right */}
            <motion.div
              className="sm:col-span-2 lg:col-span-7 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <img
                src={Images.About.AboutGallery4 || "/placeholder.svg"}
                alt="Students studying in cafe"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="sm:col-span-2 lg:col-span-5 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <img
                src={Images.About.AboutGallery5 || "/placeholder.svg"}
                alt="Hands working on laptop"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
            </motion.div>
          

            {/* Bottom Row - Full width */}
            <motion.div
              className="sm:col-span-2 lg:col-span-12 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <img
                src={Images.About.AboutGallery1 || "/placeholder.svg"}
                alt="Students in office"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ImageGallerySection