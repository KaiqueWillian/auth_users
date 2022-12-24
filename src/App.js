import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm, DetailsUser, ListUsers } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/users/" element={<ListUsers />} />
      <Route path="/users/:id" element={<DetailsUser />} />
    </Routes>
  );
}

export default App;
