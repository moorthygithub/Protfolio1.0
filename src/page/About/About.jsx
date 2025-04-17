import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { GraduationCap, Briefcase } from "lucide-react";

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
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
      // style={
      //   darkMode
      //     ? {
      //         backgroundImage: `url(${darkModeImage})`,
      //         backgroundSize: "cover",
      //         backgroundPosition: "center",
      //       }
      //     : {}
      // }
    >
      {darkMode && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0" />
      )}

      {/* Header */}
      <motion.div
        key={inView ? "in-view" : "out-of-view"}
        className="relative z-10 text-center pb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`text-5xl font-extrabold text-transparent bg-clip-text ${
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
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 flex flex-col space-y-16">
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: idx * 0.8 }}
          >
            <div
              className={`absolute left-1/2 -translate-x-1/2 h-full w-1 ${
                darkMode
                  ? "bg-gradient-to-b from-pink-400 to-purple-500"
                  : "bg-gray-300"
              }`}
            />
            <div
              className={`relative max-w-4xl mx-auto p-6 rounded-2xl shadow-xl transition-all hover:scale-[1.01] duration-300 ${
                darkMode
                  ? "bg-white/10 backdrop-blur-lg border border-white/20"
                  : "bg-gray-100 border border-gray-200"
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${
                    darkMode
                      ? "bg-gradient-to-tr from-purple-500 to-pink-500"
                      : "bg-gradient-to-tr from-indigo-400 to-pink-400"
                  }`}
                >
                  {item.icon}
                </div>
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

      {/* Current Role */}
      <motion.div
        className={`relative z-10 mt-24 max-w-4xl mx-auto p-10 rounded-2xl shadow-2xl ${
          darkMode
            ? "border border-white/20 bg-white/5 backdrop-blur-xl"
            : "border border-gray-200 bg-gray-100"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
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
          Since August 2024, I’ve been enhancing user experiences and optimizing
          performance at AG Solution. My work focuses on building scalable,
          modern interfaces with best-in-class React practices and architecture.
        </p>
      </motion.div>

      {/* Footer Call-To-Action */}
      <motion.div
        className="relative z-10 text-center mt-24 py-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p
          className={`text-xl font-semibold drop-shadow-md ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Let’s build something epic together.
        </p>
        <button
          className={`mt-6 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ${
            darkMode
              ? "text-white bg-gradient-to-r from-pink-500 to-purple-600"
              : "text-white bg-gradient-to-r from-indigo-500 to-pink-500"
          }`}
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  );
};

export default About;
