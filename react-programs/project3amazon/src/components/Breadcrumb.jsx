import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ product }) => {
  let arrowImg = '/myimages/Arrow.png'

  return (
    <div className="container mt-3">
      <div className="d-flex align-items-center flex-wrap gap-2 breadcrumb-wrapper">

        <Link to="/" className="text-decoration-none text-dark fw-semibold">
          HOME
        </Link>

        <img className="arrow-img" src={arrowImg} alt="arrow" />

        <Link
          to="/shop"
          className="text-decoration-none text-dark fw-semibold"
        >
          SHOP
        </Link>

        <img className="arrow-img" src={arrowImg} alt="arrow" />

        <span className="text-secondary text-uppercase">
          {product.category}
        </span>

        <img className="arrow-img" src={arrowImg} alt="arrow" />

        <span className="fw-bold text-dark">
          {product.title}
        </span>

      </div>
    </div>
  )
}

export default Breadcrumb