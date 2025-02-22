// src/components/DoctorDetails.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./Calendar";

function DoctorDetails({ doctor, onBack }) {
  const [selectedDate, setSelectedDate] = useState(null); // Store selected date
  const [showCalendar, setShowCalendar] = useState(false);
  if (!doctor) return <p>Please select a doctor to view details.</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{doctor.name}</h2>
      <p>
        <strong>Speciality:</strong> {doctor.speciality}
      </p>
      <p>
        <strong>Experience:</strong> {doctor.experience}
      </p>
      <p>
        <strong>Contact:</strong> {doctor.contact}
      </p>

      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
        }}
      >
        Back to List
      </button>

      {/* Appointment Button */}
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: showCalendar ? "#FF4B4B" : "#006400",
          color: "white",
          border: "none",
          marginTop: "20px",
          marginLeft: "50px",
        }}
      >
        {showCalendar ? "Cancel" : "Appointment"}
      </button>

      {/* Show Calendar Component on Button Click */}
      {showCalendar && (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
}

export default DoctorDetails;
