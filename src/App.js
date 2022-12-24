import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users, Login, DetailsUser } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users/" element={<Users />} />
      <Route path="/users/:id" element={<DetailsUser />} />
    </Routes>
  );
}

export default App;
