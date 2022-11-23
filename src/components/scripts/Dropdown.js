import React from 'react'

import "../styles/dropdown.css"


const Dropdown = props => {
    const { resident, onClick } = props;

    return (
        <>
            <li className="dropdown-menu__item" onClick={onClick}><button>{resident}</button></li>
        </>
    )
}

export default Dropdown