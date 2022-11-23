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


  return (
    <div className="header">

        <div className="header-image" onClick={handleClick}>
          <img src={earth} alt="earth illustration" className="earth" />
        </div>

        <div className="header-logo">
          <NavLink to="/" className="logo">naima.world</NavLink>
        </div>

    </div>
  )
}

export default Navbar
