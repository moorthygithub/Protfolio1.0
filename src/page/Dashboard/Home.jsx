import AsideContacts from "../AsideContacts/AsideContacts";
import IntroCard from "../IntroCard/IntroCard";

const Home = () => {
  return (
    <div className="relative">
      <IntroCard />
      <AsideContacts className=" hidden md:block" />
    </div>
  );
};

export default Home;
