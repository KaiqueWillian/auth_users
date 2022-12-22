import React from "react";

function Login() {
  return (
    <div className="border border-white rounded-[4px] w-[500px] m-auto">
      <div className="px-16 py-20">
        <h1 className="mb-7 text-3xl font-bold text-white">Sign In</h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Login"
            className="h-12 bg-[#333333] rounded-[4px] py-4 pl-5 text-white mb-4 "
          />

          <input
            type="text"
            placeholder="Password"
            className="h-12 bg-[#333333] rounded-[4px] py-4 pl-5 text-white mb-10 "
          />

          <button
            type="button"
            className="h-12 bg-[#E50914] rounded-[4px] py-4 flex items-center justify-center"
          >
            <span className="text-white">Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
