import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { IsArchive } from "../store/actions/maindata";

// Styling
import "../components/card.css";

// Components
import Cards from "../components/Cards";

const Archive = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(IsArchive(true));
  }, []);
  
  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Archive;
