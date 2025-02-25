// src/components/DoctorList.js
import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

function DoctorList({ onSelectDoctor }) {
  const [doctors, setDoctors] = useState([]); // State to store doctor list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  // Fetch doctor list from API
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/appointee-list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctor list");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDoctors(data); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Stop loading
      });
  }, []); // Runs once when component mounts

  // Show loading state
  if (loading) return <p>Loading doctors...</p>;

  // Show error message if API fails
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Doctor List</h2>
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onSelect={onSelectDoctor}
          showExperience={true}
        />
      ))}
    </div>
  );
}

export default DoctorList;
