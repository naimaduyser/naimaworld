import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setChangedMix,
  PlayChange,
  IsArchive,
  audioSwitch,
  SetAudioIndex
} from "../store/actions/maindata";

// Styling
import "./card.css";

// Querying
import { useQuery } from "@apollo/client";
import { mixes } from "../gql/Query";
import Card from "./card";

function Cards() {
  const dispatch = useDispatch();
  const maindata = useSelector(store => store.maindata);
  const { loading, error, data } = useQuery(mixes);

  const [playindex, setplayindex] = useState(-1);

  const changePlay = (index, state) => {
    state ? setplayindex(-1) : setplayindex(index);

    dispatch(audioSwitch(maindata.audioIndex !== index));
    dispatch(SetAudioIndex(index));
    dispatch(setChangedMix(data.mixes[index]));
    dispatch(PlayChange(!state));
    dispatch(IsArchive(true));
  };

  useEffect(
    () => {
      maindata.audioPlayChange
        ? setplayindex(maindata.audioIndex)
        : setplayindex(-1);
    },
    [maindata.audioPlayChange, maindata.audioIndex]
  );

  // if (data) console.log(data.mixes);

  return (
    <div>
      {loading
        ? <p>Loading...</p>
        : error
          ? <p>
              Error: {error}
            </p>
          : <div className="cards-container">
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
