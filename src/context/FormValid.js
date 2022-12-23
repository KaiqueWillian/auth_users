import { useState } from "react";

export default () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [isShown, setIsSHown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "vendemmia" && pwd === "123123123") {
      console.log("valid");
    } else {
      console.log("invalid");
    }

    setUser("");
    setPwd("");
  };

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return {
    handleSubmit,
    user,
    setUser,
    pwd,
    setPwd,
    togglePassword,
    isShown,
  };
};
