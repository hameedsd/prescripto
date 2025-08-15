import React, { useState } from "react";
import "./Doctor.css";

export default function DoctorList() {
  const [docs] = useState([
    { name: "Dr. Smith", type: "Cardiologist" },
    { name: "Dr. Jane", type: "Dentist" },
    { name: "Dr. Lee", type: "Dermatologist" },
    { name: "Dr. Ray", type: "Pediatrician" },
    { name: "Dr. Kim", type: "Neurologist" },
    { name: "Dr. Joe", type: "Orthopedic" },
  ]);

  const [docsel, setDocsel] = useState([
    { name: "Dr. Smith", type: "Cardiologist" },
  ]);

  const docsell = (type) => {
    const filtered = docs.filter((doc) => doc.type === type);
    setDocsel(filtered);
  };

  return (
    <div>
      <div className="docbox">
        {/* Main Doctor List */}
        <div className="doclist">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="doctype"
              onClick={() => docsell(doc.type)}
            >
              <h5>{doc.name}</h5>
              <p>{doc.type}</p>
            </div>
          ))}
        </div>

        {/* Selected Doctors */}
        <div>
          <h2>Doctor List</h2>
          <p>Here is the list of available doctors:</p>
          <div>
            {docsel.map((doc, index) => (
              <div key={index} className="doctor-card">
                <h3>{doc.name}</h3>
                <p>{doc.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
