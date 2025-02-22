// src/components/DoctorList.js
import React from "react";
import DoctorCard from "./DoctorCard";

function DoctorList({ doctors, onSelectDoctor }) {
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
