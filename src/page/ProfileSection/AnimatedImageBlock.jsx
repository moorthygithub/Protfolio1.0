import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AnimatedImageBlock = ({ src, alt = "Hero Image", inView = true }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <motion.div
      className="relative z-10 w-full md:w-1/2 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className={`absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full 
        ${
          darkMode
            ? "bg-gradient-radial from-pink-500/30 via-purple-500/20 to-transparent"
            : "bg-gradient-radial from-pink-300/20 via-purple-300/10 to-transparent"
        } blur-3xl -z-10 animate-pulse`}
      />

      <motion.div
        className={`absolute top-0 left-0 w-[300px] h-[300px] rounded-full -z-20 blur-3xl
        ${
          darkMode
            ? "bg-gradient-to-tr from-purple-500 via-pink-400 to-indigo-500 opacity-20"
            : "bg-gradient-to-tr from-purple-300 via-pink-200 to-indigo-300 opacity-10"
        }`}
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full blur-sm
            ${darkMode ? "bg-white opacity-30" : "bg-black opacity-20"}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div>
        <motion.div
          className={`relative p-1 rounded-3xl backdrop-blur-md hover:scale-[1.07] transition-all duration-700 border 
        ${
          darkMode
            ? "bg-white/10 border-white/20 shadow-[0_0_80px_rgba(236,72,153,0.4)]"
            : "bg-zinc-100/50 border-zinc-300 shadow-[0_0_40px_rgba(0,0,0,0.1)]"
        }`}
          animate={{
            y: [0, -10, 0],
            boxShadow: darkMode
              ? [
                  "0 0 60px rgba(236,72,153,0.3)",
                  "0 0 80px rgba(168,85,247,0.5)",
                  "0 0 60px rgba(236,72,153,0.3)",
                ]
              : undefined,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className={`p-[3px] rounded-3xl  relative
        ${
          darkMode
            ? "bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500"
            : "bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300"
        }`}
          >
            <div
              className={`rounded-3xl overflow-hidden 
          ${darkMode ? "bg-zinc-900" : "bg-white"}`}
            >
              <img
                src={src}
                alt={alt}
                className="rounded-3xl w-[280px] sm:w-[350px] md:w-[420px] object-cover duration-700 transition-transform hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className={`absolute bottom-2 left-[50px] -translate-x-1/2  text-xl  md:text-4xl  font-bold uppercase tracking-wider whitespace-nowrap ${
              darkMode ? "text-transparent" : "text-transparent"
            }`}
            style={{
              display: "inline-block",
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: darkMode ? "#fff" : "#fff",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Web Developer
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedImageBlock;
