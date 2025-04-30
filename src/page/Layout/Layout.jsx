import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import ScrollToTopCircle from "../SideBar/Sidebar";
import FontSelector from "../../component/common/FontSelector";
const Layout = ({ children }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const font = useSelector((state) => state.settings.fontFamily);
  const color = useSelector((state) => state.settings.primaryColor);
  console.log(color);

  return (
    <div
      className="relative"
      style={{
        fontFamily: font,
        "--primary-color": color, 
      }}
    >
      <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <ScrollToTopCircle />
        <FontSelector />
        <Navbar />
      </div>

      <main className="space-y-20">
        <div
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
