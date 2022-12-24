import React from "react";
import { useForm } from "../../hooks";
import { Button, Input } from "../../components";

function LoginForm() {
  const { handleSubmit, user, setUser, pwd, setPwd, togglePassword, isShown } =
    useForm();

  return (
    <div className="h-screen flex items-center justify-center bg-login bg-cover">
      <div className="w-[500px] m-auto border-[#FF2F69] border rounded-md">
        <div className="px-16 py-20">
          <div className="flex flex-col items-center justify-center mb-10">
            <h1 className="mb-5 text-3xl font-bold text-white">Login</h1>
            <span className="text-white">
              Please enter you User and your Password
            </span>
          </div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="User"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />

            <Input
              type={isShown ? "text" : "password"}
              autoComplete="on"
              placeholder="Password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />

            <div className="flex items-center">
              <span className="text-white">Show password?</span>
              <input
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={togglePassword}
                className="ml-2 cursor-pointer"
              />
            </div>

            <Button>
              <span className="font-bold">Login</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
