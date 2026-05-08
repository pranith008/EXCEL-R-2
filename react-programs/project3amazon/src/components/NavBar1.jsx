import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar1 = () => {
  const navi=useNavigate()
  function handleClick(value)
  {
      navi(value)
  }
  return (
   <ol className='navbar'>
        <li onClick={()=>handleClick("/")}>Home</li>
        <li onClick={()=>handleClick("/shop")}>Shopping</li>
        <li onClick={()=>handleClick("/rich")}>TextArea</li>
   </ol>
  )
}

export default NavBar1