import React from "react";

const Label = ({ className = "", ...props }) => {
  return (
    <label
      data-slot="label"
      className={`block text-sm font-medium mb-1 ${className}`}
      {...props}
    />
  );
};

export default Label;