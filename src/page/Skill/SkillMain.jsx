import React from "react";
import { useSelector } from "react-redux";
import darkModeImage from "../../assets/home/about-banner-1.png";
import PrimarySkills from "./PrimarySkills";
import SecondarySkills from "./SecondarySkills";

const SkillMain = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <div
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 overflow-hidden ${
        darkMode ? "bg-black text-white" : " text-gray-900"
      }`}
      style={{
        backgroundImage: darkMode ? `url(${darkModeImage})` : "",
        backgroundColor: darkMode ? "" : "transparent",
        background: !darkMode
          ? `linear-gradient(150deg, var(--primary-color) 0%, #d1cfcf 70%, #a8b6b7 100%)`
          : `url(${darkModeImage})`,
      }}
    >
      {darkMode && <div className="absolute inset-0 bg-black/60 z-0" />}

      <PrimarySkills />
      <SecondarySkills />
    </div>
  );
};

export default SkillMain;
