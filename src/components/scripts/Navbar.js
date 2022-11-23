import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

// Styling
import "../styles/navbar.css"

// Media
import earth from "../../assets/images/earth.png"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setClick(!click) && setOpen(!open);
  const handleOpen = () => setOpen(!open);


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
          {/* <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick && handleOpen}>
            <NavLink to="/residents" className="navlink">residents</NavLink>
            {handleOpen ? <div></div> : null}
          </li> */}
          <li className="navlink-list-item" onClick={handleOpen}>
          <a className="residents">residents</a>
          <div className="dropdown">
            {open ? (
              <ul className="dropdown-menu fade fade-out">
                <li className="dropdown-menu__item">
                  <a>tareq</a>
                </li>
                <li className="dropdown-menu__item">
                  <a>naima</a>
                </li>
                <li className="dropdown-menu__item">
                  <a>kajsa</a>
                </li>
              </ul>
            ) : null}
          </div>
        </li>

          <li className="navlink-list-item" onClick={window.screen.width <= "1240" && handleClick}>
            <NavLink to="/contact" className="navlink">contact</NavLink>
          </li>
        </ul>


    </div>
  )
}

export default Navbar
