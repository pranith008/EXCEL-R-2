import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <main className='landing-page'>
      <section className='hero'>
        <div className='hero-content'>
          <span className='eyebrow'>Premium shopping experience</span>
          <h1>Dark luxury for modern storefronts.</h1>
          <p>
            Discover products in a premium black-and-gold interface built to feel bold, elegant, and easy to explore. Start shopping now and enjoy a sleek, curated experience across every page.
          </p>

          <div className='hero-buttons'>
            <button className='btn-primary' onClick={() => navigate('/shop')}>
              Shop Now
            </button>
            <button className='cta-button secondary' onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>
              Explore Features
            </button>
          </div>
        </div>
      </section>

      <section className='landing-features'>
        <div className='features-grid'>
          <article className='feature-card'>
            <h3>Brand-first design</h3>
            <p>Every surface uses the palette you provided, with rich gold highlights, soft ivory text, and layered charcoal panels.</p>
          </article>
          <article className='feature-card'>
            <h3>Easy product discovery</h3>
            <p>Filter, search, and browse products in a clean dark layout built for fast decision making and minimal visual noise.</p>
          </article>
          <article className='feature-card'>
            <h3>Consistent experience</h3>
            <p>The new landing page, navbar, cards, and inputs all share the same black background aesthetic and accent palette.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default LandingPage