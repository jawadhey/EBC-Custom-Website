import Container from "../../../components/Container"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup";

interface StatItem {
   value: React.ReactNode;
   label: string;
   description: string;
}

interface StatsSectionProps {
   stats?: StatItem[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
   const [ref, inView] = useInView({
      threshold: 0.6,
      triggerOnce: false
   });

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

   const defaultStats: StatItem[] = [
      { value: 5000, label: "Medical Students", description: "Making dreams a reality" },
      { value: 2000, label: "Other Students", description: "Diverse educational paths" },
      { value: 18, label: "Years of Experience", description: "Trusted expertise in education" }
   ];

   const displayStats = stats || defaultStats;

   return (
      <div className="py-8 md:py-16 lg:py-24 bg-white" ref={ref}>
         <Container>
            <motion.div
               initial="hidden"
               animate={inView ? "visible" : "hidden"}
               className="mx-auto"
            >
               {/* Heading */}
               <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto !leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6 }}
               >
                  Trusted by Thousands of Aspiring Medical Students!
               </motion.h2>

               {/* Subheading */}
               <motion.p
                  className="text-gray-500 text-center max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base !leading-relaxed"
                  variants={itemVariants}
               >
                  We have helped thousands of students achieve their dream of studying medicine abroad. Join a growing community of successful medical professionals!
               </motion.p>

               {/* Stats Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  {displayStats.map((stat, index) => (
                     <motion.div
                        key={index}
                        className="flex flex-col items-center text-center relative px-4 py-6 md:py-0"
                        initial={{ y: 40, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                           delay: 0.2 + index * 0.15,
                           duration: 0.6,
                           ease: "backOut"
                        }}
                     >
                        <div className="flex items-baseline mb-2">
                           <motion.span
                              className="text-TwPrimaryPurple text-4xl sm:text-5xl font-bold"
                              initial={{ scale: 0.8 }}
                              animate={inView ? { scale: 1 } : {}}
                              transition={{
                                 delay: 0.3 + index * 0.15,
                                 duration: 0.5
                              }}
                           >
                              {typeof stat.value === "number" ? (
                                 <CountUp
                                    start={inView ? 0 : undefined}
                                    end={stat.value as number}
                                    duration={2}
                                    separator=","
                                 />
                              ) : (
                                 stat.value
                              )}
                           </motion.span>
                           {(index === 0 || index === 1) && (
                              <motion.span
                                 className="text-yellow-500 text-4xl sm:text-5xl font-bold"
                                 initial={{ scale: 0 }}
                                 animate={inView ? { scale: 1 } : {}}
                                 transition={{
                                    delay: 0.4 + index * 0.15,
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 300
                                 }}
                              >
                                 +
                              </motion.span>
                           )}
                           {index === 2 && typeof stat.value === "number" && (
                              <motion.span
                                 className="text-yellow-500 text-3xl sm:text-4xl font-bold ml-1"
                                 initial={{ scale: 0 }}
                                 animate={inView ? { scale: 1 } : {}}
                                 transition={{
                                    delay: 0.4 + index * 0.15,
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 300
                                 }}
                              >
                                 %
                              </motion.span>
                           )}
                        </div>
                        <motion.p
                           className="text-base md:text-lg font-medium text-gray-700 mb-2 md:mb-4"
                           initial={{ opacity: 0 }}
                           animate={inView ? { opacity: 1 } : {}}
                           transition={{
                              delay: 0.5 + index * 0.15,
                              duration: 0.4
                           }}
                        >
                           {stat.label}
                        </motion.p>
                        <motion.p
                           className="text-gray-600 text-sm md:text-base"
                           initial={{ opacity: 0 }}
                           animate={inView ? { opacity: 1 } : {}}
                           transition={{
                              delay: 0.6 + index * 0.15,
                              duration: 0.4
                           }}
                        >
                           {stat.description}
                        </motion.p>

                        {/* Right divider (desktop only) */}
                        {index < displayStats.length - 1 && (
                           <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200 h-full"></div>
                        )}
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </Container>
      </div>
   )
}

export default StatsSection
