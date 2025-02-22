// src/components/Sidebar.js
import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={{
        width: isOpen ? "200px" : "60px",
        height: "100vh",
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: "0",
        left: "0",
        padding: isOpen ? "20px" : "10px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          textAlign: "left",
        }}
      >
        {isOpen ? "☰" : "➡"} {/* Icon changes on toggle */}
      </button>
      {isOpen && (
        <>
          <h2>Menu</h2>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Doctors
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Appointments
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Settings
          </a>
        </>
      )}
    </div>
  );
}

export default Sidebar;
