import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FaChartBar } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const AnalyticsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Chart data
  const chartData = [
    { month: "Jul", value: 150 },
    { month: "Aug", value: 300 },
    { month: "Sep", value: 450 },
    { month: "Oct", value: 750 },
    { month: "Nov", value: 250 },
    { month: "Dec", value: 550 },
    { month: "Jan", value: 600 },
  ]

  // Progress bar data
  const progressData = [
    { label: "Student Reach", value: 90, color: "bg-TwPrimaryPurple", percentage: "+50%" },
    { label: "Universites", value: 70, color: "bg-TwPrimaryPurple", percentage: "+70%" },
    { label: "Campuses", value: 85, color: "bg-TwPrimaryPurple", percentage: "+85%" },
    // { label: "Lorem ipsum", value: 75, color: "bg-blue-100" },
  ]

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

  const analyticsVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (i: any) => ({
      width: `${i}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8
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
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Unveiling the Numbers Behind Our Journey — A Legacy of Student Success and Global Impact
          </motion.h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <motion.div

                transition={{ duration: 0.4 }}
              >
                <img src={Images.About.Skyscraper} alt="Skyscrapers" className="w-auto max-h-[560px] h-auto rounded-2xl" />
              </motion.div>

              {/* Chart Icon Overlay */}
              {/* <div className="absolute bottom-6 left-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <FaChartBar className="text-green-500 text-2xl" />
              </div> */}
            </motion.div>

            {/* Right Column - Analytics */}
            <motion.div
              className="space-y-8"
              variants={analyticsVariants}
            >
              <motion.h3
                className="text-2xl font-semibold text-gray-800"
                variants={itemVariants}
              >
                Annual Student Consultancies
              </motion.h3>

              {/* Chart */}
              <motion.div
                className="h-64 w-full"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4338ca" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4338ca" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} domain={[0, 800]} ticks={[0, 200, 400, 600, 800]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#4338ca" strokeWidth={3} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Progress Bars */}
              <motion.div
                className="space-y-4 mt-6"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                {progressData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{item.label}</span>
                      {item.percentage && (
                        <motion.span
                          className="text-yellow-500 font-medium"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + (index * 0.1), duration: 0.4 }}
                        >
                          {item.percentage}
                        </motion.span>
                      )}
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <motion.div
                        className={`${item.color} h-2.5 rounded-full`}
                        custom={item.value}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default AnalyticsSection