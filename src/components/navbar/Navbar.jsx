import React, { useState } from "react";
import './navbar.css';
import {Link} from 'react-scroll'; /* npm install react-scroll */

import navbarLogo from '../../assets/navbar-logo.png';
import navbarShoppingLogo from '../../assets/basket-thin.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => {
  return (
      <>  {/* to itu basically href. Codenya dicopy dari https://www.npmjs.com/package/react-scroll */}
        <Link to="features" spy={true} smooth={true} duration={500} className="navbar-text">Features</Link>
        <Link to="testimony" spy={true} smooth={true} duration={500} className="navbar-text">Testimony</Link>
        <Link to="games" spy={true} smooth={true} duration={500} className="navbar-text">Games</Link>
        <Link to="faq" spy={true} smooth={true} duration={500} className="navbar-text">F.A.Q</Link>
      </>
  )
}

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-container" id="navbar">
      <div className="navbar-mobile-menu">
        {toggleMenu     /*basically toggleMenu === true */
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />} 
        {toggleMenu && (
            <>
            <div className="navbar-mobile-container">
              <Menu />
            </div>
            </>
          )}
      </div>

      <div className="navbar-left-container">
        <Menu />
      </div>
      <div className="navbar-middle-container">
        <img className="navbar-logo" src={navbarLogo}/>
      </div>
      <div className="navbar-right-container">
        
        <a href="https://www.amazon.de/computer-video-games-virtual-reality/b?ie=UTF8&node=13403376031" target="_blank">
          <img className="navbar-shopping-logo" src={navbarShoppingLogo}/>
        </a>  
      </div>
    </div>
  );
};

export default Navbar;
