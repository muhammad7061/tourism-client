import React from "react";

const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      data-slot="textarea"
      className={`w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    />
  );
};

export default Textarea;