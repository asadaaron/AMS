import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DoctorList from "./components/DoctorList";
import DoctorDetails from "./components/DoctorDetails";
import { doctors } from "./DoctorData";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Sidebar />

      <div style={{ marginLeft: "200px", width: "100%" }}>
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
