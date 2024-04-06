import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import ProductPage from "./component/ProductPage";
import LoginPage from "./component/LoginPage";

export const UserContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<div>404 NOT FOUND</div>} />
    </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

  