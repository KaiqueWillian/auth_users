import React from "react";

function Button({ children, type }) {
  return (
    <button
      type={type}
      className="h-12 bg-transparent border mt-5 rounded-[4px] py-4 flex items-center justify-center hover:opacity-50 transition-opacity"
    >
      {children}
    </button>
  );
}
export default Button;
