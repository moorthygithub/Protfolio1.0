import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import {
  IconArrowNarrowRight,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import heroImage from "../../assets/profileIcon/hero_image.jpeg";
import resumeFile from "../../assets/Resume/Moorthy_Chandiran.pdf";
import AnimatedImageBlock from "./AnimatedImageBlock";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProfileHome = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative min-h-screen px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#1e293b] to-[#475569]"
          : "bg-gradient-to-br from-[#fdfcfb] via-[#e0c3fc] to-[#8ec5fc]"
      }`}
    >
      {/* Side Icons */}
      <div className="hidden md:flex flex-col gap-4 absolute left-4 top-1/2 -translate-y-1/2 z-50">
        <a
          href="https://github.com/moorthygithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub
            className={`w-6 h-6 ${
              darkMode ? "text-white" : "text-gray-800"
            } hover:scale-125 transition`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/moorthy-c-982333217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin
            className={`w-6 h-6 ${
              darkMode ? "text-blue-400" : "text-blue-700"
            } hover:scale-125 transition`}
          />
        </a>
      </div>

      {/* Text Content */}
      <motion.div
        className="z-10 w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <p
          className={`text-xl md:text-2xl font-medium ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          👋 Hello, It's Me
        </p>

        <h1
          className={`text-3xl md:text-5xl font-extrabold ${
            darkMode ? "text-white" : "text-black"
          } font-specialGothic`}
        >
          Moorthy
        </h1>

        <h1
          className={`text-3xl md:text-5xl font-extrabold md:ml-28 ${
            darkMode ? "text-white" : "text-black"
          } font-specialGothic`}
        >
          Chandiran
        </h1>

        <p
          className={`text-xl font-semibold ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "Full Stack Developer",
              "UI/UX Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <p
          className={`text-sm md:text-base max-w-md mx-auto md:mx-0 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          I'm a passionate full stack developer who loves building responsive
          web apps, solving problems, and creating seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <a
            href="mailto:moorthy.chandiran21@gmail.com"
            className="bg-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-pink-700 transition"
          >
            Contact Me <IconArrowNarrowRight className="w-5 h-5" />
          </a>
          <a
            href={resumeFile}
            download
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-600 hover:text-white transition"
          >
            Download Resume <IconDownload className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <AnimatedImageBlock src={heroImage} alt="Moorthy" inView={inView} />
    </div>
  );
};

export default ProfileHome;
