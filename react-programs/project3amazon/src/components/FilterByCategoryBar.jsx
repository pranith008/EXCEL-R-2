import React from 'react'
import './Filterbar.css'
const FilterByCategoryBar = ({categories,handleClick}) => {
    //console.log('filter compo' ,categories)
  return (
   <ul>
        {categories.map(
            (cat,index)=><li key={index} onClick={()=>handleClick(cat)}>{cat}</li>
        )}
   </ul>
  )
}

export default FilterByCategoryBar