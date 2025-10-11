import { Tooltip } from "antd";
import { CircleFadingArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ScrollToTopCircle = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const darkMode = useSelector((state) => state.auth.darkMode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollY / docHeight) * 100;

      setIsVisible(scrollY > 100);
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setProgress(0);
      setIsVisible(false);
    }, 500);
  };

  const size = 60;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <Tooltip title="Scroll to Top" placement="left">
        <div
          className="relative cursor-pointer"
          onClick={scrollToTop}
          style={{ width: size, height: size }}
        >
          <svg width={size} height={size} className="rotate-[-90deg]">
            {/* Tailwind-like gradient */}
            <defs>
              <linearGradient
                id="scrollGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ec4899" /> {/* from-pink-500 */}
                <stop offset="50%" stopColor="#8b5cf6" /> {/* via-purple-500 */}
                <stop offset="100%" stopColor="#6366f1" /> {/* to-indigo-500 */}
              </linearGradient>
            </defs>

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={darkMode ? "#4B5563" : "#e5e7eb"}
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="url(#scrollGradient)"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            rounded-full p-2 shadow-md flex items-center justify-center
            ${darkMode ? "bg-[#1f1f1f]" : "bg-white"}`}
          >
            <CircleFadingArrowUp
              size={24}
              className={darkMode ? "text-white" : "text-black"}
            />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};
export default ScrollToTopCircle;
