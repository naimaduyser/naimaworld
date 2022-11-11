import React from "react";

// Styling
import "../components/styles/residents.css"
import "../components/styles/card.css"


// Components
import ResidentCards from "../components/scripts/ResidentCards"

const Residents = () => {

  return (
    <div className="residents">
      <ResidentCards />
    </div>
  );
};

export default Residents;
