import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface MissionVisionSectionProps {
  heading?: string;
  tagline?: string;
  programs?: Array<{
    title: React.ReactNode;
    description: React.ReactNode;
  }>;
}

const MissionVisionSection = ({ heading, tagline, programs }: MissionVisionSectionProps) => {
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
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  // Default programs if none are provided
  const defaultPrograms = [
    {
      title: "MBBS Program",
      description: "Our comprehensive MBBS program provides world-class medical education with hands-on clinical experience."
    },
    {
      title: "MD Program",
      description: "Advanced medical degree program for graduates looking to specialize in various medical fields."
    }
  ];

  const displayPrograms = programs || defaultPrograms;

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
            {heading || "Programs Offered"}
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-5xl mx-auto mb-12"
            variants={itemVariants}
          >
            {programs ?
              "Choose the program that best fits your academic and career goals" :
              "Explore our comprehensive range of medical programs designed for international students"}
          </motion.p>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {displayPrograms.map((program, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 ${index % 2 === 0 ? 'bg-purple-50' : 'bg-amber-50'}`}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: index % 2 === 0 ?
                    "0 10px 25px -5px rgba(124, 58, 237, 0.2)" :
                    "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-purple-100"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {program.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  {program.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default MissionVisionSection