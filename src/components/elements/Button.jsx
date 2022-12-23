import React from "react";

function Button({ children, type }) {
  return (
    <button
      type={type}
      className="h-12 border-[#00e640] text-[#00e640] bg-transparent border rounded-[4px] py-4 px-4 flex items-center justify-center hover:opacity-50 transition-opacity"
    >
      {children}
    </button>
  );
}
export default Button;
