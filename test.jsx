import { Home, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md my-6">
      <motion.div
        className="bg-white/10 backdrop-blur-2xl shadow-[0_4px_30px_rgba(255,255,255,0.3)] rounded-full flex justify-around p-4 border border-white/20 text-white transition-all duration-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Home Button */}
        <Link
          to="/home"
          className="group flex flex-col items-center text-white"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Home size={30} className="drop-shadow-lg transition-transform" />
            <motion.span
              className="absolute inset-0 w-full h-full bg-purple-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-sm font-semibold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Home
          </span>
        </Link>
        {/* Profile Button */}
        <Link
          to="/profile"
          className="group flex flex-col items-center text-white"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <User size={30} className="drop-shadow-lg transition-transform" />
            <motion.span
              className="absolute inset-0 w-full h-full bg-blue-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-sm font-semibold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Profile
          </span>
        </Link>
        {/* Logout Button */}
        <Link
          onClick={handleLogout}
          className="group flex flex-col items-center text-white"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <LogOut size={30} className="drop-shadow-lg transition-transform" />
            <motion.span
              className="absolute inset-0 w-full h-full bg-red-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-sm font-semibold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Logout
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
