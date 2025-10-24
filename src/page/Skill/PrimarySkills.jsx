"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

// Skill Assets
import ReactLogo from "../../assets/skills/react.webp";
import NextLogo from "../../assets/skills/nextjs.png";
import JavaScriptLogo from "../../assets/skills/javascript.webp";
import TypeScriptLogo from "../../assets/skills/typescript.png";
import HtmlLogo from "../../assets/skills/html.webp";
import CssLogo from "../../assets/skills/css.jpg";
import TailwindLogo from "../../assets/skills/tailwind.png";
import ReduxLogo from "../../assets/skills/redux.png";
import ReactQueryLogo from "../../assets/skills/reactquery.png";
import MaterialUiLogo from "../../assets/skills/materialui.png";
import AntDesignLogo from "../../assets/skills/ant.svg";
import MaterialTailwindLogo from "../../assets/skills/materialtailwind.png";
import RadixLogo from "../../assets/skills/radix.png";
import ShadcnLogo from "../../assets/skills/shadcn.png";
import PythonLogo from "../../assets/skills/python.png";
import NodeJsLogo from "../../assets/skills/nodejs.png";
import ExpressLogo from "../../assets/skills/express.png";
import FastApiLogo from "../../assets/skills/fastapi.jpg";
import SqlLogo from "../../assets/skills/sql.png";
import GithubLogo from "../../assets/skills/github.png";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { image: ReactLogo, name: "React" },
      { image: NextLogo, name: "Next.js" },
      { image: JavaScriptLogo, name: "JavaScript" },
      { image: TypeScriptLogo, name: "TypeScript" },
      { image: HtmlLogo, name: "HTML" },
      { image: CssLogo, name: "CSS" },
      { image: TailwindLogo, name: "Tailwind" },
      { image: ReduxLogo, name: "Redux" },
      { image: ReactQueryLogo, name: "React Query" },
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { image: MaterialUiLogo, name: "Material UI" },
      { image: AntDesignLogo, name: "Ant Design" },
      { image: MaterialTailwindLogo, name: "Material Tailwind" },
      { image: RadixLogo, name: "Radix UI" },
      { image: ShadcnLogo, name: "Shadcn UI" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { image: PythonLogo, name: "Python" },
      { image: NodeJsLogo, name: "Node.js" },
      { image: ExpressLogo, name: "Express.js" },
      { image: FastApiLogo, name: "FastAPI" },
      { image: SqlLogo, name: "SQL" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [{ image: GithubLogo, name: "GitHub" }],
  },
];

const PrimarySkills = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 border-l-4 pl-3 ${
                  darkMode
                    ? "border-pink-500 text-white"
                    : "border-pink-600 text-gray-800"
                }`}
              >
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={`${skill.name}-${i}`}
                    className={`flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-xl backdrop-blur-md shadow-md border ${
                      darkMode
                        ? "border-white/10 bg-white/5"
                        : "border-gray-200 bg-white/60"
                    } hover:shadow-xl hover:scale-105 transition-transform`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <p className="text-sm font-medium text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimarySkills;
