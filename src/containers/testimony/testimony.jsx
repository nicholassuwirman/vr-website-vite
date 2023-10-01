import React from "react";
import './testimony.css';
import testimonyJane from '../../assets/testimony-image-jane.png';
import testimonyTweet from '../../assets/testimony-image-tweet.png';
import testimonyArrow from '../../assets/testimony-arrow.png';
import testimonyGroup from '../../assets/testimony-group-image-2.png';

const Testimony = () => {
  return (
    <div className="testimony-container" id="testimony">
      <div className="testimony-container-left">
        <p className="testimony-title">Jane Wilson, Gaming Creator</p>
        <p className="testimony-description">"This VR headset is a game-changer! The visual clarity and immersive audio transport me to another world. A must-have for any avid gamer like me!"</p>
        <button className="testimony-button">
          <p className="testimony-button-description">Read my blog</p>
          <img className="testimony-arrow" src={testimonyArrow} />
        </button>
        <img className="testimony-group-image" src={testimonyGroup} />
      </div>
      <div className="testimony-container-right">
        <img className="testimony-image-jane" src={testimonyJane} />
        <img className="testimony-image-tweet" src={testimonyTweet} />
      </div>
    </div>
  )
}

export default Testimony