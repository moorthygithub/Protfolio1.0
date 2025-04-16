import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import ScrollToTopCircle from "../SideBar/Sidebar";

const Layout = ({ children }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <div className="relative">
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <ScrollToTopCircle />
        <Navbar />
      </div>

      <main className="space-y-20">{children}</main>
    </div>
  );
};

export default Layout;
