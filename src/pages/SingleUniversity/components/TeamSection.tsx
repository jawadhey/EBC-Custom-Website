import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../../assets/images'
import { FaLinkedin } from 'react-icons/fa'
import Container from '../../../components/Container'

const TeamSection = () => {

   const teamMembers = [
      {
         id: 1,
         name: "SARAH ANDERSON",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 2,
         name: "MARIA RODRIGUEZ",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 3,
         name: "MARK THOMPSON",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
      {
         id: 4,
         name: "DIEGO MARTINEZ",
         title: "Founder",
         experience: "15",
         image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kcdbSnXVfzSO4H8teRjElCNNKKA52h.png",
         category: "founders",
      },
   ]


   return (
      <Container>
         <section className="py-12 mt-8 px-4 bg-white">
            <div className="mx-auto">

               {/* Top Badge */}
               <div className="flex justify-center mb-6">
                  <div className="bg-[#1ACD3B1A] text-[#1ACD3B] px-6 py-2 rounded-full inline-block">
                     We are proud of them
                  </div>
               </div>

               {/* Heading */}
               <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Our Proud Honors Students</h2>

               {/* Subheading */}
               <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
                  Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
                  tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {teamMembers.map((member) => (
                     <Link to='/team-members' key={member.id} className=" rounded-lg overflow-hidden relative">
                        <div className="relative h-80 overflow-hidden">
                           <img
                              src={Images.Universities.TeamImage}
                              alt={member.name}
                              className="w-full h-full object-cover "
                           />
                           <div className="absolute bottom-0 left-4">
                              <h3 className="font-bold text-2xl">
                                 <span className="text-blue-800">{member.name.split(" ")[0]}</span> <br />
                                 <span className="text-black">{member.name.split(" ").slice(1).join(" ")}</span>
                              </h3>
                           </div>
                        </div>

                        <div className="p-4 bg-white">

                           {/* <h4 className="text-xl font-bold mb-1">{member.title}</h4> */}
                           <p className="text-gray-700 mb-2">{member.title}</p>

                           <div className="flex justify-between items-center">
                              <div>
                                 <div className="font-bold text-lg">{member.experience}+</div>
                                 <div className="text-sm text-gray-600">Years of Experience</div>
                              </div>

                              <a
                                 href="#"
                                 className="text-blue-600 hover:text-blue-800"
                                 aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                 <FaLinkedin size={28} />
                              </a>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

      </Container>

   )
}

export default TeamSection