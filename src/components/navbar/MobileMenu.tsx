"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { Icons } from "../../assets/icons"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden flex justify-between">

      <div className="flex items-center">
        <Link to={"/"} className="flex items-center">
          {/* <img src={Icons.logo} alt="" /> */}
          <span className="text-indigo-600 text-xl italic font-bold mr-1">Deep Tech</span>
          <span className="text-indigo-900 text-xl italic font-bold">Marketplace</span>
        </Link>
      </div>


      <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white h-screen">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 p-4 justify-center w-full">
            <Link to="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
              {/* <img src={Icons.logo} alt="" /> */}
              <span className="text-indigo-600 text-xl italic font-bold mr-1">Deep Tech</span>
              <span className="text-indigo-900 text-xl italic font-bold">Marketplace</span>
            </Link>
            <div className="flex flex-col gap-6 text-center mt-32 w-full items-center">
              <Link to="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Products
              </Link>

              <Link to="/about-us" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/chatbot" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Chatbot
              </Link>

              <Link
                to="/contact-sales"
                className="px-5 py-2 md:w-[200px] bg-blue-700 rounded-md text-white font-semibold w-full text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Sales
              </Link>

              <Link
                to="/login"
                className="px-5 py-2 md:w-[200px] border border-gray-300 rounded-md text-gray-800 font-semibold w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu

