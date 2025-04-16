import { Home, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/store";

const NavItem = ({ to, Icon, label, color, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex flex-col items-center text-white"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <Icon size={30} className="drop-shadow-lg transition-transform" />
        <motion.span
          className={`absolute inset-0 w-full h-full ${color} blur-md opacity-0 group-hover:opacity-40 transition-opacity`}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      <span className="text-sm font-semibold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md my-6 z-50">
      <motion.div
        className="bg-white/10 backdrop-blur-2xl shadow-[0_4px_30px_rgba(255,255,255,0.3)] rounded-full flex justify-around p-[5px] md:p-4 border border-white/20 text-white transition-all duration-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <NavItem to="/home" Icon={Home} label="Home" color="bg-purple-400" />
        <NavItem
          to="/profile"
          Icon={User}
          label="Profile"
          color="bg-blue-400"
        />
        <NavItem
          to="/"
          Icon={LogOut}
          label="Logout"
          color="bg-red-400"
          onClick={handleLogout}
        />
      </motion.div>
    </div>
  );
};

export default Navbar;
