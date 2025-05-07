import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { GraduationCap, Briefcase } from "lucide-react";
import darkModeImage from "../../assets/home/about-banner-1.png";
const educationData = [
  {
    title: "Full Stack Python",
    description:
      "Completed Full Stack Python program at Besant Technologies, delivering multiple full stack projects and mastering backend/frontend skills.",
    icon: <GraduationCap size={24} />,
  },
  {
    title: "Bachelor of Engineering",
    description:
      "Graduated in Electronics and Instrumentation from Bannari Amman Institute of Technology (2019–2023) with a CGPA of 8.49.",
    icon: <GraduationCap size={24} />,
  },
  {
    title: "HSC (12th Standard)",
    description:
      "Completed Higher Secondary at Sri Vijay Vidhyalaya Matric School, Krishnagiri with 68.6% (2017–2019).",
    icon: <GraduationCap size={24} />,
  },
  {
    title: "SSLC (10th Standard)",
    description:
      "Completed SSLC at Kingsley Garden Matric Higher Secondary School, Kandikuppam with 79% (2016–2017).",
    icon: <GraduationCap size={24} />,
  },
];

const About = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
      style={{
        backgroundImage: darkMode ? `url(${darkModeImage})` : "",
        backgroundColor: darkMode
          ? ""
          : `linear-gradient(135deg, var(--primary-color) 0%, #fdfcfb 50%, #8ec5fc 100%)`,
        background: !darkMode
          ? `linear-gradient(135deg, var(--primary-color) 0%, #fdfcfb 50%, #8ec5fc 100%)`
          : `url(${darkModeImage})`,
      }}
    >
      {darkMode && <div className="absolute inset-0 bg-black/60  z-0" />}

      <motion.div
        className="relative z-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={0}
      >
        <div className="relative text-white py-10 text-center overflow-hidden">
          <h1
            className={`absolute inset-0 flex items-center justify-center text-[90px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none pointer-events-none ${
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
              } drop-shadow-lg`}
            >
              Journey of Growth & Learning
            </h1>
            <p
              className={`text-lg mt-6 max-w-3xl mx-auto ${
                darkMode ? "text-zinc-300" : "text-gray-600"
              }`}
            >
              A timeline reflecting my academic achievements and current
              professional role as a React Developer.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`relative z-10  max-w-4xl mx-auto p-10 rounded-2xl shadow-2xl mb-16 ${
          darkMode
            ? "border border-white/20 bg-white/5 backdrop-blur-xl"
            : "border border-gray-200 bg-gray-100"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        custom={educationData.length + 1}
      >
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg ${
              darkMode
                ? "bg-gradient-to-br from-indigo-500 to-pink-400"
                : "bg-gradient-to-br from-indigo-400 to-pink-400"
            }`}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Briefcase size={28} />
          </motion.div>
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
          Since August 2024, I’ve been enhancing user experiences and optimizing
          performance at AG Solution. My work focuses on building scalable,
          modern interfaces with best-in-class React practices and architecture.
        </p>
      </motion.div>
      {/* Timeline */}
      <div className="relative z-10 flex flex-col space-y-16">
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
            custom={idx + 1}
            whileHover={{ scale: 1.015, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div
              className={`absolute left-1/2 -translate-x-1/2 h-full w-1 ${
                darkMode
                  ? "bg-gradient-to-b from-pink-400 to-purple-500"
                  : "bg-gray-300"
              }`}
            />

            <div
              className={`relative max-w-4xl mx-auto p-6 rounded-2xl shadow-xl transition-all duration-300 ${
                darkMode
                  ? "bg-white/10 backdrop-blur-lg border border-white/20"
                  : "bg-gray-100 border border-gray-200"
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${
                    darkMode
                      ? "bg-gradient-to-tr from-purple-500 to-pink-500"
                      : "bg-gradient-to-tr from-indigo-400 to-pink-400"
                  }`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-pink-300" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-zinc-300" : "text-gray-700"
                }`}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
