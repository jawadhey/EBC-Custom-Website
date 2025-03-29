import { Link, useLocation } from "react-router-dom"
import { Icons } from "../../assets/icons"
import Container from "../Container"
import PrimaryButton from "../PrimaryButton"

const Menu = () => {
  const location = useLocation()
  const isLogin = localStorage.getItem("authToken")

  return (
    <nav className=" border-b-[1px] border-TwBorder h-[80px] flex items-center">
      <Container parentClassName="flex-row items-center justify-between w-full hidden lg:flex">

        <div className="flex items-center">
          <Link to={"/"} className="flex items-center">
            <img src={Icons.Brand.NavLogo} alt="" />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-8 font-medium">
          <Link to="/" className="hover:scale-[1.05] text-center transition-transform text-gray-800">
            Home
          </Link>
          <Link to="/products" className="hover:scale-[1.05] text-center transition-transform text-gray-800">
            Products
          </Link>
          <Link to="/about-us" className="hover:scale-[1.05] text-center transition-transform text-gray-800">
            About Us
          </Link>
          <Link to="/chatbot" className="hover:scale-[1.05] text-center transition-transform text-gray-800">
            Chatbot
          </Link>
        </div>

        <PrimaryButton to="#">Contact Us</PrimaryButton>
      </Container>

    </nav>
  )
}

export default Menu

