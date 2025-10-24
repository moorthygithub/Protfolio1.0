import React from "react";
import { Link } from "react-scroll";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  iconBefore = null,
  iconAfter = null,
  to = null,
  smooth = true,
  duration = 800,
  offset = -50,
  variant = "filled",
}) => {
  const baseClasses = `cursor-pointer px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-in-out transform disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  const variantClasses =
    variant === "outlined"
      ? `border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white`
      : `bg-[#ff014f] text-white shadow-md hover:bg-pink-700 hover:shadow-lg hover:-translate-y-1`;

  const finalClasses = `${baseClasses} ${variantClasses}`;

  if (to) {
    return (
      <Link
        to={to}
        smooth={smooth}
        duration={duration}
        offset={offset}
        className={finalClasses}
      >
        {iconBefore && <span className="text-lg">{iconBefore}</span>}
        <span>{children}</span>
        {iconAfter && <span className="text-lg">{iconAfter}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {iconBefore && <span className="text-lg">{iconBefore}</span>}
      <span>{children}</span>
      {iconAfter && <span className="text-lg">{iconAfter}</span>}
    </button>
  );
};

export default Button;
