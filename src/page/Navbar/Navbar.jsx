import { motion } from "framer-motion";
import { Folder, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleTheme } from "../../Redux/Slice/authSlice";

const navItems = ["Home", "About", "Projects", "Contact"];

const iconMap = {
  Home: <Home size={20} />,
  About: <User size={20} />,
  Projects: <Folder size={20} />,
  Contact: <Mail size={20} />,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-black/60 backdrop-blur-md shadow-md border-b border-white/10"
              : "bg-white/60 backdrop-blur-md shadow-md border-b border-black/10"
            : "bg-transparent"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            className={`text-xl font-bold tracking-widest ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Moorthy
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`cursor-pointer text-sm font-medium transition-all ${
                    darkMode
                      ? "text-white hover:text-purple-300"
                      : "text-black hover:text-purple-700"
                  }`}
                  onSetActive={() => handleSetActive(item)}
                >
                  {item}
                </Link>
                <div
                  className={`absolute bottom-0 left-0 h-[2px] ${
                    activeItem === item
                      ? "w-full transition-all duration-300 ease-out"
                      : "w-0"
                  } ${darkMode ? "bg-purple-300" : "bg-purple-700"}`}
                />
              </div>
            ))}

            <button
              onClick={() => dispatch(toggleTheme())}
              className="ml-4 p-2 rounded-full hover:bg-white/20 transition"
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden h-16 border-t transition-colors ${
          darkMode
            ? "bg-black text-white border-white/10"
            : "bg-white text-black border-black/10"
        }`}
      >
        <div className="flex justify-around items-center h-full px-4">
          {/* {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive(item)}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition ${
                darkMode
                  ? "text-white hover:text-purple-300"
                  : "text-black hover:text-purple-700"
              }`}
            >
              {iconMap[item]}
              <span className="text-[11px]">{item}</span>
            </Link>
          ))} */}
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive(item)}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition cursor-pointer ${
                activeItem === item
                  ? "text-purple-500 font-semibold"
                  : darkMode
                  ? "text-white hover:text-purple-300"
                  : "text-black hover:text-purple-700"
              }`}
            >
              {iconMap[item]}
              <span className="text-[11px]">{item}</span>
            </Link>
          ))}

          <button
            onClick={() => dispatch(toggleTheme())}
            className={`flex flex-col items-center justify-center gap-1 text-xs transition ${
              darkMode
                ? "text-white hover:text-purple-300"
                : "text-black hover:text-purple-700"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-[11px]">{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
