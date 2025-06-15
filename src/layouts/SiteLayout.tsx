import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

const SiteLayout = () => {
   const location = useLocation()
   const isAbsolute = location.pathname === '/'

   // Replace with your WhatsApp number in international format
   const whatsappLink = "https://wa.me/03310004761" // e.g. 92 = Pakistan, 3001234567 = phone

   return (
      <div className="font-poppins text-[16px] relative">
         <Navbar />
         <Outlet />
         <Footer />

         {/* WhatsApp Button */}
         <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
            aria-label="Chat on WhatsApp"
         >
            <FaWhatsapp className="text-2xl" />
         </a>
      </div>
   )
}

export default SiteLayout
