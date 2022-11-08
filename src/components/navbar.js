import React from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

// Icons
import { FaBars, FaTimes } from "react-icons/fa"
import { BsSearch } from "react-icons/bs";


// Styling
import "./navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeSideBar = () => {
        setClick(false);
    }

    return (
        <div className="header">
            <div className="header-logo">
                <NavLink to="/" onClick={closeSideBar} className="logo">naima.world</NavLink>
            </div>
              {/*
            <div className="search-and-filter">
                <div className="filter-dropdown">

                </div>
               <div className="search-bar">
                    <BsSearch className="search-icon" />

                </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeSideBar}>
                <li>
                    <NavLink to="/residents" className="navlink" onClick={closeSideBar}>residents</NavLink>
                </li>
              <li>
                <NavLink to="/live" className="navlink" onClick={closeSideBar}>live</NavLink>
            </li>
            <li>
                <NavLink to="/schedule" className="navlink" onClick={closeSideBar}>schedule</NavLink>
            </li> 
            </ul> 
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} />) : (<FaBars size={0} />)}
            </div> */}
        </div>
    )
}

export default Navbar
