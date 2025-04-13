import { Link, useLocation } from "react-router-dom";
import { Icons } from "../../assets/icons";
import Container from "../Container";
import PrimaryButton from "../PrimaryButton";
import { motion } from "motion/react";

const Menu = () => {
  const location = useLocation();
  const isLogin = localStorage.getItem("authToken");

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/universities", label: "Universities" },
    { path: "/events", label: "Events" }
  ];

  return (
    <motion.nav
      className="border-b-[1px] border-TwBorder flex items-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container parentClassName="flex-row items-center h-[80px] justify-between w-full hidden lg:flex">
        <motion.div
          className="flex items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to={"/"} className="flex items-center">
            <motion.img
              src={Icons.Brand.NavLogo}
              className="w-[90px] h-[90px]"
              alt="Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        <div className="flex flex-row items-center gap-8 font-medium">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`block hover:scale-[1.05] text-center transition-transform ${location.pathname === item.path
                    ? "text-TwPrimaryPurple font-semibold"
                    : "text-gray-800"
                  }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
        </motion.div>
      </Container>
    </motion.nav>
  );
};

export default Menu;