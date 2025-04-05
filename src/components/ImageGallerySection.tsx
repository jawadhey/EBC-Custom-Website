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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  // Individual image animation variants
  const imageVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="py-16 bg-amber-50" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Top Row */}
            <motion.div
              className="col-span-12 md:col-span-4 max-h-[500px]"
              variants={imageVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={Images.About.AboutGallery2 || "/placeholder.svg"}
                alt="Students discussing"
                className="w-auto h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-8 max-h-[500px]"
              variants={imageVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={Images.About.AboutGallery3 || "/placeholder.svg"}
                alt="Hands working on laptop"
                className="w-auto h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            {/* Middle Row */}
            <motion.div
              className="col-span-12 md:col-span-7 mt-5"
              variants={imageVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={Images.About.AboutGallery4 || "/placeholder.svg"}
                alt="Students studying in cafe"
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-5 md:row-span-2 mt-5"
              variants={tallImageVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                src={Images.About.AboutGallery5 || "/placeholder.svg"}
                alt="Student in graduation cap"
                className="w-full max-h-[700px] h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              className="col-span-12 md:col-span-7"
              variants={imageVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={Images.About.AboutGallery4 || "/placeholder.svg"}
                alt="Students in office"
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ImageGallerySection

