import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Redux/Slice/authSlice";
import * as Dialog from "@radix-ui/react-dialog";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
{/* 
          <button
            onClick={() => dispatch(toggleTheme())}
            className="ml-4 p-2 rounded-full hover:bg-white/20 transition"
          >
            {darkMode ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-black" />
            )}
          </button> */}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className={darkMode ? "text-white" : "text-black"} />
          </button>
        </div>
      </div>

      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen} modal={false}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm md:hidden" />
            <Dialog.Content
              className={`fixed left-0 top-0 z-[9999] w-64 h-full shadow-lg transition-transform duration-300 ease-in-out  overflow-x-auto p-6 md:hidden
                ${darkMode ? "bg-black text-white" : "bg-white text-black"} 
                `}
              aria-describedby={undefined}
            >
              <div className="flex justify-between items-center mb-6">
                <Dialog.Title asChild>
                  <span className="text-lg font-bold text-purple-500">
                    Menu
                  </span>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button>
                    <X className={darkMode ? "text-white" : "text-black"} />
                  </button>
                </Dialog.Close>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`cursor-pointer text-base transition ${
                      darkMode
                        ? "text-white hover:text-purple-300"
                        : "text-black hover:text-purple-700"
                    }`}
                  >
                    {item}
                  </Link>
                ))}

                {/* <button
                  onClick={() => {
                    dispatch(toggleTheme());
                    setIsOpen(false);
                  }}
                  className="mt-6 p-2 rounded bg-purple-600 text-white"
                >
                  Toggle {darkMode ? "Light" : "Dark"} Mode
                </button> */}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </motion.nav>
  );
};

export default Navbar;
