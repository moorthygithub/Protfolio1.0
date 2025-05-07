import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import shopify from "../../assets/Project/logo-color.png";
import taxi from "../../assets/Project/taxi-logo.png";
import form from "../../assets/Project/employee-logo.png";
import firebase from "../../assets/Project/firebase-logo.png";
import amazon from "../../assets/Project/amazon-logo.png";
import weather from "../../assets/Project/weather-logo.png";
import loan from "../../assets/Project/loan-calulator.png";

const projects = [
  {
    image: shopify,
    title: "Shopify",
    description: "An elegant e-commerce platform built with React and Redux.",
    link: "https://main--magshopping.netlify.app/",
  },
  {
    image: loan,
    title: "Loan Calculator",
    description: "Interactive EMI calculator with currency support.",
    link: "https://loan-calculator-website.netlify.app/",
  },
  {
    image: weather,
    title: "Weather App",
    description: "Real-time weather forecast using external APIs.",
    link: "https://main--fetchingweatherapi.netlify.app/",
  },
  {
    image: taxi,
    title: "Taxi Booking",
    description: "A taxi reservation UI with real-time fare calculation.",
    link: "https://main--jazzy-daffodil-b48ffd.netlify.app/",
  },
  {
    image: form,
    title: "Employee Management",
    description: "Manage employee data with auth & role-based access.",
    link: "https://main--employeemanagementformreact.netlify.app/",
  },
  {
    image: firebase,
    title: "Firebase Auth",
    description: "A secure login system using Firebase and React Context.",
    link: "https://github.com/moorthygithub/FirebaseAuthentication",
  },
  {
    image: amazon,
    title: "Amazon Clone",
    description: "A responsive Amazon-style storefront with cart & checkout.",
    link: "https://github.com/moorthygithub/Amazon-clone",
  },
];

const Project = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      style={{
        background: !darkMode
          ? "linear-gradient(135deg, var(--primary-color) 0%, #fdfcfb 50%, #8ec5fc 100%)"
          : "",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-16 sm:py-20 ${
          darkMode ? "bg-[#101010] text-white" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative py-10">
            <h1
              className={`absolute inset-0 flex items-center justify-center text-[60px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none pointer-events-none ${
                darkMode ? "text-white/5" : "text-black/5"
              }`}
            >
              Projects
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
                Journey of Growth & Learning
              </motion.h1>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-lg sm:text-2xl font-semibold ${
                  darkMode ? "text-zinc-300" : "text-gray-600"
                }`}
              >
                Check out these amazing projects I've worked on, showcasing my
                skills with modern technologies.
              </motion.h3>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white dark:bg-neutral-900 "
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {/* Image */}
                <div className="relative w-full aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <motion.div
                  initial={{ x: "100%" }}
                  animate={openIndex === index ? { x: 0 } : { x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute top-0 right-0 w-full h-full px-6 py-4 flex flex-col justify-center ${
                    darkMode
                      ? "bg-black/90 text-white"
                      : "bg-white/95 text-black"
                  } z-10`}
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block w-fit px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-gradient-to-r from-pink-400 to-orange-400 text-white"
                      }`}
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
