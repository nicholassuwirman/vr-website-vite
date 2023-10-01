import React from "react";
import './hero.css';
import { motion } from "framer-motion";

import heroMan from '../../assets/hero-man.png';
import virtualHSLine from '../../assets/hero-virtualhs-line.png';
import star from '../../assets/hero-star.png';
import arrow from '../../assets/hero-arrow.png';
import heroManLine from '../../assets/hero-man-line.png';
import heroLogo1 from '../../assets/hero-logo1.png';
import heroLogo2 from '../../assets/hero-logo2.png';
import heroDeco1 from '../../assets/hero-deco-1.png';
import heroDeco2 from '../../assets/hero-deco-2.png';

const HeroImageDescription = ({image, text}) => {
  return (
    <div className="hero-logos-container">
      <img className="hero-logo" src={image}/>
      <p className="hero-logo-description">{text}</p>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-left-container">
        <p className="hero-virtualhs-text">VIRTUAL HEADSET</p>
        <img className="hero-virtualhs-line" src={virtualHSLine} />
        <div className="hero-title-container">
          <p className="hero-title">Experience a new dimension of reality</p>
        </div>
        <div className="hero-description-container">
          <img className="hero-star" src={star}/>
          <p className="hero-description">Step into the future with our new EX-2 VR headset.
           Come to life right before your eyes</p>
        </div>
        <div>
          
        </div>
        <div className="hero-button-container">
          <a href="https://www.amazon.de/computer-video-games-virtual-reality/b?ie=UTF8&node=13403376031" target="_blank" className="hero-button">
            <p className="hero-button-text">Visit store</p>
            <img className="hero-arrow-image" src={arrow} alt="Arrow" />
          </a>
        </div>
        
      </div>

      <div className="hero-right-container">
        <img className="hero-man-image" src={heroMan}/> 
        <img className="hero-deco1" src={heroDeco1}/>
        <img className="hero-deco2" src={heroDeco2}/>
        <img className="hero-man-line" src={heroManLine}/> 
        <div className="hero-logologo-container">
          <HeroImageDescription image={heroLogo1} text={"Enchanced Education"}/>
          <HeroImageDescription image={heroLogo2} text={"Training and Simulation"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
