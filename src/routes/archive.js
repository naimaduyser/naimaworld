import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { IsArchive } from "../store/actions/maindata";

// Styling
import "../components/styles/card.css";

// Components
import Cards from "../components/scripts/Cards";

const Archive = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(IsArchive(true));
  }, [dispatch]);
  
  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Archive;
