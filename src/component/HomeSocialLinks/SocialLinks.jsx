import { Github, Linkedin, Gitlab, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/moorthygithub",
    color: { light: "text-gray-800", dark: "text-white" },
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/moorthy-c-982333217/",
    color: { light: "text-blue-700", dark: "text-blue-400" },
  },
  {
    icon: Gitlab,
    link: "https://gitlab.com/moorthy.chandiran21",
    color: { light: "text-orange-600", dark: "text-orange-400" },
  },
  {
    icon: Mail,
    link: "mailto:moorthy.chandiran21@gmail.com",
    color: { light: "text-red-600", dark: "text-red-400" },
  },
];

export default function SocialLinks({ darkMode = false }) {
  return (
    <div className="hidden md:flex flex-col gap-4 absolute left-4 top-1/2 -translate-y-1/2 z-50">
      {socialLinks.map(({ icon: Icon, link, color }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Icon
            className={`w-6 h-6 transition-transform duration-200 group-hover:scale-125 ${
              darkMode ? color.dark : color.light
            }`}
          />
        </a>
      ))}
    </div>
  );
}
