import AsideContacts from "../AsideContacts/AsideContacts";
import IntroCard from "../IntroCard/IntroCard";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <IntroCard />
      <AsideContacts className="hidden md:block" />
      {/* <Navbar /> */}
    </>
  );
};

export default Home;
