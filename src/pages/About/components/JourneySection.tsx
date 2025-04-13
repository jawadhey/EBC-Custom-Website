"use client"

import { Images } from "../../../assets/images"
import Container from "../../../components/Container"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const JourneySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Journey data
  const journeyItems = [
    {
      year: "2007",
      title: "EBC Worldwide is Founded",
      description: "We officially opened our doors in 2007 with a simple mission — to guide passionate students toward quality education abroad.",
      image: "/whiteboard-person.jpg",
      imageAlt: "EBC Worldwide founding",
    },
    {
      year: "2008",
      title: "First Student Batch to China",
      description: "Our first successful batch of students took off to study in China, marking the start of our deep-rooted partnerships with Chinese universities.",
      image: "/meeting-discussion.jpg",
      imageAlt: "First student batch to China",
    },
    {
      year: "2009",
      title: "Expansion of Services",
      description: "We expanded our consultancy offerings to include detailed pre-departure guidance, document preparation, and admission assistance.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Service expansion",
    },
    {
      year: "2009–2015",
      title: "Strengthening Global Ties",
      description: "Over the years, we developed long-term collaborations with reputable institutions across China, including Guangxi Medical University and Kunming University of Science and Technology.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Global partnerships",
    },
    {
      year: "2015–2020",
      title: "Going Beyond Borders",
      description: "Our reach extended to new destinations like the UK and Azerbaijan, partnering with universities such as Nakhchivan State University and Baku Engineering University.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "International expansion",
    },
    {
      year: "2021–2024",
      title: "5,000+ Students and Growing",
      description: "We hit a major milestone by guiding over 5,000 students to prestigious institutions globally, with a growing presence across multiple countries.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Student milestone celebration",
    },
    {
      year: "Present Day",
      title: "Onward to Georgia and Beyond",
      description: "With upcoming offices in Georgia and continuous global expansion, we remain committed to shaping futures and fulfilling dreams through education.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Future expansion plans",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const yearVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

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
          <motion.div className="flex justify-center mb-4 md:mb-6" variants={headerVariants}>
            <motion.div
              className="bg-purple-100 text-TwPrimaryPurple px-4 py-1 md:px-6 md:py-2 rounded-full inline-block text-xs md:text-sm"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              Have a look at our journey
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-3 md:mb-4"
            variants={headerVariants}
          >
            Brief History of EBC
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-16 text-sm md:text-base !leading-relaxed"
            variants={headerVariants}
          >
            Our journey from humble beginnings to becoming a trusted global education consultancy
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              className="absolute left-[9px] lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-purple-200 origin-top"
              style={{ top: 0, bottom: 0 }}
              variants={timelineVariants}
            ></motion.div>

            {/* Journey Items */}
            {journeyItems.map((item, index) => (
              <motion.div key={index} className="relative mb-16 md:mb-24 last:mb-0" variants={itemVariants}>
                {/* Timeline Dot */}
                <motion.div
                  className="top-16 md:top-24 absolute left-0 lg:left-[49.3%] transform lg:-translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-TwPrimaryPurple z-10"
                  variants={dotVariants}
                ></motion.div>

                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:pl-0 pl-12 md:pl-[70px] items-center gap-8 md:gap-14 lg:gap-36`}
                >
                  {/* Text Content */}
                  <motion.div
                    className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}
                    variants={index % 2 === 0 ? textVariants : imageVariants}
                  >
                    <motion.div
                      className="bg-purple-50 rounded-xl p-4 md:p-6 lg:p-8"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4 !leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base !leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Year */}
                  <motion.div
                    className="absolute max-w-[100px] md:max-w-[120px] text-wrap text-xl md:text-2xl font-bold text-TwPrimaryPurple top-0 -left-2 md:-left-4 lg:left-1/2 transform lg:-translate-x-1/2 mt-2 md:mt-4"
                    variants={yearVariants}
                  >
                    {item.year}
                  </motion.div>

                  {/* Image */}
                  <motion.div className="w-full md:w-1/2" variants={index % 2 === 0 ? imageVariants : textVariants}>
                    <motion.img
                      src={Images.About.Timeline1 || "/placeholder.svg"}
                      alt={item.imageAlt}
                      className="w-full h-auto rounded-xl max-h-[280px] md:max-h-[340px] object-cover object-top"
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default JourneySection