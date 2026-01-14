import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Database,
  Globe,
  Lock,
  ShoppingCart,
  Zap,
} from "lucide-react";
import React, { useMemo, useState } from "react";

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "NexaEdu | Learning",
      category: "website",
      description:
        "Comprehensive educational platform delivering modern learning experiences with interactive content and resources.",
      tech: ["Next.js", "Tailwind CSS", "Database"],
      features: [
        "Course Management",
        "Student Dashboard",
        "Learning Resources",
      ],
      icon: Code2,
      color: "from-indigo-500 to-blue-500",
      link: "#",
    },
    {
      id: 2,
      title: "Lohiya's Groceries",
      category: "website",
      description:
        "Modern e-commerce platform for fresh grocery delivery with intuitive product browsing and checkout experience.",
      tech: ["React.js", "Tailwind CSS", "shadcn/ui"],
      features: ["Product Catalog", "Shopping Cart", "Order Management"],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      link: "#",
    },
    {
      id: 3,
      title: "WYBE | Creative",
      category: "website",
      description:
        "A stylish, modern web experience showcasing creative design with smooth interactions and engaging animations.",
      tech: ["React.js", "Tailwind CSS", "Animation"],
      features: ["Smooth Animations", "Creative Design", "Interactive UI"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      link: "#",
    },
    {
      id: 4,
      title: "PayNova | Payment",
      category: "website",
      description:
        "Next-gen transaction management platform designed for seamless payment processing and financial tracking.",
      tech: ["Next.js", "Tailwind CSS", "Payment"],
      features: ["Transaction Processing", "Payment Gateway", "Analytics"],
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      link: "#",
    },
    {
      id: 5,
      title: "Samaj Website",
      category: "website",
      description:
        "A vibrant community platform connecting Gujaratis worldwide through cultural programs, festivals, and social initiatives.",
      tech: ["React.js", "Tailwind CSS", "AOS"],
      features: [
        "Cultural Programs",
        "Community Events",
        "Charitable Activities",
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      link: "#",
    },
    {
      id: 6,
      title: "Sustainable",
      category: "website",
      description:
        "Modern template showcasing sustainable business practices with eco-friendly web design principles.",
      tech: ["Next.js", "Tailwind CSS"],
      features: ["Responsive Design", "Modern UI", "SEO Optimized"],
      icon: Code2,
      color: "from-lime-500 to-green-500",
      link: "#",
    },
    {
      id: 7,
      title: "SassCandy",
      category: "website",
      description:
        "Beautiful SaaS template with modern design patterns and interactive components for startups.",
      tech: ["Next.js", "Tailwind CSS"],
      features: ["SaaS Ready", "Modern Design", "Responsive"],
      icon: Code2,
      color: "from-pink-500 to-rose-500",
      link: "#",
    },
    {
      id: 8,
      title: "Saloon Booking App",
      category: "admin",
      description:
        "Complete salon management system with appointment scheduling, staff management, and customer tracking.",
      tech: [
        "Next.js",
        "TypeScript",
        "Redux",
        "S3 Storage",
        "Backend",
        "Database",
        "RBAC",
        "Material UI",
        "React Query",
        "Razorpay Integration",
      ],
      features: [
        "Appointment Booking",
        "Staff Management",
        "Payment Integration",
        "Report Generation",
      ],
      icon: Database,
      color: "from-rose-500 to-orange-500",
      link: "#",
    },
    {
      id: 9,

      title: "Store Admin Panel",
      category: "admin",
      description:
        "Full-featured admin dashboard for retail store operations including sales, inventory, and analytics.",
      tech: [
        "React.js",
        "JavaScript",
        "React Query",
        "Tailwind CSS",
        "Redux",
        "motion framer",
      ],
      features: [
        "Sales Tracking",
        "Inventory Management",
        "Product Management",
        "Notifications",
      ],
      icon: Database,
      color: "from-amber-500 to-orange-500",
      link: "#",
    },
    {
      id: 10,
      title: "Export Management",
      category: "admin",
      description:
        "Logistics and export management platform for streamlined shipping and inventory operations.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Redux",
        "Shadcn ui",
        "Chart.js",
        "React Query",
        "motion framer",
      ],
      features: ["Master", "Contract", "Invoice", "Reports", "Purchase Order"],
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      link: "#",
    },
    {
      id: 11,
      title: "Pharmacy Management",
      category: "admin",
      description:
        "Integrated pharmacy system for inventory management, billing, and prescription tracking.",
      tech: [
        "React.js",
        "JavaScript",
        "Ant Ui",
        "Tailwind CSS",
        "motion framer",
      ],
      features: [
        "Master Items",
        "Contract Management",
        "Invoice Generation",
        "Reports",
      ],
      icon: Database,
      color: "from-green-500 to-teal-500",
      link: "#",
    },
    {
      id: 12,

      title: "Admin Dashboard",
      category: "admin",
      description:
        "Comprehensive admin dashboard managing multiple business operations across different domains.",
      tech: ["React.js", "Tailwind CSS", "Redux", "Chart.js"],
      features: ["Multi-module Management", "Analytics", "User Control"],
      icon: Database,
      color: "from-red-500 to-pink-500",
      link: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "admin", label: "Admin Panels" },
    { id: "website", label: "Websites" },
  ];

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="min-h-screen bg-slate-900 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="relative py-6 sm:py-10">
            <h1 className="absolute inset-0 flex items-center justify-center text-6xl sm:text-9xl lg:text-[160px] font-extrabold uppercase text-white/5 select-none pointer-events-none">
              Projects
            </h1>
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <h2
                className={`text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-500`}
              >
                Journey of Growth & Learning
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Check out these amazing projects I've worked on, showcasing my
                skills with modern technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-white font-semibold text-sm transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer"
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:border-white/20 transition-colors duration-300" />

                  {/* Icon */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between pr-12 sm:pr-14">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 sm:px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2 pt-2 border-t border-white/10"
                          >
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-purple-300">
                                Features:
                              </p>
                              <ul className="space-y-1">
                                {project.features.slice(0, 3).map((feat, i) => (
                                  <li
                                    key={i}
                                    className="text-xs text-gray-300 flex items-start gap-1.5"
                                  >
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1 flex-shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <a
                              href={project.link}
                              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-white bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg transition-all w-full"
                            >
                              View Project
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
