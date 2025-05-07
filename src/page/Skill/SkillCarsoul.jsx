import React from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import darkModeImage from "../../assets/home/about-banner-1.png";

// Images
import reactImg from "../../assets/skills/react.webp";
import tsImg from "../../assets/skills/typescript.png";
import jsImg from "../../assets/skills/javascript.webp";
import cssImg from "../../assets/skills/css.jpg";
import htmlImg from "../../assets/skills/html.webp";
import tailwindImg from "../../assets/skills/tailwind.png";
import materialUi from "../../assets/skills/materialui.png";
import materialUiTailwind from "../../assets/skills/materialtailwind.png";
import pythonImg from "../../assets/skills/python.png";
import fastapiImg from "../../assets/skills/fastapi.jpg";
import sqlImg from "../../assets/skills/sql.png";
import Redux from "../../assets/skills/redux.png";
import ReactHook from "../../assets/skills/reactquery.webp";
import Radix from "../../assets/skills/radix.png";
import Github from "../../assets/skills/github.png";
import SecondarySkills from "./SecondarySkills";

const skills = [
  { image: reactImg, name: "React" },
  { image: jsImg, name: "JavaScript" },
  { image: tsImg, name: "TypeScript" },
  { image: cssImg, name: "CSS" },
  { image: htmlImg, name: "HTML" },
  { image: tailwindImg, name: "Tailwind CSS" },
  { image: materialUi, name: "Material UI" },
  { image: materialUiTailwind, name: "Material Tailwind" },
  { image: ReactHook, name: "React Query" },
  { image: Redux, name: "Redux" },
  { image: Radix, name: "Radix UI" },
  { image: Github, name: "GitHub" },
  { image: pythonImg, name: "Python" },
  { image: fastapiImg, name: "FastAPI" },
  { image: sqlImg, name: "SQL" },
];

const SkillGrid = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ threshold: 0.15 });
  const midpoint = Math.floor(skills.length / 2);

  return (
    <div
      ref={ref}
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative text-white py-10 text-center overflow-hidden">
          <h1
            className={`absolute inset-0 flex items-center justify-center text-[100px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none pointer-events-none ${
              darkMode ? "text-white/5" : "text-black/5"
            }`}
          >
            {" "}
            Skills
          </h1>

          <div className="relative z-10 space-y-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              <span
                className={`text-transparent bg-clip-text drop-shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
                    : "bg-gradient-to-r from-[#ff014f] via-[#fc6076] to-[#ffbe8e]"
                }`}
              >
                My Tech Stack
              </span>
            </motion.h2>

            <h3 className="text-2xl font-semibold text-white/80">
              <span className="text-pink-500">30+</span> Soft{" "}
              <span className="text-white">Skill & HardSkill</span>
            </h3>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 p-5 rounded-3xl backdrop-blur-xl shadow-md hover:shadow-2xl transition-all"
              style={{
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.6)",
                border: "2px solid rgba(255, 73, 74, 0.16)",
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{
                opacity: 0,
                y: 30,
                x: index < midpoint ? -40 : 40,
              }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-3 rounded-xl"
              />
              <p className="text-sm font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <SecondarySkills />
      
    </div>
  );
};

export default SkillGrid;
