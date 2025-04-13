import { Images } from "../assets/images"
import Container from "./Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AboutUsSectionProps {
  Heading?: string;
  Text?: React.ReactNode;
}

const AboutUsSection = ({ Heading, Text }: AboutUsSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="py-8 md:py-16 bg-amber-50" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Left Image */}
            <motion.div
              className="w-full lg:w-5/12"
              variants={imageVariants}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={Images.About.AboutGallery1}
                  alt="Student reading in library"
                  className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-xl md:rounded-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full lg:w-7/12"
              variants={contentVariants}
            >
              <motion.div
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-200 text-gray-700 text-xs md:text-sm mb-4 md:mb-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#e5e7eb"
                }}
                transition={{ duration: 0.2 }}
              >
                You can describe us as
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 !leading-tight"
                variants={itemVariants}
              >
                {Heading || "About Us"}
              </motion.h2>

              <motion.div
                className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base !leading-relaxed"
                variants={itemVariants}
              >
                {
                  Text ? Text : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4, duration: 0.6 }}
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
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutUsSection;