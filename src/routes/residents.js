import React from "react";

// Styling
import "../components/residents.css"
import "../components/card.css"


// Components
import ResidentCards from "../components/ResidentCards"

const Residents = () => {
  return (
    <div className="residents">
      <ResidentCards />
    </div>
  );
};

export default Residents;
