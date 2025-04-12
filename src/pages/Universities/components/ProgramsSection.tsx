import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import uni1 from '../../../assets/universities/uni1/hero.jpg'
import uni2 from '../../../assets/universities/uni2/hero.jpg'
import uni3 from '../../../assets/universities/uni3/hero.jpg'
import uni4 from '../../../assets/universities/uni4/hero.jpg'
import uni5 from '../../../assets/universities/uni5/hero.png'
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.4
    }
  })
}

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: any) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Program categories
  const categories = [
    { id: "all", name: "All" },
    { id: "exclusive", name: "Our Exclusive Universities" },
    { id: "medical", name: "Medical" },
    { id: "engineering", name: "Engineering" },
    { id: "other", name: "other" },
  ]

  const allPrograms = [
    {
      id: 1,
      title: "Nakhchivan University",
      description: "A progressive university in Azerbaijan offering diverse academic programs and global collaboration.",
      image: uni1,
      categories: ["exclusive", "engineering"],
    },
    {
      id: 2,
      title: "North China University of Science & Technology",
      description: "A reputed institution combining science, technology, and medical education in northern China.",
      image: uni2,
      categories: ["", "medical"],
    },
    {
      id: 3,
      title: "Kunming University of Science & Technology",
      description: "Located in Yunnan, it proudly specializes in applied sciences and innovative, cutting-edge tech research.",
      image: uni3,
      categories: ["other", "medical"],
    },
    {
      id: 4,
      title: "Guangxi Medical University",
      description: "One of China’s oldest medical universities, known for public health and clinical medicine.",
      image: uni4,
      categories: ["", "medical"],
    },
    {
      id: 5,
      title: "Wuhan University of Science & Technology",
      description: "An interdisciplinary university excelling in engineering, materials, and medical fields.",
      image: uni5,
      categories: ["", "medical"],
    },
  ];

  // Filter programs based on active tab
  const filteredPrograms =
    activeTab === "all" ? allPrograms : allPrograms.filter((program) => program.categories.includes(activeTab))

  return (
    <div className="py-16 bg-white overflow-hidden px-0 lg:px-16 xl:px-32" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4"
            variants={itemVariants}
          >
            Programs We Offer
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-5xl mx-auto mb-12"
            variants={itemVariants}
          >
            Explore top-ranked universities offering world-class education in <b>medicine, engineering, and other fields</b>. Whether you're aiming for an MBBS in China or a degree in another discipline, we guide you toward the best options that fit your goals and budget.

          </motion.p>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === category.id ? "bg-TwPrimaryPurple text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                variants={buttonVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
                layout
              >
                <motion.img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 }
                  }}
                />
                <div className="p-5">
                  <motion.h3
                    className="text-TwPrimaryPurple font-semibold text-lg mb-2"
                    variants={itemVariants}
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-4"
                    variants={itemVariants}
                  >
                    {program.description}
                  </motion.p>
                  <motion.div variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={`/university-detail/${program.id}`}
                      className="text-yellow-500 font-medium flex items-center hover:text-yellow-600 transition-colors"

                    >
                      View More <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ProgramsSection