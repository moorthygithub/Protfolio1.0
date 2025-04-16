import Navbar from "../Navbar/Navbar";
import ProfileHome from "../ProfileSection/ProfileHome";

const Profile = () => {
  return (
    <div className="relative">
      <div className="space-y-20">
        <section id="home" >
          <ProfileHome />
        </section>
        <section id="about" className="h-screen bg-gray-200 p-10">
          About Section
        </section>
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
