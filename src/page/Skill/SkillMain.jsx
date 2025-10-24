import React from "react";
import { useSelector } from "react-redux";
import darkModeImage from "../../assets/home/about-banner-1.png";
import PrimarySkills from "./PrimarySkills";
import SecondarySkills from "./SecondarySkills";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SkillMain = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 overflow-hidden ${
        darkMode ? "bg-black text-white" : " text-gray-900"
      }`}
      style={{
        backgroundImage: darkMode ? `url(${darkModeImage})` : "",
        backgroundColor: darkMode ? "" : "transparent",
        background: !darkMode
          ? `linear-gradient(150deg, var(--primary-color) 0%, #d1cfcf 70%, #a8b6b7 100%)`
          : `url(${darkModeImage})`,
      }}
    >
      {darkMode && <div className="absolute inset-0 bg-black/60 z-0" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative py-10">
          <h1
            className={`absolute inset-0 flex items-center justify-center text-[60px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none pointer-events-none ${
              darkMode ? "text-white/5" : "text-black/5"
            }`}
          >
            SKills
          </h1>

          <div className="relative z-10 space-y-4" ref={ref}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={`text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-lg ${
                darkMode
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
                  : "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"
              } animate-text-shimmer`}
            >
              My Tech Stack
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg sm:text-2xl font-semibold ${
                darkMode ? "text-zinc-300" : "text-gray-600"
              }`}
            >
              A categorized look at the technologies I use to build robust,
              modern applications.
            </motion.h3>
          </div>
        </div>
      </div>

      <PrimarySkills />
      <SecondarySkills />
    </div>
  );
};

export default SkillMain;
