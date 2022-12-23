import { useState } from "react";
import { toast } from "react-hot-toast";
import { redirect } from "react-router-dom";

function FormValid() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [isShown, setIsSHown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "vendemmia" && pwd === "123123123") {
      toast.loading("Redirecting...");
      redirect("/user");
    } else {
      toast.error("Error, check username and password");
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
}

export default FormValid;
