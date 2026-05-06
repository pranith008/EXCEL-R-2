import React from 'react'
import { useState } from 'react'

const FilterByPrice2 = ({ handleChange }) => {

  return (
    <>
      <label htmlFor="range2" className="form-label"></label>
      <input type="range" className="form-range" min="10" max="1000" id="range2" onChange={handleChange}></input>
    </>
  )
}

export default FilterByPrice2