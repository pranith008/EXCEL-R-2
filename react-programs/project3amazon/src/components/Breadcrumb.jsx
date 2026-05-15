import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ product }) => {

  return (
    <div className="container mt-3">
      <div className="d-flex align-items-center flex-wrap gap-2 breadcrumb-wrapper">

        <Link to="/" className="text-decoration-none text-dark fw-semibold">
          HOME
        </Link>

        <span className="arrow">❯</span>

        <Link
          to="/shop"
          className="text-decoration-none text-dark fw-semibold"
        >
          SHOP
        </Link>

        <span className="arrow">❯</span>

        <span className="text-secondary text-uppercase">
          {product.category}
        </span>

        <span className="arrow">❯</span>
        
        <span className="fw-bold text-dark">
          {product.title}
        </span>

      </div>
    </div>
  )
}

export default Breadcrumb