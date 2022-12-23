import React from "react";

export default ({ type, placeholder, value, onChange, autoComplete }) => {
  return (
    <input
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="h-12 bg-transparent  border rounded-[4px] py-4 pl-5 text-white mb-5"
      onChange={onChange}
      value={value}
      required
    />
  );
};
