import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  return (

    <div className="landing-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            Premium Shopping Experience
          </span>

          <h1>
            Discover Fashion, Electronics & Lifestyle Products
          </h1>

          <p>
            Welcome to ShopVerse — your one-stop destination for
            premium fashion, trending electronics, jewelry, and
            modern lifestyle products at affordable prices.
          </p>

          <div className="hero-buttons">

            <button
              className="shop-btn"
              onClick={() => navigate('/shop')}
            >
              Shop Now
            </button>

            <button className="explore-btn">
              Explore Brands
            </button>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="about-section">

        <div className="section-title">
          <h2>Why Choose Our Store?</h2>
          <p>
            Built for modern shoppers with premium UI and seamless experience.
          </p>
        </div>

        <div className="features-container">

          <div className="feature-card">
            <h3>Top Brands</h3>
            <p>
              Explore products from trusted and trending global brands.
            </p>
          </div>

          <div className="feature-card">
            <h3>Fast Shopping</h3>
            <p>
              Easy search, smart filters, and responsive product browsing.
            </p>
          </div>

          <div className="feature-card">
            <h3>Secure Experience</h3>
            <p>
              Smooth and secure shopping experience with modern design.
            </p>
          </div>

        </div>

      </section>


      {/* CATEGORY SECTION */}

      <section className="category-section">

        <div className="section-title">
          <h2>Popular Categories</h2>
        </div>

        <div className="category-container">

          <div className="category-card" onClick={() => navigate("/shop?category=men")}>
            Men's Clothing
          </div>

          <div className="category-card" onClick={() => navigate("/shop?category=women")} >
            Women's Clothing
          </div>

          <div className="category-card" onClick={() => navigate("/shop?category=electronics")}>
            Electronics
          </div>

          <div className="category-card"  onClick={() => navigate("/shop?category=jewelery")}>
            Jewelery
          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <h2>ShopVerse</h2>

        <p>
          Your premium ecommerce destination for fashion and technology.
        </p>

      </footer>

    </div>
  )
}

export default LandingPage