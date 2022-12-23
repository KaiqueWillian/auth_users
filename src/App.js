import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users, Login } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
