import { Link, useLocation } from "react-router-dom";
import { Icons } from "../../assets/icons";
import Container from "../Container";
import PrimaryButton from "../PrimaryButton";

const Menu = () => {
  const location = useLocation();
  const isLogin = localStorage.getItem("authToken");

  return (
    <nav className="border-b-[1px] border-TwBorder flex items-center">
      <Container parentClassName="flex-row items-center h-[80px] justify-between w-full hidden lg:flex">
        <div className="flex items-center">
          <Link to={"/"} className="flex items-center">
            <img src={Icons.Brand.NavLogo} alt="" />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-8 font-medium">
          <Link
            to="/"
            className={`hover:scale-[1.05] text-center transition-transform ${location.pathname === "/" ? "text-TwPrimaryPurple font-semibold" : "text-gray-800"}`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`hover:scale-[1.05] text-center transition-transform ${location.pathname === "/about-us" ? "text-TwPrimaryPurple font-semibold" : "text-gray-800"}`}
          >
            About Us
          </Link>
          <Link
            to="/universities"
            className={`hover:scale-[1.05] text-center transition-transform ${location.pathname === "/universities" ? "text-TwPrimaryPurple font-semibold" : "text-gray-800"}`}
          >
            Universities
          </Link>
          <Link
            to="/events"
            className={`hover:scale-[1.05] text-center transition-transform ${location.pathname === "/events" ? "text-TwPrimaryPurple font-semibold" : "text-gray-800"}`}
          >
            Events
          </Link>
        </div>

        <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
      </Container>
    </nav>
  );
};

export default Menu;
