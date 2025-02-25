// src/components/DoctorCard.js
import React from "react";

function DoctorCard({ doctor, onSelect, showExperience }) {
  return (
    <div
      className="doctor-card"
      onClick={() => onSelect(doctor)}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{doctor.appointeeName}</h3>
      <p>
        <strong>Speciality:</strong> {doctor.speciality}
      </p>
      {showExperience && (
        <p>
          <strong>Experience:</strong> {doctor.yearOfExperience}
        </p>
      )}
    </div>
  );
}

export default DoctorCard;
