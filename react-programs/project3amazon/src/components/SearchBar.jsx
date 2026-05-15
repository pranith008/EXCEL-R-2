import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange}) => {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
        className="search-input"
      />

      <button className="search-btn">
        Search
      </button>

    </div>
  )
}
export default SearchBar