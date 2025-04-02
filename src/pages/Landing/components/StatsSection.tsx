import Container from "../../../components/Container"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

const StatsSection = () => {
   const [ref, inView] = useInView({
      threshold: 0.6,
      triggerOnce: false
      
   });

   const stats = [
      { value: "15000", label: "Students", description: "Lorem ipsum dolor sit amet" },
      { value: "15000", label: "Students", description: "Lorem ipsum dolor sit amet" },
      { value: "15000", label: "Students", description: "Lorem ipsum dolor sit amet" }
   ];

   return (
      <div className="py-16 lg:py-32 bg-white" ref={ref}>
         <Container>
            <div className="mx-auto">
               {/* Heading */}
               <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-16 max-w-3xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6 }}
               >
                  Lorem ipsum dolor sit amet consectetur. Sem faucibus.
               </motion.h2>

               {/* Stats Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        className="flex flex-col items-center text-center relative"
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
                              className="text-TwPrimaryPurple text-5xl font-bold"
                              initial={{ scale: 0.8 }}
                              animate={inView ? { scale: 1 } : {}}
                              transition={{
                                 delay: 0.3 + index * 0.15,
                                 duration: 0.5
                              }}
                           >
                              {stat.value}
                           </motion.span>
                           <motion.span
                              className="text-yellow-500 text-5xl font-bold"
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
                        </div>
                        <motion.p
                           className="text-lg font-medium text-gray-700 mb-4"
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
                           className="text-gray-600"
                           initial={{ opacity: 0 }}
                           animate={inView ? { opacity: 1 } : {}}
                           transition={{
                              delay: 0.6 + index * 0.15,
                              duration: 0.4
                           }}
                        >
                           {stat.description}
                        </motion.p>

                        {/* Right divider (visible only on desktop) */}
                        {index < stats.length - 1 && (
                           <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200 h-full"></div>
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
         </Container>
      </div>
   )
}

export default StatsSection