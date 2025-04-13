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
    threshold: 0.2,
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + index * 0.15,
        duration: 0.5,
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
    <div className="py-8 md:py-16 bg-white" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Top Badge */}
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            variants={itemVariants}
          >
            <motion.div
              className="bg-purple-100 text-TwPrimaryPurple px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block text-sm md:text-base"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3e8ff"
              }}
              transition={{ duration: 0.2 }}
            >
              {tagline || "What we thrive for"}
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4 !leading-tight"
            variants={itemVariants}
          >
            {heading || "Programs Offered"}
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-5xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
            variants={itemVariants}
          >
            {programs ?
              "Choose the program that best fits your academic and career goals" :
              "Explore our comprehensive range of medical programs designed for international students"}
          </motion.p>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {displayPrograms.map((program, index) => (
              <motion.div
                key={index}
                className={`rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 ${index % 2 === 0 ? 'bg-purple-50' : 'bg-amber-50'}`}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -3,
                  boxShadow: index % 2 === 0 ?
                    "0 5px 15px -3px rgba(124, 58, 237, 0.2)" :
                    "0 5px 15px -3px rgba(245, 158, 11, 0.2)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 pb-2 md:pb-4 border-b border-purple-100"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  {program.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
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