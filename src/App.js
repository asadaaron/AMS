import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DoctorList from "./components/DoctorList";
import DoctorDetails from "./components/DoctorDetails";
import { doctors } from "./DoctorData";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        style={{
          marginLeft: isOpen ? "200px" : "60px", // Shift content dynamically
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <div style={{ padding: "80px" }}>
          {selectedDoctor ? (
            <DoctorDetails
              doctor={selectedDoctor}
              onBack={() => setSelectedDoctor(null)}
            />
          ) : (
            <DoctorList doctors={doctors} onSelectDoctor={setSelectedDoctor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
