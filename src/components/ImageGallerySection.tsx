"use client"

import { useState, useEffect } from "react"
import { Images } from "../assets/images"
import Container from "./Container"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"

// Import EBC images
import ebcImage1 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.04 PM (1).jpeg"
import ebcImage2 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.04 PM.jpeg"
import ebcImage3 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.05 PM (1).jpeg"
import ebcImage4 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.05 PM.jpeg"
import ebcImage5 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.06 PM (1).jpeg"
import ebcImage6 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.06 PM (2).jpeg"
import ebcImage7 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.06 PM.jpeg"
import ebcImage8 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.07 PM (1).jpeg"
import ebcImage9 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.07 PM.jpeg"
import ebcImage10 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.08 PM (1).jpeg"
import ebcImage11 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.08 PM (2).jpeg"
import ebcImage12 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.08 PM.jpeg"
import ebcImage13 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.09 PM (1).jpeg"
import ebcImage14 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.09 PM (2).jpeg"
import ebcImage15 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.09 PM.jpeg"
import ebcImage16 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.10 PM (1).jpeg"
import ebcImage17 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.10 PM.jpeg"
import ebcImage18 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.11 PM (1).jpeg"
import ebcImage19 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.11 PM.jpeg"
import ebcImage20 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.12 PM (1).jpeg"
import ebcImage21 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.12 PM.jpeg"
import ebcImage22 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.13 PM (1).jpeg"
import ebcImage23 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.13 PM (2).jpeg"
import ebcImage24 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.13 PM.jpeg"
import ebcImage25 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.14 PM (1).jpeg"
import ebcImage26 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.14 PM (2).jpeg"
import ebcImage27 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.14 PM.jpeg"
import ebcImage28 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.15 PM (1).jpeg"
import ebcImage29 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.15 PM (2).jpeg"
import ebcImage30 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.15 PM.jpeg"
import ebcImage31 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.16 PM.jpeg"
import ebcImage32 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.18 PM.jpeg"
import ebcImage33 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.19 PM.jpeg"
import ebcImage34 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.20 PM (1).jpeg"
import ebcImage35 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.20 PM.jpeg"
import ebcImage36 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.21 PM (1).jpeg"
import ebcImage37 from "../assets/images/ebc/WhatsApp Image 2025-06-15 at 9.08.21 PM.jpeg"

const allImages = [
  ebcImage1, ebcImage2, ebcImage3, ebcImage4, ebcImage5, ebcImage6, ebcImage7,
  ebcImage8, ebcImage9, ebcImage10, ebcImage11, ebcImage12, ebcImage13, ebcImage14,
  ebcImage15, ebcImage16, ebcImage17, ebcImage18, ebcImage19, ebcImage20, ebcImage21,
  ebcImage22, ebcImage23, ebcImage24, ebcImage25, ebcImage26, ebcImage27, ebcImage28,
  ebcImage29, ebcImage30, ebcImage31, ebcImage32, ebcImage33, ebcImage34, ebcImage35,
  ebcImage36, ebcImage37
]

const ImageGallerySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'Escape') setIsGalleryOpen(false)
  }

  // Add keyboard event listeners
  useEffect(() => {
    if (isGalleryOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isGalleryOpen])

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
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
            {/* First 4 images */}
            {allImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                className={`${index === 0 || index === 2 ? 'sm:col-span-2 lg:col-span-7' : 'sm:col-span-2 lg:col-span-5'} h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer`}
                variants={imageVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`EBC Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                  loading="lazy"
                />
              </motion.div>
            ))}

            {/* Last image with plus icon */}
            <motion.div
              className="sm:col-span-2 lg:col-span-12 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative cursor-pointer"
              variants={imageVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => handleImageClick(4)}
            >
              <img
                src={allImages[4]}
                alt="EBC Image 5"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-sm"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl md:rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <FaPlus className="w-12 h-12 text-white mx-auto mb-2" />
                  <span className="text-white text-xl font-semibold">
                    +{allImages.length - 5} more images
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Full-screen Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <FaTimes size={24} />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-gray-300"
            >
              <FaChevronLeft size={32} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={allImages[currentImageIndex]}
              alt={`EBC Image ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-gray-300"
            >
              <FaChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 text-white text-center w-full">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageGallerySection