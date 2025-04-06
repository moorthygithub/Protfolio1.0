import {
  IconArrowNarrowRight,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/profileIcon/hero_image.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resumeFile from "../../assets/Resume/Moorthy_Chandiran.pdf";
const textVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProfileHome = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fdfcfb] via-[#e0c3fc] to-[#8ec5fc] px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Background Blob */}
      <div className="absolute w-[100px] h-[100px] bg-pink-400 rounded-full opacity-20 blur-3xl top-[-100px] right-[-100px] animate-pulse" />

      {/* Floating Social Icons */}
      <div className="hidden md:flex flex-col gap-4 absolute left-4 top-1/2 -translate-y-1/2 z-50">
        <a
          href="https://github.com/moorthygithub"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition hover:scale-110"
        >
          <IconBrandGithub className="w-6 h-6 text-gray-700 hover:text-black" />
        </a>
        <a
          href="https://www.linkedin.com/in/moorthy-c-982333217/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition hover:scale-110"
        >
          <IconBrandLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
        </a>
      </div>

      {/* Left Section */}
      <div className="z-10 w-full md:w-1/2 space-y-6 text-center md:text-left">
        <motion.div
          className="flex items-center justify-center md:justify-start gap-3"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            👋 Hello, It's Me
          </p>
        </motion.div>

        <motion.h1
          className="text-xl  md:text-4xl  lg:text-5xl font-extrabold text-gray-900 tracking-tight overflow-hidden whitespace-nowrap border-r-4 border-[#ec4899] pr-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Moorthy Chandiran
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-semibold text-gray-700"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
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
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2.5}
        >
          I'm a passionate full stack developer who loves building responsive
          web apps, solving problems, and creating seamless user experiences
          through code and design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center md:justify-start"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Link
            to="mailto:moorthy.chandiran21@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white rounded-full text-lg font-medium shadow-md hover:shadow-xl hover:from-[#d946ef] hover:to-[#6366f1] transition"
          >
            Contact Me
            <IconArrowNarrowRight className="w-5 h-5" />
          </Link>

          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-full text-lg font-medium hover:bg-[#8b5cf6] hover:text-white transition"
          >
            Download Resume
            <IconDownload className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        className="z-10 w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <div className="relative group">
          <motion.img
            src={heroImage}
            alt="Moorthy"
            className="w-[280px] sm:w-[350px] md:w-[420px] rounded-[2rem] shadow-2xl transition duration-300 group-hover:scale-105 border-4 border-transparent group-hover:border-[#a089d8]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 text-sm">
        ↓ Scroll to explore
      </div>
    </div>
  );
};

export default ProfileHome;
