import React from 'react'
import './FilterBar.css'

const FilterByCategoryBar = ({ categories, handleClick }) => {

  return (

    <div className="filter-container">

      {
        categories.map((cat, index) => (

          <button
            key={index}
            className="filter-btn"
            onClick={() => handleClick(cat)}
          >
            {cat}
          </button>

        ))
      }

    </div>

  )
}

export default FilterByCategoryBar