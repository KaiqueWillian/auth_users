import React from "react";

function Input({ type, placeholder, value, onChange, autoComplete }) {
  return (
    <input
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="h-12 bg-transparent  border rounded-[4px] py-4 pl-5 text-white mb-5"
      onChange={onChange}
      value={value}
      pattern="^[a-zA-Z0-9]*$"
      required
    />
  );
}
export default Input;
