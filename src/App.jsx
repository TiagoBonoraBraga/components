import { BrowserRouter, Route, Routes } from "react-router-dom";

import EstudoComponents from "./Pages/EstudoComponents/EstudoComponents";
import React from "react";
import Taileindexemplo from "../src/Components/Tailwindexemplo/Taileindexemplo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EstudoComponents />} />
        <Route path="/login" element={<Taileindexemplo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
