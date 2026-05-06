import React from 'react'

const FilterByPrice = ({handleClick}) => {
    const prices=[0,50,100,150,200,250,300]
  return (
   <ul>
        {prices.map(
            (pr,index)=><li key={index} onClick={()=>handleClick(pr)}>{pr}</li>
        )}
   </ul>
  )
}

export default FilterByPrice