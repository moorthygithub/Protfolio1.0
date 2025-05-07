import {
  Blinds,
  BookOpenCheck,
  Figma,
  FileCheck2,
  FileText,
  Github,
  Gitlab,
  Laptop,
  Layers3,
  NotebookPen,
  PenTool,
  PenToolIcon,
  TerminalSquare,
  TicketCheck,
} from "lucide-react";
import React from "react";

import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

const tools = [
  { label: "VS Code", icon: <TerminalSquare size={20} /> },
  { label: "Postman", icon: <BookOpenCheck size={20} /> },
  { label: "Jupyter Notebook", icon: <NotebookPen size={20} /> },
  { label: "Anaconda Notebook", icon: <NotebookPen size={20} /> },
  { label: "Github", icon: <Github size={20} /> },
  { label: "Gitlab", icon: <Gitlab size={20} /> },
  { label: "Shadcn", icon: <Blinds size={20} /> },
  { label: "Figma", icon: <Figma size={20} /> },
  { label: "Canva", icon: <Layers3 size={20} /> },
  { label: "Logo Designer", icon: <PenTool size={20} /> },
  { label: "Template Designer", icon: <FileText size={20} /> },
  { label: "Adobe XD", icon: <PenToolIcon size={20} /> },
  { label: "Microsoft Office", icon: <FileCheck2 size={20} /> },
  { label: "Formik & Yup", icon: <Laptop size={20} /> },
  { label: "Zod", icon: <TicketCheck size={20} /> },
];

const ToolCard = ({ tool, darkMode }) => (
  <div
    className={`flex items-center gap-2 px-4 py-3 mx-2 rounded-md shadow-md transition duration-300
      ${
        darkMode
          ? "bg-[#0F0F0F] text-white hover:bg-white/70 hover:text-black"
          : "bg-white/70 text-zinc-800 hover:bg-[#3e3d3d] hover:text-white"
      }`}
  >
    <span className="text-pink-500">{tool.icon}</span>
    <span className="text-sm">{tool.label}</span>
  </div>
);

const SecondarySkills = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <div className="mt-20 space-y-4">
      <Marquee pauseOnHover speed={50}>
        {tools.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} darkMode={darkMode} />
        ))}
      </Marquee>
      <Marquee pauseOnHover direction="right" speed={40}>
        {tools.map((tool, idx) => (
          <ToolCard key={`reverse-${idx}`} tool={tool} darkMode={darkMode} />
        ))}
      </Marquee>
      <Marquee pauseOnHover speed={40}>
        {tools.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} darkMode={darkMode} />
        ))}
      </Marquee>
    </div>
  );
};

export default SecondarySkills;
