import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const MissionVisionSection = ({ heading, tagline }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (index: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  return (
    <div className="py-16 bg-white" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Top Badge */}
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <motion.div
              className="bg-purple-100 text-TwPrimaryPurple px-6 py-2 rounded-full inline-block"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3e8ff"
              }}
              transition={{ duration: 0.3 }}
            >
              {tagline || "What we thrive for"}
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
            variants={itemVariants}
          >
            {heading || "Mission and Vision"}
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-5xl mx-auto mb-12"
            variants={itemVariants}
          >
            At <b>EBC</b>, we are committed to empowering students by providing <b>seamless access to quality education abroad.</b> Our goal is to make the journey of studying overseas <b>smooth, transparent, and stress-free</b> for aspiring medical students.
          </motion.p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-purple-50 rounded-2xl p-8"
              custom={0}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-purple-100"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Mission
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                Our mission is to <b>guide and support students</b> in securing admissions to top medical universities abroad. We aim to provide <b>expert counseling, a structured application process, and continuous assistance</b> to ensure every student finds the right path to success.
              </motion.p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-amber-50 rounded-2xl p-8"
              custom={1}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-amber-100"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Vision
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                We envision a future where <b>every student, regardless of background, has the opportunity to study abroad</b> with confidence. Through <b>trust, innovation, and dedication,</b> we strive to create a global community of future medical professionals.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default MissionVisionSection