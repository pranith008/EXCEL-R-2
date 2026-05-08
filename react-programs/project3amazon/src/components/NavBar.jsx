import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
   <ol className='navbar'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shopping</li></Link>
        <Link to="/rich"><li>TextArea</li></Link>
   </ol>
  )
}

export default NavBar