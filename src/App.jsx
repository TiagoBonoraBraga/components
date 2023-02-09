import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EstudoComponents from "./Pages/EstudoComponents/EstudoComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EstudoComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
