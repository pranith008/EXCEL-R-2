import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import ProductContext from '../contexts/ProductContext'

const NavBar1 = () => {
  const navi = useNavigate()
  function handleClick(value) {
    navi(value)
  }

  const { totalCartItems } = useContext(ProductContext)
  return (
    <ol className='navbar'>
      <li onClick={() => handleClick("/")}>Home</li>
      <li onClick={() => handleClick("/shop")}>Shopping</li>
      <li onClick={() => handleClick("/rich")}>TextArea</li>
      <li onClick={() => handleClick("/add")}>Add Product</li>
      <li onClick={() => handleClick("/register")}>Add User</li>
      <li onClick={() => handleClick("/login")}>User Login</li>
      <li id="cart-icon" onClick={() => handleClick("/cart")}>
        Cart
        <span id="timing">{totalCartItems()}</span>
      </li>
    </ol>
  )
}

export default NavBar1