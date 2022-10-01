import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home/Index";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default App;
