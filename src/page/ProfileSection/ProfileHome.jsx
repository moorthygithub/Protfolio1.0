import { ArrowRight, Download } from "lucide-react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import darkModeImage from "../../assets/home/home-banner.jpg";
import heroImage from "../../assets/profileIcon/hero_image.jpeg";
import SocialLinks from "../../component/HomeSocialLinks/SocialLinks";
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
        darkMode ? "bg-cover bg-center bg-no-repeat" : ""
      }`}
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
      {darkMode && <div className="absolute inset-0 bg-black/50 z-0" />}

      <SocialLinks />

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
          className={`text-xl md:text-4xl font-semibold ${
            darkMode ? "text-[#ff014f]" : "text-gray-800"
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
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={15}
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
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-50}
            className="cursor-pointer bg-[#ff014f] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-pink-700 transition"
          >
            Contact Me <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://github.com/user-attachments/files/22428952/MOORTHY-CHANDIRAN.pdf"
            download
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-600 hover:text-white transition"
          >
            Download Resume <Download className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <AnimatedImageBlock src={heroImage} alt="Moorthy" inView={inView} />
    </div>
  );
};

export default ProfileHome;
