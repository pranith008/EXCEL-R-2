import React from 'react'

const Button = ({handleClick,text,icon}) => {
  return (
   <button onClick={handleClick}>{text}{icon}</button>
  )
}

export default Button