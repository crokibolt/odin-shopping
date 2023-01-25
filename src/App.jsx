import React from "react";
import "@picocss/pico/css/pico.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import ShoppingPage from "./ShoppingPage";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
