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

// Skill data
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
  const [ref, inView] = useInView({ threshold: 0.2 });

  const midpoint = Math.floor(skills.length / 2);

  return (
    <div
      ref={ref}
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
      style={
        darkMode
          ? {
              backgroundImage: `url(${darkModeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Dark overlay for dark mode */}
      {darkMode && <div className="absolute inset-0 bg-black/60 z-0" />}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          key={inView ? "heading-in" : "heading-out"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          <h1
            className={`text-5xl font-extrabold text-transparent bg-clip-text ${
              darkMode
                ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"
            } drop-shadow-lg`}
          >
            {" "}
            My Tech Stack
          </h1>
        </motion.h2>

        <motion.div
          key={inView ? "grid-in" : "grid-out"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${inView}`}
              className="flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 p-5 rounded-3xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/5 shadow-md hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{
                opacity: 0,
                x: index < midpoint ? -30 : 30,
                y: 30,
              }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-3"
              />
              <p className="text-sm font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillGrid;
