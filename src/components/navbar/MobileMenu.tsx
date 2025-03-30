"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { Icons } from "../../assets/icons"
import Container from "../Container"
import PrimaryButton from "../PrimaryButton"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container parentClassName="lg:hidden flex justify-between h-[80px]">


      <div className="flex items-center">
        <Link to={"/"} className="flex items-center">
          <img src={Icons.Brand.NavLogo} alt="" />
        </Link>
      </div>


      <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white h-screen">
          <div className="flex justify-end p-8">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 p-4 justify-center w-full">
            <Link to="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
              <img src={Icons.Brand.NavLogo} alt="" />
            </Link>
            <div className="flex flex-col gap-6 text-center mt-32 w-full items-center">
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Products
              </Link>

              <Link to="/about-us" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/chatbot" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Chatbot
              </Link>

              <PrimaryButton to="#">Contact Sales</PrimaryButton>
 
            </div>
          </div>
        </div>
      )}

    </Container>
  )
}

export default MobileMenu

