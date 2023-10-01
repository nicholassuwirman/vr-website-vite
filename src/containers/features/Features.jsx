import React from "react";
import './features.css';

import featuresShadow from '../../assets/features-shadow.png'
import featuresEllipse from '../../assets/features-ellipse.png'
import featuresHeadset from '../../assets/features-headset.png'
import featuresBlueStar from '../../assets/features-star-blue.png'


const FeaturesDescription = ({image, text}) => {
  return (
    <div className="features-description-function-container">
      <img className="features-description-image" src={image}/>
      <p className="features-description-text">{text}</p>
    </div>
  )
}

const Features = () => {
  return (
    <div className="features-container" id="features">
      <div className="features-left-container">
        <img className="features-shadow" src={featuresShadow} />
        <img className="features-ellipse" src={featuresEllipse} />
        <img className="features-image" src={featuresHeadset} />
      </div>
      <div className="features-right-container">
        <p className="features-title">Our New Virtual Headset Shines with Unique Features</p>
        <div className="features-description-container">
          <div className="features-right-container-left">
            <FeaturesDescription image={featuresBlueStar} text={"High-res OLED screen: Crystal-clear visuals."}/>
            <FeaturesDescription image={featuresBlueStar} text={"Inside-out tracking: Advanced built-in sensors for seamless immersion."}/>
            <FeaturesDescription image={featuresBlueStar} text={"Comfortable design: Ensures extended usage without discomfort."}/>
          </div>
          <div className="features-right-container-middle"></div>
          <div className="features-right-container-right">
            <FeaturesDescription image={featuresBlueStar} text={"Elevated Refresh rate: Minimize motion sickness and enhance the experience."}/>
            <FeaturesDescription image={featuresBlueStar} text={"Eye tracking: Monitors eye movement, enabling enhanced interaction."}/>
            <FeaturesDescription image={featuresBlueStar} text={"Immersive spatial audio: Enhances realism and immersion with 3D sound."}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features