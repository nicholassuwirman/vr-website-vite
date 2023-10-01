import React from "react";
import './footer.css';
import {Link} from 'react-scroll';

import companyLogo from '../../assets/navbar-logo.png';
import twitterLogo from '../../assets/twitter.png';
import instaLogo from '../../assets/instagram.png';
import discordLogo from '../../assets/ic_round-discord.png';
import facebookLogo from '../../assets/Vector.png';
import line from '../../assets/footer-line.png';

const FooterMiddleSection = ({text1, text2, text3, text4, text5}) => {
  return (
    <div className="footer-top-middle-container">
      <p className="footer-top-middle-h1">{text1}</p>
      <p className="footer-top-middle-text">{text2}</p>
      <p className="footer-top-middle-text">{text3}</p>
      <p className="footer-top-middle-text">{text4}</p>
      <p className="footer-top-middle-text">{text5}</p>
    </div>
  )
}

const FooterLogos = ({link, image}) => {
  return (
    <>
      <a href={link} target="_blank">
        <img className="footer-logos" src={image} alt="Logo" />
      </a>  
    </>
  )
  
}

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img className="footer-company-logo" src={companyLogo} />
            <div>
              <FooterLogos link="https://twitter.com/" image={twitterLogo} />
              <FooterLogos link="https://www.instagram.com/n.wilsonnn/" image={instaLogo} />
              <FooterLogos link="https://www.linkedin.com/in/nicholas-wilson-suwirman-7593bb269/" image={discordLogo} />
              <FooterLogos link="https://www.linkedin.com/in/nicholas-wilson-suwirman-7593bb269/" image={facebookLogo} />
              <p className="footer-top-middle-text">(+999) 213-45-6789</p>
            </div>
          </div>
          <div className="footer-function-container">
            <div className="footer-top-middle-container">
              <p className="footer-top-middle-h1">Menu</p>
              <Link to="navbar" spy={true} smooth={true} duration={500} className="footer-top-middle-text">Home</Link>
              <Link to="features" spy={true} smooth={true} duration={500} className="footer-top-middle-text">Features</Link>
              <Link to="testimony" spy={true} smooth={true} duration={500} className="footer-top-middle-text">Testimony</Link>
              <Link to="games" spy={true} smooth={true} duration={500} className="footer-top-middle-text">Games</Link>
            </div>
            <FooterMiddleSection text1={"Company"} text2={"Login"} text3={"Sign Up"} text4={"Privacy"} text5={"Products"}/>
          </div>
          <div className="footer-top-right">
            <p className="footer-top-middle-h1">Subscribe to Our News Letter</p>
            <div>
              <input className="footer-input" placeholder="Enter your mail..." />
              <button className="footer-button"><p className="footer-subscribe-text">Subscribe</p></button>
            </div>
            
          </div>
        </div>
        <div className="footer-middle">
          <img className="footer-line-image" src={line} />
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">Built by Nicholas Wilson Suwirman. Design by Giorgi Matsukatovi</p>
        </div>
    </div>
  )
}

export default Footer;