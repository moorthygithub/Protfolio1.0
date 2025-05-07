import About from "../About/About";
import ProfileHome from "../ProfileSection/ProfileHome";
import Project from "../Project/Project";
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
        <section id="projects">
          <Project />
        </section>
        <section id="contact" className="h-screen bg-gray-400 p-10">
          Contact Section
        </section>
      </div>
    </div>
  );
};

export default Profile;
