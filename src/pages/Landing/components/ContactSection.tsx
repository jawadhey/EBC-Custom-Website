const ContactSection = () => {
   return (
      <div className="relative overflow-hidden">
         {/* Decorative Shapes */}
         <div className="absolute top-0 left-0 w-40 h-40">
            <div className="absolute w-32 h-32 border-8 border-yellow-400 rounded-full opacity-90"></div>
            <div className="absolute w-40 h-40 border-8 border-purple-500 rounded-full opacity-30 -translate-x-4 translate-y-4"></div>
         </div>

         <div className="absolute bottom-0 left-0 w-64 h-64">
            <div className="absolute w-full h-full">
               <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 opacity-30">
                  <path d="M0,100 L50,0 L100,50 L0,100" fill="currentColor" />
               </svg>
            </div>
         </div>

         <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/3 -translate-y-1/3">
            <div className="absolute w-full h-full">
               <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
                  <path d="M0,0 L100,0 L100,100 L0,0" fill="currentColor" />
               </svg>
            </div>
         </div>

         <div className="grid md:grid-cols-2">
            {/* Left Column - Form */}
            <div className="bg-purple-600 py-16 px-8 md:px-12 lg:px-16 relative">
               <div className="max-w-md mx-auto">
                  <div className="inline-block px-4 py-2 rounded-full bg-purple-500 text-white text-sm mb-8">
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
                           className="w-full px-4 py-3 rounded-lg bg-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                           className="w-full px-4 py-3 rounded-lg bg-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                              className="w-full px-4 py-3 rounded-lg bg-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                              className="w-full px-4 py-3 rounded-lg bg-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                           className="w-full px-4 py-3 rounded-lg bg-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
            <div className="relative">
               <img src="/students-group.jpg" alt="Group of students" className="w-full h-full object-cover" />
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

