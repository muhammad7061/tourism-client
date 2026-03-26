import React from "react";

const Input = ({ className = "", type = "text", ...props }) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={`w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    />
  );
};

export default Input;