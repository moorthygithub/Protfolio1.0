
import { motion } from "framer-motion";
import About from "../About/About";
import ProfileHome from "../ProfileSection/ProfileHome";
import Project from "../Project/Project";
import SkillCarousel from "../Skill/SkillCarsoul";
import { Contact } from "../Contact/Contact";
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Profile = () => {
  return (
    <motion.div
      className="relative"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
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
      <section id="contact">
        <Contact />
      </section>
    </motion.div>
  );
};

export default Profile;
