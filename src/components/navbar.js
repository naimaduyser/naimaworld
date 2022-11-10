import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

// Icons
import { FaBars, FaTimes } from "react-icons/fa"
import { BsSearch } from "react-icons/bs";


// Styling
import "./navbar.css"

// Media
import earth from "../assets/images/earth.png"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeSideBar = () => {
        setClick(false);
    }

    return (
        <div className="header">
          <div className="header-logo">
                <NavLink to="/" className="logo">naima.world</NavLink>
          </div>

          <div className="navmenu-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="navlink-list-item"> 
                      <NavLink to="/about" className="navlink">about</NavLink>
              </li>
              <li className="navlink-list-item">
                  <NavLink to="/residents" className="navlink">residents</NavLink>
              </li>
            </ul> 
          </div>

          <div className="header-image" onClick={handleClick}>
            <img src={earth} alt="earth illustration" className="earth"/>
          </div>

              {/*
            <div className="search-and-filter">
                <div className="filter-dropdown">

                </div>
               <div className="search-bar">
                    <BsSearch className="search-icon" />

                </div> 
           
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} />) : (<FaBars size={0} />)}
            </div> */}
        </div>
    )
}

export default Navbar
