import React from "react";

const Button = ({ className = "", ...props }) => {
  return (
    <button
      data-slot="button"
      className={`px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700 ${className}`}
      {...props}
    />
  );
};

export default Button;