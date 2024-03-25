import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import ProductPage from "./component/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<div>404 NOT FOUND (no login page)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
