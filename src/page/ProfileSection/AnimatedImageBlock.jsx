import { motion } from "framer-motion";

const AnimatedImageBlock = ({ src, alt = "Hero Image", inView = true }) => {
  return (
    <motion.div
      className="relative z-10 w-full md:w-1/2 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative p-1 rounded-3xl bg-white/20 backdrop-blur-sm shadow-xl hover:scale-[1.05] transition-all duration-500 border border-white/10">
        <div className="p-[2px] rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400">
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900">
            <img
              src={src}
              alt={alt}
              className="rounded-3xl w-[280px] sm:w-[350px] md:w-[420px] object-cover  duration-500 shadow-lg hover:shadow-2xl transform transition-transform"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedImageBlock;
