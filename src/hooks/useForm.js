import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useForm() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [isShown, setIsSHown] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "vendemmia" && pwd === "123123123") {
      toast.loading("Redirecting...", { duration: 1000 });
      navigate("/users");
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

export default useForm;
