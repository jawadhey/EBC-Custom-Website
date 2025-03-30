import { Icons } from "../../../assets/icons"
import { Images } from "../../../assets/images"

const ContactSection = () => {
   return (
      <div className="relative overflow-hidden">
         {/* Decorative Shapes */}
         <div className="absolute top-0 left-0 w-40 h-40 z-10">
            <img src={Icons.Landing.ContactSvg1} />
         </div>

         <div className="absolute top-0 right-0 w-64 h-64 z-10">
         <img src={Icons.Landing.ContactSvg2} />
         </div>

         <div className="absolute bottom-0 left-0  z-10 hidden xl:block">
         <img src={Icons.Landing.ContactSvg3} />

         </div>

         <div className="grid md:grid-cols-12 h-[820px]">
            {/* Left Column - Form */}
            <div className="bg-TwPrimaryPurple col-span-7 py-16 px-8 md:px-12 lg:px-16 relative">
               <div className="max-w-md mx-auto z-20 relative">
                  <div className="w-fit px-4 py-2 rounded-full h-[40px] flex items-center bg-[#FFFFFF1A] text-white text-sm mb-8">
                     Reach us out!
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                     Start with a <span className="text-yellow-400">Message</span>
                  </h2>

                  <form className="space-y-6">
                     <div>
                        <label htmlFor="fullName" className="block text-white mb-2">
                           Full Name
                        </label>
                        <input
                           type="text"
                           id="fullName"
                           placeholder="Jhon Doe"
                           className="w-full px-4 bg-[#FFFFFF33] py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                     </div>

                     <div>
                        <label htmlFor="email" className="block text-white mb-2">
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           placeholder="example@email.com"
                           className="w-full px-4 bg-[#FFFFFF33] py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label htmlFor="phone" className="block text-white mb-2">
                              Phone Number
                           </label>
                           <input
                              type="tel"
                              id="phone"
                              placeholder="+92 000 0000000"
                              className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                           />
                        </div>

                        <div>
                           <label htmlFor="city" className="block text-white mb-2">
                              City
                           </label>
                           <input
                              type="text"
                              id="city"
                              placeholder="Islamabad"
                              className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="message" className="block text-white mb-2">
                           Message
                        </label>
                        <textarea
                           id="message"
                           rows={4}
                           placeholder="What's on your mind"
                           className="w-full bg-[#FFFFFF33] px-4 py-3 rounded-lg bg-TwPrimaryPurple text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                     </div>

                     <button
                        type="submit"
                        className="px-6 py-3 bg-yellow-400 text-purple-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                     >
                        Send Message
                     </button>
                  </form>
               </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative col-span-5">
               <img src={Images.ContactImage} alt="Group of students" className="w-full h-full object-cover" />

               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
               <div className="absolute top-12 left-0 right-0 text-center">
                  <p className="text-white text-xl mb-2">It starts with you</p>
                  <div className="inline-block bg-yellow-400 px-4 py-2">
                     <p className="text-gray-800 text-2xl font-bold">Don't miss out!</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactSection

