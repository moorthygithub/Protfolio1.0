import AsideContacts from "../AsideContacts/AsideContacts";
import IntroCard from "../IntroCard/IntroCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* <InnerNavbar /> */}
      <Sidebar />
      <Navbar />

      <main className="pl-6 space-y-20">{children}</main>
    </div>
  );
};

export default Layout;
