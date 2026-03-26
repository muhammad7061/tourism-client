import React from "react";

const Select = ({ className = "", children, ...props }) => {
  return (
    <select
      data-slot="select"
      className={`w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;