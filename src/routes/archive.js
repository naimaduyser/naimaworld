import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IsArchive } from "../store/actions/maindata";

// Styling
import "../styling/archive.css";
import "../components/card.css";

// Components
import Cards from "../components/cards";

const Archive = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(IsArchive(true));
  }, []);
  
  return (
    <>
      <div className="cards-container">
        <Cards />
      </div>
    </>
  );
};

export default Archive;
