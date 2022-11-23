import React from "react";

// Icons
import { BiPlay, BiPause } from "react-icons/bi";

// Styling
import "../styles/card.css"


const Card = props => {
  const { mix, isplay, playFunc, Index } = props;

  const playClick = () => {
    playFunc(Index, isplay);
  };


  return (
    <div className="card-container" key={mix.id}>
      <div className="card-image" onClick={playClick}>
        <img src={mix.image.url} alt="mix cover" className="mix-image" />

        <div className="play-pause">
          {isplay ? <BiPause className="pause" /> : <BiPlay className="play" />}
        </div>
      </div>

      <div className="card-text">
        <h5 className="card-date">
          {mix.date}
        </h5>

        <h5 className="card-title">
          {mix.title}
        </h5>

        <p className="card-genre">
          {mix.genre}
        </p>
      </div>
    </div>
  );
};

export default Card;
