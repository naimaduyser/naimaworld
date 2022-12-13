import { useQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react'

// Styling
import "../styles/filter.css"
import { content } from '../../gql/Query'
import { NavLink } from 'react-router-dom'

const Filter = () => {
  const { data } = useQuery(content);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (

    <div className="filter">
      <ul className="filter-option"> 
       <p className="filter-option__title" onClick={handleClick}>residents</p> 
       <div className="filter-option__container">
          { open && data.genres.enumValues.map((genre, index) =>
            <div className="filter-option__list-item-container">
            <li key={index}>{genre.name.toLowerCase()}</li>
            </div>
            )}
            </div>
          </ul>
      <ul className="filter-option">
        <p className="filter-option__title" onClick={handleClick}>genres</p>
        <div className="filter-option__container">
        {open && data.mixes.map((mix, index) =>
          <div className="filter-option__list-item-container">
          <li key={index}>{(mix.genre.toLowerCase())}</li>
          </div>
          )}
          </div>
        </ul>
      {/* <div className="filter-option">
        <NavLink to="/residents" className="filter-link">residents</NavLink>
      </div>
      <div className="filter-option">
        <NavLink to="/contact" className="filter-link">contact</NavLink>
      </div> */}
      </div>
  )
}

export default Filter
