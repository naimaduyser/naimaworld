import React from "react";

// Styling
import "./residents.css";


const ResidentCard = props => {
    const { resident } = props;


    return (
        <div className="card-container residents-container" key={resident.id}>
            <div className="card-image">
                <img src={resident.image.url} alt="resident" className="resident-image" />
            </div>
            <div className="resident-card-text overlay">
                <h5 className="resident-card-title">{resident.name}</h5>
            </div>
        </div>
    );
};

export default ResidentCard;
