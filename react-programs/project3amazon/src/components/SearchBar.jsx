import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange}) => {
  return (
    <>
    <input type="text" onChange={handleChange}/>
    </>
  )
}
export default SearchBar