import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

// Styling
import "./navbar.css"

// Media
import earth from "../assets/images/earth.png"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const closeSideBar = () => {
    //     setClick(false);
    // }
    console.log(window.screen.width);

    return (
        <div className="header">
          <div className="header-logo">
                <NavLink to="/" className="logo">naima.world</NavLink>
          </div>

          <div className="navmenu-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick}>
                  <NavLink to="/residents" className="navlink">residents</NavLink>
              </li>
              <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick}>
                  <NavLink to="/contact" className="navlink">contact</NavLink>
              </li>
            </ul> 
          </div>

          <div className="header-image" onClick={handleClick}>
            <img src={earth} alt="earth illustration" className="earth"/>
          </div>
        </div>
    )
}

export default Navbar
