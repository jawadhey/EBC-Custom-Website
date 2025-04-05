import { Images } from "../assets/images"
import Container from "./Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const AboutUsSection = ({ Heading, Text }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <div className="py-16 bg-amber-50" ref={ref}>
      <Container>
        <motion.div 
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Image */}
            <motion.div 
              className="col-span-full lg:col-span-4"
              variants={imageVariants}
            >
              <motion.div
              >
                <img 
                  src={Images.About.AboutGallery1} 
                  alt="Student reading in library" 
                  className="w-auto max-h-[500px] h-auto rounded-2xl" 
                />
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="col-span-full lg:col-span-8"
              variants={contentVariants}
            >
              <motion.div 
                className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm mb-6"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#e5e7eb"
                }}
                transition={{ duration: 0.3 }}
              >
                You can describe us as
              </motion.div>

              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                {Heading || "About Us"}
              </motion.h2>

              <motion.div 
                className="space-y-4 text-gray-600 text-wrap"
                variants={itemVariants}
              >
                {
                  Text ? Text : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      At <b>EBC</b>, we are dedicated to helping students <b>achieve their dream of studying medicine abroad</b>.
                      With expert guidance, personalized counseling, and a streamlined admission process, we ensure that every
                      student finds the right university that matches their aspirations. Our team works tirelessly to provide
                      <b> accurate information, visa support, and continuous assistance</b>, making the journey to international
                      education as smooth as possible. We believe that every student deserves <b>a chance to succeed</b>, and we
                      are here to make that happen with <b>trust, transparency, and commitment</b>.
                    </motion.p>
                  )
                }
              </motion.div>

              {/* Additional animated elements */}
              {/* <motion.div
                className="mt-8 flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="text-4xl font-bold text-TwPrimaryPurple">10+</span>
                  <span className="ml-2 text-gray-700">Years Experience</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="text-4xl font-bold text-TwPrimaryPurple">100%</span>
                  <span className="ml-2 text-gray-700">Dedication</span>
                </motion.div>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutUsSection;