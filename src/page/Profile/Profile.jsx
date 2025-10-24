// import { motion } from "framer-motion";
// import About from "../About/About";
// import ProfileHome from "../ProfileSection/ProfileHome";
// import Project from "../Project/Project";
// import { Contact } from "../Contact/Contact";
// import SkillMain from "../Skill/SkillMain";
// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// const Profile = () => {
//   return (
//     <motion.div
//       className="relative"
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ duration: 0.4 }}
//     >
//       <section id="home">
//         <ProfileHome />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <SkillMain />
//       <section id="projects">
//         <Project />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </motion.div>
//   );
// };

// export default Profile;
"use client";

import { motion } from "framer-motion";
import About from "../About/About";
import ProfileHome from "../ProfileSection/ProfileHome";
import Project from "../Project/Project";
import { Contact } from "../Contact/Contact";
import SkillMain from "../Skill/SkillMain";
import darkModeImage from "../../assets/home/about-banner-1.png";
import { useSelector } from "react-redux";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const SectionWrapper = ({ id, children }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <section
      id={id}
      className={`relative bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${darkModeImage})`,
      }}
    >
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/70" : "bg-white/70"
        } backdrop-blur-[2px]`}
      ></div>

      {/* Section content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
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
      <SectionWrapper id="home">
        <ProfileHome />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SkillMain />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Project />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </motion.div>
  );
};

export default Profile;
