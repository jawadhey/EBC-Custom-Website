import { FaArrowRight, FaGraduationCap } from "react-icons/fa"
import Container from "../../../components/Container"

const BenefitsSection = () => {
   // Benefits data
   const benefits = [
      {
         id: 1,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 2,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 3,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 4,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 5,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 6,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 7,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
      {
         id: 8,
         title: "Lorem ipsum",
         description:
            "Lorem ipsum dolor sit amet consectetur. Lectus pellentesque augue magna in egestas nullam hac orci eu. Nunc massa pretium sed ultrices mauris ornare nunc.",
      },
   ]

   return (
      <div className="py-16 bg-white">
         <Container>

            <div className="mx-auto">
               {/* Heading */}
               <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">
                  Benefits of International Studies
               </h2>

               {/* Subheading */}
               <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </p>

               {/* Benefits Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit) => (
                     <div key={benefit.id} className="bg-amber-50 bg-opacity-50 p-6 rounded-lg">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                           <FaGraduationCap className="text-white text-xl" />
                        </div>

                        {/* Title */}
                        <h3 className="text-purple-600 font-semibold text-lg mb-2">{benefit.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-4">{benefit.description}</p>

                        {/* View More Link */}
                        <a
                           href="#"
                           className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors"
                        >
                           View More <FaArrowRight className="ml-2" />
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         </Container>

      </div>
   )
}

export default BenefitsSection

