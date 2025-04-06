import { motion } from "framer-motion";
import { Code } from "lucide-react";
import icon from "../../assets/InfoCardIcon/boy.png";
import { Typewriter } from "react-simple-typewriter";

const FloatingCircle = ({ size, xValues, yValues, duration, position }) => (
  <motion.div
    initial={{ x: xValues[0], y: yValues[0], opacity: 0.5 }}
    animate={{ x: xValues, y: yValues, opacity: 1 }}
    transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
    className={`absolute w-${size} h-${size} bg-white/30 rounded-full ${position}`}
  />
);

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const GlassCard = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative md:z-10 flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg p-[30px] md:p-10 rounded-3xl shadow-2xl max-w-lg md:max-w-2xl border border-white/30"
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="p-5 bg-white/20 rounded-full"
    >
      <img src={icon} alt="Person Icon" className="w-28 md:w-40 h-28 md:h-40" />
    </motion.div>

    <div className="mt-2 md:ml-6 text-white text-center md:text-left">
      <motion.h1
        className="text-4xl font-extrabold tracking-wide font-serif"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Hi, I'm <span className="text-black">Moorthy</span>
      </motion.h1>

      <motion.p
        className="text-lg font-medium mt-2 flex justify-center md:justify-start items-center space-x-2 font-mono"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Code className="text-white" />
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

      <motion.button
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        className="mt-6 px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/20 transition-all hover:scale-105 text-lg font-semibold font-sans"
      >
        See My Work
      </motion.button>
    </div>
  </motion.div>
);

const IntroCard = () => {
  const circles = [
    {
      size: 48,
      xValues: [0, 300, -300, 0],
      yValues: [0, 200, -200, 0],
      duration: 8,
      position: "top-20 left-5",
    },
    {
      size: 60,
      xValues: [0, 350, -350, 0],
      yValues: [0, -150, 150, 0],
      duration: 10,
      position: "top-1/3 left-10",
    },
    {
      size: 48,
      xValues: [0, -300, 300, 0],
      yValues: [0, 150, -150, 0],
      duration: 9,
      position: "top-32 right-10",
    },
    {
      size: 64,
      xValues: [0, -350, 350, 0],
      yValues: [0, -200, 200, 0],
      duration: 7,
      position: "bottom-10 right-5",
    },
    {
      size: 44,
      xValues: [0, 200, -200, 0],
      yValues: [0, 250, -250, 0],
      duration: 6,
      position: "top-5 left-1/4",
    },
    {
      size: 72,
      xValues: [0, -250, 250, 0],
      yValues: [0, 300, -300, 0],
      duration: 11,
      position: "top-10 right-1/3",
    },
    {
      size: 52,
      xValues: [0, -220, 220, 0],
      yValues: [0, -270, 270, 0],
      duration: 9,
      position: "bottom-5 left-1/3",
    },
    {
      size: 80,
      xValues: [0, 270, -270, 0],
      yValues: [0, -320, 320, 0],
      duration: 8,
      position: "bottom-10 right-1/4",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden px-4 md:px-0">
      {circles.map((circle, index) => (
        <FloatingCircle key={index} {...circle} />
      ))}
      <GlassCard />
    </div>
  );
};

export default IntroCard;
