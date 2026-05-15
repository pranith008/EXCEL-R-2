import React from 'react'
import './FilterBar.css'

const FilterBar = ({ categories, handleClick }) => {

  return (

    <div className="filter-wrapper">

      <div className="filter-heading">
        <h2>Shop By Category</h2>
        <p>
          Explore products from different categories
        </p>
      </div>

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

    </div>

  )
}

export default FilterBar