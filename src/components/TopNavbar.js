// src/components/TopNavbar.js
import React from "react";

function TopNavbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#007BFF",
        color: "white",
        position: "fixed",
        top: "0",
        left: "235px", // Align after sidebar
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <h2>Appointment Booking System</h2>
    </div>
  );
}

export default TopNavbar;
