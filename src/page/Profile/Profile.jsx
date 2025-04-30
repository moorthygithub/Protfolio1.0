import About from "../About/About";
import ProfileHome from "../ProfileSection/ProfileHome";
import SkillCarousel from "../Skill/SkillCarsoul";

const Profile = () => {
  return (
    <div className="relative">
      <div>
        <section id="home">
          <ProfileHome />
        </section>
        <section id="about">
          <About />
        </section>
        <SkillCarousel />
        <section id="projects" className="h-screen bg-gray-300 p-10">
          Projects Section
        </section>
        <section id="contact" className="h-screen bg-gray-400 p-10">
          Contact Section
        </section>
      </div>
    </div>
  );
};

export default Profile;
