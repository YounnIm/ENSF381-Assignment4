import React from "react";
import { Link } from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/images/logo.png";
const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
        <div>Company Name</div>
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
