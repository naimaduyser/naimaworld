import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setChangedMix,
  PlayChange,
  IsArchive,
  audioSwitch,
  SetAudioIndex
} from "../../store/actions/maindata";

// Styling
import "../styles/card.css"
import "../styles/dropdown.css"
import "../styles/navbar.css"


// Querying
import { useQuery } from "@apollo/client";
import { content } from "../../gql/Query";
import Card from "./Card";
import Dropdown from './Dropdown';
import { GoTriangleDown } from 'react-icons/go';

function Cards() {

  const dispatch = useDispatch();
  const maindata = useSelector(store => store.maindata);
  const { loading, error, data } = useQuery(content);

  const [playindex, setplayindex] = useState(-2);

  const changePlay = (index, state) => {
    state ? setplayindex(-1) : setplayindex(index);
    dispatch(audioSwitch(maindata.audioIndex !== index));
    dispatch(SetAudioIndex(index));
    dispatch(setChangedMix(data.mixes));
    dispatch(PlayChange(!state));
    dispatch(IsArchive(true));
  };
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open);


  useEffect(
    () => {
      maindata.audioPlayChange
        ? setplayindex(maindata.audioIndex)
        : setplayindex(-1);
    },
    [maindata.audioPlayChange, maindata.audioIndex],
  );

  return (
    <div>
      <div>
        <div className="dropdown-menu__container" onClick={handleClick} >
          <button className="residents">residents<GoTriangleDown className="triangle" /></button>
          <ul className="dropdown-menu">
            {open && data.residents.map((resident, index) =>
              <Dropdown
                resident={resident.name.toLowerCase()}
                key={index}
              />
            )}
          </ul>
        </div>
      </div>
      {loading
        ? <p>Loading...</p>
        : error
          ? <p>
            Error: {error}
          </p>
          : <div className="container fade">
            {data.mixes.map((mix, index) =>
              <Card
                key={index}
                mix={mix}
                isplay={index === playindex ? true : false}
                Index={index}
                playFunc={changePlay}
              />
            )}
          </div>}
    </div>
  );
}

export default Cards;
