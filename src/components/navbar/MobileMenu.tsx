import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Icons } from "../../assets/icons";
import Container from "../Container";
import PrimaryButton from "../PrimaryButton";
import { motion, AnimatePresence } from "motion/react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/universities", label: "Universities" },
    { path: "/events", label: "Events" }
  ];

  return (
    <Container parentClassName="lg:hidden flex justify-between h-[80px]">
      <motion.div
        className="flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to={"/"} className="flex items-center">
          <img src={Icons.Brand.NavLogo} alt="" />
        </Link>
      </motion.div>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-8">
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            <motion.div
              className="flex flex-col items-center gap-6 p-4 justify-center w-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
                  <img src={Icons.Brand.NavLogo} alt="" />
                </Link>
              </motion.div>

              <div className="flex flex-col gap-6 text-center mt-32 w-full items-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-lg font-medium ${location.pathname === item.path
                          ? "text-TwPrimaryPurple font-semibold"
                          : "text-gray-800"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <PrimaryButton onClick={() => setIsOpen(false)} to="/contact-us">
                    Contact Sales
                  </PrimaryButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default MobileMenu;