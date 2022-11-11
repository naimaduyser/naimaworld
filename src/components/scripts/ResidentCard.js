import React from "react";

// Styling
import "../styles/residents.css";

// Links
import { Link } from "react-router-dom";


const ResidentCard = props => {
    const { resident } = props;


    return (
        <div className="card-container resident-container" key={resident.id}>
            <div className="card-image">
                {/* <Link to={resident.slug} key={resident.slug}> 
                    <img src={resident.image.url} alt="resident" className="resident-image" />
                </Link> */}
                <img src={resident.image.url} alt="resident" className="resident-image" />

            </div>
            <div className="resident-card-text overlay">
                <h5 className="resident-card-title">{resident.name}</h5>
                <p className="resident-card-content">{resident.biography}</p>
            </div>
        </div>
    );
};

export default ResidentCard;
