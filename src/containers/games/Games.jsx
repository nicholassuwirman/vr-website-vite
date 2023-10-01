import React from "react";
import './games.css';

import games1 from '../../assets/games-1.png'
import games2 from '../../assets/games-2.png'
import games3 from '../../assets/games-3.png'
import { color } from "framer-motion";

const GamesWithDesc = ({image, description}) => {
  return (
    <div className="games-container-box">
      <img className="games-image" src={image} />
      <p className="games-title">{description}</p>
    </div>
  )
}

const Games = () => {
  return (
    <div className="games-container" id='games'>
      <div className="games-container-top">
        <p className="games-section-title">Top Games</p>
        <p className="games-description">If you buy 2 video games, you will receive 1
          video game for free, along with a <span className="blue-text">50%</span> discount</p>
      </div>

      <div className="games-container-bottom">
          <GamesWithDesc image={games1} description={'Horizon: Call of the Mountain'} />
          <GamesWithDesc image={games3} description={'Half-Life: ALYX'} />
          <GamesWithDesc image={games2} description={'Fight Night Champion'} />
      </div>
    </div>
  )
}

export default Games;