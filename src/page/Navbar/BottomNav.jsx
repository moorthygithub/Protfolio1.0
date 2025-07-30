import { Tooltip } from "antd";
import { Folder, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleTheme } from "../../Redux/Slice/authSlice";

const BottomNav = ({ navItems, activeItem, handleSetActive }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const darkMode = useSelector((state) => state.auth.darkMode);
  const dispatch = useDispatch();

  const iconMap = {
    Home: <Home />,
    About: <User />,
    Projects: <Folder />,
    Contact: <Mail />,
  };

  return (
    <div className="flex justify-around items-center h-full px-4">
      {navItems.map((item) => {
        const isHovered = hoveredItem === item;
        const isActive = activeItem === item;

        return (
          <Tooltip key={item} title={item} placement="top">
            <Link
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative group flex flex-col items-center justify-center gap-1 text-xs cursor-pointer transition-all p-2 rounded-full hover:animate-pulse-slow
                ${
                  isActive
                    ? "text-purple-500 font-semibold animate-pulse-slow"
                    : darkMode
                    ? "text-white hover:text-purple-300"
                    : "text-black hover:text-purple-700"
                }
                ${isHovered ? (darkMode ? "bg-white/10" : "bg-black/10") : ""}
              `}
            >
              <div
                className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300 blur-md
                  ${
                    isHovered
                      ? "bg-purple-500 opacity-20 scale-125"
                      : "opacity-0"
                  }
                `}
              />

              <div
                className={`transition-all duration-300 ease-in-out
                  ${
                    hoveredItem
                      ? isHovered
                        ? "text-[20px] scale-100"
                        : "text-[24px] scale-110 opacity-60"
                      : "text-[20px] scale-100"
                  }
                `}
              >
                {iconMap[item]}
              </div>
            </Link>
          </Tooltip>
        );
      })}

      <Tooltip title={darkMode ? "Light" : "Dark"} placement="top">
        <button
          onClick={() => dispatch(toggleTheme())}
          onMouseEnter={() => setHoveredItem("theme")}
          onMouseLeave={() => setHoveredItem(null)}
          className={`relative group  flex flex-col items-center justify-center gap-1 text-xs transition p-2 rounded-full hover:animate-pulse-slow
            ${
              darkMode
                ? "text-white hover:text-purple-300"
                : "text-black hover:text-purple-700"
            }
            ${
              hoveredItem === "theme"
                ? darkMode
                  ? "bg-white/10"
                  : "bg-black/10"
                : ""
            }`}
        >
          <div
            className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300 blur-md
              ${
                hoveredItem === "theme"
                  ? "bg-yellow-300 opacity-20 scale-125"
                  : "opacity-0"
              }
            `}
          />

          {/* Icon */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              hoveredItem === "theme" ? "rotate-[20deg] scale-110" : "scale-100"
            }`}
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </div>
        </button>
      </Tooltip>
    </div>
  );
};

export default BottomNav;
