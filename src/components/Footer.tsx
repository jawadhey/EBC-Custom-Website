"use client"

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Container from "./Container"
import { universities } from "../constant"
import { Icons } from "../assets/icons"
import { Link } from "react-router-dom"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
}

const socialIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  }
}

const mapVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const FooterSection = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false
  })

  const programs = [
    {
      title: "MBBS in China",
      path: "/mbbs-in-china"
    },
    {
      title: "MD in Europe",
      path: "/md-in-europe"
    },
    {
      title: "Study in UK",
      path: "/study-in-uk"
    },
    {
      title: "Study in Europe",
      path: "/study-in-europe"
    },
    {
      title: "PFP for Engineers",
      path: "/pfp-for-engineers"
    },
    {
      title: "Bar-at-law",
      path: "/bar-at-law"
    },
    {
      title: "MOE Listed Universities",
      path: "/moe-listed-universities"
    }
  ]

  return (
    <motion.footer
      className="bg-gradient-to-r mx-4 my-8 lg:mx-8 from-[#000] to-[#282828] text-white rounded-2xl lg:rounded-3xl overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mx-auto sm:px-6 py-8 sm:py-12">
        <Container>
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-6 items-center mb-6 sm:mb-8">
            <motion.div variants={textVariants} className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Get our <span className="text-TwPrimaryPurple">latest updates</span> to connect with us and write your own{" "}
                <span className="text-yellow-500">future.</span>
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              variants={itemVariants}
            >
              <motion.input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple text-sm sm:text-base"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.5)"
                }}
              />
              <Link to="/contact-us">
                <motion.button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-TwPrimaryPurple text-white font-medium rounded-lg hover:bg-TwPrimaryPurpleBgHover transition-colors whitespace-nowrap text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-700 my-6 sm:my-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Middle Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            {/* Company Info */}
            <motion.div
              className="lg:col-span-3"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center mb-4 sm:mb-6"
                whileHover={{ x: 5 }}
              >
                <motion.img
                  src={Icons.Brand.NavLogo}
                  className="w-[90px] h-[90px]"
                  alt="Logo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  className="flex items-center text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-TwPrimaryPurple mr-3 flex-shrink-0" />
                  <span>0330 9999933</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-TwPrimaryPurple mr-3 flex-shrink-0" />
                  <span>info@ebcworldwide.com</span>
                </motion.div>
                <motion.div
                  className="flex items-start text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-TwPrimaryPurple mr-3 mt-1 flex-shrink-0" />
                  <span>Office No. 15, 1st Floor, Pakland Business Centre, I8 Markaz Islamabad</span>
                </motion.div>
                <motion.div
                  className="flex items-start text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-TwPrimaryPurple mr-3 mt-1 flex-shrink-0" />
                  <span>Office #1, 2nd floor, Azam tower, Arbab Road stop, University Road Peshawar</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.h3
                className="text-yellow-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {['Home', 'About Us', 'Universities', 'Events'].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      color: "#a78bfa"
                    }}
                    className="text-sm sm:text-base"
                  >
                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-400 transition-colors">
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Universities */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.h3
                className="text-yellow-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
              >
                Universities
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {universities.slice(0, 3).map((university: any, index: any) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      color: "#a78bfa"
                    }}
                    className="text-sm sm:text-base"
                  >
                    <Link to={`/university-detail/${university.id}`} className="hover:text-purple-400 transition-colors">
                      {university.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.h3
                className="text-yellow-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
              >
                Programs
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {programs.map((program, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      color: "#a78bfa"
                    }}
                    className="text-sm sm:text-base"
                  >
                    <Link to={program.path} className="hover:text-purple-400 transition-colors">
                      {program.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="lg:col-span-3 sm:col-span-2"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center mb-3 sm:mb-4"
                whileHover={{ x: 5 }}
              >
                <span className="text-yellow-500 text-lg sm:text-xl mr-2">📅</span>
                <motion.h3
                  className="text-yellow-500 font-medium text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                >
                  Office Hours
                </motion.h3>
              </motion.div>
              <motion.p
                className="mb-2 text-sm sm:text-base"
                variants={itemVariants}
              >
                Mon - Sat
              </motion.p>
              <motion.p
                className="mb-4 sm:mb-6 text-sm sm:text-base"
                variants={itemVariants}
              >
                09:00 AM - 06:00 PM
              </motion.p>
              <motion.p
                className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
                variants={itemVariants}
              >
                Get directions to our office directly
              </motion.p>

              {/* Map */}
              <motion.div
                className="rounded-lg overflow-hidden h-40 sm:h-60"
                variants={mapVariants}
              >
                <iframe
                  title="Google Map Location"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.7997334861324!2d73.04804737615143!3d33.68442103722162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9e32d90b7b%3A0xa6f1b8c71f9b5d6f!2sPakland%20Business%20Centre!5e0!3m2!1sen!2s!4v1711812345678"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-700 my-6 sm:my-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4"
            variants={containerVariants}
          >
            <motion.div
              className="text-gray-400 text-xs sm:text-sm"
              variants={itemVariants}
            >
              EBC World Wide. © 2025. All Rights Reserved
            </motion.div>

            <motion.div
              className="flex space-x-3 sm:space-x-4"
              variants={containerVariants}
            >
              <motion.a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-sm sm:text-base"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-colors text-sm sm:text-base"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://wa.me/03310004761"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors text-sm sm:text-base"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaWhatsapp />
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </motion.footer>
  )
}

export default FooterSection