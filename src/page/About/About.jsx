import React, { useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import { Briefcase } from "lucide-react";
import darkModeImage from "../../assets/home/about-banner-1.png";

const educationData = [
  {
    title: "Full Stack Python",
    description:
      "Completed Full Stack Python program at Besant Technologies, delivering multiple full stack projects and mastering backend/frontend skills.",
    year: "2024",
  },
  {
    title: "Bachelor of Engineering",
    description:
      "Graduated in Electronics and Instrumentation from Bannari Amman Institute of Technology (2019–2023) with a CGPA of 8.49.",
    year: "2023",
  },
  {
    title: "HSC (12th Standard)",
    description:
      "Completed Higher Secondary at Sri Vijay Vidhyalaya Matric School, Krishnagiri with 68.6%.",
    year: "2019",
  },
  {
    title: "SSLC (10th Standard)",
    description:
      "Completed SSLC at Kingsley Garden Matric Higher Secondary School, Kandikuppam with 79%.",
    year: "2017",
  },
];

const About = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const timelineRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);

  // motion value for smooth height
  const lineHeightValue = useMotionValue(0);
  const smoothHeight = useSpring(lineHeightValue, {
    stiffness: 30,
    damping: 60,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!firstItemRef.current || !lastItemRef.current) return;

      const firstRect = firstItemRef.current.getBoundingClientRect();
      const lastRect = lastItemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visible height for the dashed line
      const topVisible = Math.max(0, windowHeight - firstRect.top);
      const bottomVisible = Math.max(0, lastRect.bottom - firstRect.top);

      lineHeightValue.set(Math.min(bottomVisible, topVisible));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lineHeightValue]);

  return (
    <div
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
      style={{
        backgroundImage: darkMode
          ? `url(${darkModeImage})`
          : `linear-gradient(135deg, var(--primary-color) 0%, #fdfcfb 50%, #8ec5fc 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: darkMode ? "fixed" : "scroll",
      }}
    >
      {darkMode && <div className="absolute inset-0 bg-black/75 z-0" />}

      {/* Title */}
      <div className="relative z-10 text-center mb-20">
        <h1
          className={`absolute inset-0 flex items-center justify-center text-[90px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none ${
            darkMode ? "text-white/5" : "text-black/5"
          }`}
        >
          ABOUT
        </h1>
        <div className="relative z-10">
          <h1
            className={`text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text ${
              darkMode
                ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"
            }`}
          >
            Journey of Growth & Learning
          </h1>
          <p
            className={`text-lg mt-6 max-w-3xl mx-auto ${
              darkMode ? "text-zinc-300" : "text-gray-600"
            }`}
          >
            A timeline showcasing my educational milestones and current
            professional journey.
          </p>
        </div>
      </div>

      {/* React Developer Card */}
      <div
        className={`relative z-10 max-w-4xl mx-auto p-10 rounded-2xl shadow-2xl mb-24 ${
          darkMode
            ? "border border-white/20 bg-white/5 backdrop-blur-xl"
            : "border border-gray-200 bg-gray-100"
        }`}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg ${
              darkMode
                ? "bg-gradient-to-br from-indigo-500 to-pink-400"
                : "bg-gradient-to-br from-indigo-400 to-pink-400"
            }`}
          >
            <Briefcase size={28} />
          </div>
          <h3
            className={`text-2xl font-bold bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-indigo-400 to-pink-400"
                : "bg-gradient-to-r from-purple-600 to-pink-500"
            }`}
          >
            React Developer at AG Solution
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            darkMode ? "text-zinc-300" : "text-gray-700"
          }`}
        >
          Since August 2024, I’ve been building responsive, high-performance
          React applications at AG Solution, focusing on user experience and
          scalability.
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[3px] border-l-2 border-dashed"
          style={{
            height: smoothHeight,
            borderColor: darkMode ? "#EC4899" : "#9F7AEA",
          }}
        />

       
        {educationData.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          // Separate ref for each item
          const itemRef = useRef(null);

          // Animate every time it comes into view
          const inView = useInView(itemRef, { once: false, margin: "-50px" });

          const initialX = isLeft ? -100 : 100; // left from left, right from right
          const initialY = -50; // slide down from top

          return (
            <motion.div
              key={idx}
              ref={itemRef}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, x: initialX, y: initialY }}
              animate={
                inView
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: initialX, y: initialY }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                className={`absolute top-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg font-bold text-white ${
                  darkMode
                    ? "bg-gradient-to-tr from-purple-500 to-pink-500"
                    : "bg-gradient-to-tr from-indigo-400 to-pink-400"
                } ${
                  isLeft
                    ? "left-[49%] top-1/3 translate-x-1/2"
                    : "left-1/2 top-1/3 -translate-x-1/2"
                }`}
              >
                {item.year}
              </div>

              <div
                className={`w-full md:w-1/2 flex ${
                  isLeft ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl shadow-lg transition-all duration-300 w-full md:w-96 md:ml-8 ${
                    darkMode ? "bg-white/5 backdrop-blur-xl" : "bg-gray-100"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-pink-300" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-zinc-300" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
