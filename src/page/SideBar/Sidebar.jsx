import { useEffect, useState } from "react";
import { ChevronUp, CircleFadingArrowUp } from "lucide-react";
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
  };

  const size = 60;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    isVisible && (
      <div className="fixed bottom-20 right-6 z-50">
        <div
          className="relative"
          style={{ width: size, height: size }}
          onClick={scrollToTop}
        >
          {/* Circular Progress */}
          <svg width={size} height={size} className="rotate-[-90deg]">
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
              stroke={darkMode ? "#ff014f" : "#ff014f"}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all ease-in-out cursor-pointer ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CircleFadingArrowUp
              className={darkMode ? "text-white" : "text-black"}
              size={24}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ScrollToTopCircle;
