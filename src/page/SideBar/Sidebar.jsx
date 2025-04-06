import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Scroll progress
      const scrollProgress = (scrollY / docHeight) * 100;
      setProgressPercent(scrollProgress);

      // Section detection
      let current = 0;
      sections.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop;
          if (scrollY >= offset - window.innerHeight / 2) {
            current = idx;
          }
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-0 h-screen flex items-start z-50">
      {/* Full Height Progress Bar */}
      <div className="w-1 h-full bg-gray-300 rounded relative ">
        <div
          className="absolute left-0 top-0 w-1 bg-blue-500 rounded transition-all duration-500"
          style={{ height: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Current Section Label */}
      <div className="mt-20 ml-3">
        <a
          href={`#${sections[activeIndex]}`}
          className="text-sm font-bold text-blue-600 hover:underline transition-all"
        >
          {sections[activeIndex].charAt(0).toUpperCase() +
            sections[activeIndex].slice(1)}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
