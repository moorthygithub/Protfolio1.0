import { motion } from "framer-motion";
import {
  IconMail,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const contacts = [
  {
    icon: IconMail,
    link: "mailto:your-moorthy.chandiran21@gmail.com",
    color: "bg-purple-400",
  },
  {
    icon: IconBrandGithub,
    link: "https://github.com/moorthygithub",
    color: "bg-gray-700",
  },
  {
    icon: IconBrandGitlab,
    link: "https://gitlab.com/moorthy.chandiran21",
    color: "bg-orange-500",
  },
  {
    icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/in/moorthy-c-982333217/",
    color: "bg-blue-500",
  },
];

const AsideContacts = () => {
  return (
    <div className="fixed top-1/3 right-5 p-[5px] md:p-4 bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 rounded-lg flex flex-col gap-4 text-white">
      {contacts.map(({ icon: Icon, link, color }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={` p-1 md:[0.5rem] lg:p-3 rounded-full ${color} flex items-center justify-center`}
        >
          <Icon size={24} className="drop-shadow-md" />
        </motion.a>
      ))}
    </div>
  );
};

export default AsideContacts;
