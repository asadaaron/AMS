// src/components/TopNavbar.js
import React from "react";

function TopNavbar({ isOpen }) {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: "0",
        //marginLeft: isOpen ? "80px" : "60px", // Align after sidebar
        transition: "left 0.3 ease",
        display: "flex",
        alignItems: "center",
        paddingLeft: "45px",
      }}
    >
      <h2>Appointment Management System</h2>
    </div>
  );
}

export default TopNavbar;
