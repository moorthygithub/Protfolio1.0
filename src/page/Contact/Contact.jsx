import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import {
  Loader,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import * as Yup from "yup";
import darkModeImage from "../../assets/home/about-banner-1.png";

export const Contact = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      Email: "",
      Phone: "",
      Description: "",
    },
    validationSchema: Yup.object({
      Firstname: Yup.string().required("First Name is required"),
      Lastname: Yup.string().required("Last Name is required"),
      Email: Yup.string().email("Invalid email").required("Email is required"),
      Phone: Yup.string().required("Phone is required"),
      Description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const res = await axios.post(
          "https://node-test-cdke.onrender.com/api/profolio",
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success(res.message || "Message sent successfully");
        resetForm();
      } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to send message");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      ref={ref}
      className={`relative py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300 overflow-hidden ${
        darkMode ? "bg-black text-white" : "text-gray-900"
      }`}
      style={{
        backgroundImage: darkMode ? `url(${darkModeImage})` : "",
        background: !darkMode
          ? `linear-gradient(150deg, var(--primary-color) 0%, #d1cfcf 70%, #a8b6b7 100%)`
          : `url(${darkModeImage})`,
      }}
    >
      {darkMode && <div className="absolute inset-0 bg-black/60 z-0" />}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative text-white py-10 text-center overflow-hidden">
          <h1
            className={`absolute inset-0 flex items-center justify-center text-[100px] sm:text-[120px] lg:text-[160px] font-extrabold uppercase z-0 select-none pointer-events-none ${
              darkMode ? "text-white/5" : "text-black/5"
            }`}
          >
            Contact
          </h1>

          <div className="relative z-10 space-y-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              <span
                className={`text-transparent bg-clip-text drop-shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-500"
                    : "bg-gradient-to-r from-[#ff014f] via-[#fc6076] to-[#ffbe8e]"
                }`}
              >
                Let's Connect
              </span>
            </motion.h2>

            <h3 className="text-2xl font-semibold text-white/80">
              <span className="text-white">
                Have a question or want to work together? Fill out the form
                below.
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ContactItem
              icon={<MailIcon size={20} />}
              label="Email"
              value="https://github.com/moorthygithub"
            />
            <ContactItem
              icon={<PhoneIcon size={20} />}
              label="Phone"
              value="+91 9360485526"
            />
            <ContactItem
              icon={<SendIcon size={20} />}
              label="Telegram"
              value="https://t.me/moorthychandiran"
            />
            <ContactItem
              icon={<IconBrandLinkedin size={20} />}
              label="LinkedIn"
              value="https://www.linkedin.com/in/moorthy-c-982333217/"
            />
            <ContactItem
              icon={<IconBrandGithub size={20} />}
              label="GitHub"
              value="github.com/yourusername"
            />
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <InputField
              label="First Name"
              name="Firstname"
              value={formik.values.Firstname}
              onChange={formik.handleChange}
              error={formik.touched.Firstname && formik.errors.Firstname}
            />
            <InputField
              label="Last Name"
              name="Lastname"
              value={formik.values.Lastname}
              onChange={formik.handleChange}
              error={formik.touched.Lastname && formik.errors.Lastname}
            />
            <InputField
              label="Email"
              name="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              error={formik.touched.Email && formik.errors.Email}
            />
            <InputField
              label="Phone"
              name="Phone"
              type="tel"
              value={formik.values.Phone}
              onChange={formik.handleChange}
              error={formik.touched.Phone && formik.errors.Phone}
            />
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-semibold">
                Description *
              </label>
              <textarea
                name="Description"
                rows="5"
                value={formik.values.Description}
                onChange={formik.handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              {formik.touched.Description && formik.errors.Description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.Description}
                </p>
              )}
            </div>
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                {loading ? (
                  <div className="flex">
                    <Loader className="animate-spin" />
                    <span className="ml-2">Sending</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  error,
}) => (
  <div>
    <label htmlFor={name} className="block mb-2 text-sm font-semibold">
      {label} {required && "*"}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// const ContactItem = ({ icon, label, value }) => {
//   const darkMode = useSelector((state) => state.auth.darkMode);

//   return (
//     <div className="flex items-start space-x-4">
//       <div
//         className={`p-2 rounded-full shadow-md ${
//           darkMode ? "bg-black text-white" : "bg-white text-gray-900"
//         }`}
//       >
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
//           {label}
//         </p>
//         <p className="text-lg font-semibold">{value}</p>
//       </div>
//     </div>
//   );
// };
const ContactItem = ({ icon, label, value }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  let href = "#";
  switch (label.toLowerCase()) {
    case "email":
      href = `mailto:${value.replace(/^https?:\/\//, "")}`;
      break;
    case "phone":
      href = `tel:${value}`;
      break;
    case "telegram":
    case "linkedin":
    case "github":
      href = value.startsWith("http") ? value : `https://${value}`;
      break;
    default:
      href = "#";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start space-x-4 group"
    >
      <div
        className={`p-2 rounded-full shadow-md transition ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        } group-hover:scale-105`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
          {label}
        </p>
        <p className="text-lg font-semibold underline underline-offset-2 group-hover:text-primary transition">
          {value}
        </p>
      </div>
    </a>
  );
};
