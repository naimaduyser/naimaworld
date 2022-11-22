import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

// Styling
import "../styles/navbar.css"

// Media
import earth from "../../assets/images/earth.png"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className="header">

      <div className="header-left">
        <div className="header-image" onClick={handleClick}>
          <img src={earth} alt="earth illustration" className="earth" />
        </div>

        <div className="header-logo">
          <NavLink to="/" className="logo">naima.world</NavLink>
        </div>
      </div>


        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick}>
            <NavLink to="/residents" className="navlink">residents</NavLink>
          </li>
          <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick}>
            <NavLink to="/contact" className="navlink">contact</NavLink>
          </li>
        </ul>


    </div>
  )
}

export default Navbar
