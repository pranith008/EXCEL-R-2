import React, { useState } from 'react'
import './FilterByPrice.css'

const FilterByPrice2 = ({ handleChange }) => {

  const [price, setPrice] = useState(500)

  const handlePrice = (e) => {
    setPrice(e.target.value)
    handleChange(e)
  }

  return (

    <div className="price-filter">

      <h2 className="price-heading">
        Filter By Price
      </h2>

      <p className="selected-price">
        Selected Price : <span>${price}</span>
      </p>

      <input
        type="range"
        min="10"
        max="1000"
        value={price}
        className="range-slider"
        onChange={handlePrice}
      />

      <div className="price-labels">
        <span>$10</span>
        <span>$1000</span>
      </div>

    </div>

  )
}

export default FilterByPrice2