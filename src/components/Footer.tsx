import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl overflow-hidden">
      <div className="  mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">
              Get our <span className="text-TwPrimaryPurple">latest updates</span> to connect with us and write your own{" "}
              <span className="text-yellow-500">future.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-TwPrimaryPurple"
            />
            <button className="px-6 py-3 bg-TwPrimaryPurple text-white font-medium rounded-lg hover:bg-TwPrimaryPurpleBgHover transition-colors whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-TwPrimaryPurple rounded-full mr-3"></div>
              <div>
                <span className="text-TwPrimaryPurple">Company</span> <span className="text-yellow-500">Logo</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-TwPrimaryPurple mr-3" />
                <span>+92 000 0000000</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-TwPrimaryPurple mr-3" />
                <span>info@ebcworldwide.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-TwPrimaryPurple mr-3 mt-1" />
                <span>Office No. 15, 1st Floor, Pakland Business Centre, I8 Markaz Islamabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Universities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Universities */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 font-medium mb-4">Universities</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  View More
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 font-medium mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  View More
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-3">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl mr-2">📅</span>
              <h3 className="text-yellow-500 font-medium">Office Hours</h3>
            </div>
            <p className="mb-2">Mon - Sat</p>
            <p className="mb-6">09:00 AM - 06:00 PM</p>
            <p className="text-sm text-gray-400">Get directions to our office directly</p>
          </div>

          {/* Map */}
          <div className="lg:col-span-12 xl:col-span-12 md:col-span-6 lg:col-start-10 lg:col-end-13">
            <div className="rounded-lg overflow-hidden h-40">
              <img src="/map-image.jpg" alt="Office Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">EBC World Wide. © 2025. All Rights Reserved</div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

