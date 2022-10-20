import React, {useState} from 'react'
import { NavLink } from "react-router-dom"

// Icons
import { FaBars, FaTimes } from "react-icons/fa"

// Styling
import "./navbar.css"

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeSideBar = () => {
        setClick(false);
    }

  return (
    <div className="header">
        <NavLink to="/" onClick={closeSideBar} className="logo">naima.world</NavLink>
        {/* <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeSideBar}>
            <li>
                <NavLink to="/live" className="navlink" onClick={closeSideBar}>live</NavLink>
            </li>
            <li>
                <NavLink to="/schedule" className="navlink" onClick={closeSideBar}>schedule</NavLink>
            </li>
        </ul> */}
        {/* <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} />) : (<FaBars size={30}/>)}
        </div> */}
    </div>
  )
}

export default Navbar
