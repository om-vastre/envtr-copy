import { useState } from 'react'
import './LandingPage.css'

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const products = [
    {
      id: 1,
      name: "American Eagle Jeans, Sydney Sweeney S Picks",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/407d3abf1b9b0b3ae48d79443d8e8a90fd65e107?width=732"
    },
    {
      id: 2,
      name: "LV, Monogram Technical Long-Sleeved T-Shirt",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/22abcfa70e2e1b0bad5718ac74b3a8cf09e6d301?width=732"
    },
    {
      id: 3,
      name: "Allen Solly, Girls White Striped Regular Fit Casual",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/366fe0cce367c5c78da85a7efccb9ccb7ad2c8c5?width=732"
    },
    {
      id: 4,
      name: "American Eagle Jeans, Sydney Sweeney S Picks",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3774cb3353d6a6c80958e301482c58074c5801d7?width=732"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="landing-page">
      {/* Noisy Background */}
      <div className="background-texture">
        <img 
          className="grain-texture" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/819b6fcd79cb0bc728b5a324e346995db250b54a?width=3045" 
          alt="" 
        />
        <img 
          className="grain-texture" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d40a40a8457e558e0592135b45020ab065c084f6?width=3045" 
          alt="" 
        />
      </div>

      {/* Header */}
      <header className="header">
        <button className="menu-button" aria-label="Menu">
          <svg width="31" height="28" viewBox="0 0 31 28" fill="none">
            <path d="M30.4688 12L0 12" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M21.0938 20L0 20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15.2344 28H0" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories" className="active">Categories</a>
          <a href="#new-arrivals">New Arrivals</a>
        </nav>

        <div className="logo">Logo</div>

        <div className="search-container">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <ellipse cx="7.6" cy="7.6" rx="7.6" ry="7.6" stroke="black" strokeWidth="1.5"/>
            <path d="M13.2 13.2L16 16" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="header-icons">
          <button className="icon-button" aria-label="Favorites">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="black"/>
              <path d="M17.1997 25.7998L16.71 26.372L17.1997 25.7998ZM19.9492 15.676L19.3866 16.1766C19.5216 16.3284 19.7131 16.4182 19.917 16.4253C20.1209 16.4324 20.3195 16.3561 20.4672 16.2141L19.9492 15.676ZM21.8204 25.9599L22.2594 26.5643L21.8204 25.9599ZM17.1997 25.7998L17.6893 25.2277C16.5656 24.2699 15.3628 23.3536 14.4246 22.2085C13.5108 21.0932 12.9058 19.822 12.9754 18.2055L12.2258 18.1795L11.4763 18.1535C11.3866 20.2373 12.1878 21.855 13.2604 23.1642C14.3086 24.4436 15.6723 25.4874 16.71 26.372L17.1997 25.7998ZM12.2258 18.1795L12.9754 18.2055C13.043 16.6353 13.9856 15.359 15.204 14.8539C16.374 14.3688 17.9354 14.5447 19.3866 16.1766L19.9492 15.676L20.5119 15.1753C18.6943 13.1314 16.4737 12.7089 14.639 13.4695C12.8526 14.2101 11.568 16.0235 11.4763 18.1535L12.2258 18.1795ZM17.1997 25.7998L16.71 26.372C17.0847 26.6914 17.4981 27.0418 17.9234 27.312C18.3485 27.5821 18.8551 27.8186 19.4258 27.8384L19.458 27.089L19.4903 26.3397C19.3005 26.3332 19.0593 26.2501 18.736 26.0447C18.4129 25.8394 18.0773 25.5584 17.6893 25.2277L17.1997 25.7998ZM21.8204 25.9599L22.2594 26.5643C23.3702 25.7541 24.8195 24.8078 25.9745 23.6047C27.1565 22.3736 28.0943 20.8162 28.184 18.7324L27.4344 18.7065L26.6849 18.6805C26.6153 20.297 25.9028 21.5226 24.896 22.5713C23.8621 23.6481 22.5841 24.4784 21.3815 25.3556L21.8204 25.9599ZM27.4344 18.7065L28.184 18.7324C28.2757 16.6024 27.1507 14.7055 25.4333 13.8435C23.6695 12.9582 21.4191 13.2258 19.4313 15.1379L19.9492 15.676L20.4672 16.2141C22.0543 14.6824 23.7177 14.3901 25.0095 14.9936C26.2486 15.5755 27.0949 17.0016 27.1644 18.6805L27.4344 18.7065ZM21.8204 25.9599L21.3815 25.3556C20.9263 25.6864 20.5356 25.9674 20.1702 26.1727C19.8049 26.378 19.5264 26.461 19.3032 26.4674L19.3023 27.2167L19.3014 27.9661C20.0045 27.9463 20.5736 27.7098 21.0535 27.4397C21.533 27.1697 22.0014 26.8193 22.2594 26.5643L21.8204 25.9599Z" fill="white"/>
            </svg>
          </button>
          <button className="icon-button" aria-label="Shopping cart">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="black"/>
              <path d="M12.697 18.7704C13.2167 16.2973 13.4766 15.0607 14.4631 14.3302C14.4631 14.3302 14.4631 14.3302 14.4631 14.3302C15.4497 13.5996 16.8597 13.5996 19.6798 13.5996H20.3202C23.1403 13.5996 24.5503 13.5996 25.5369 14.3302C25.5369 14.3302 25.5369 14.3302 25.5369 14.3302C26.5234 15.0607 26.7833 16.2973 27.303 18.7704C28.0338 22.2481 28.3992 23.987 27.3339 25.1324C27.3339 25.1324 27.3339 25.1324 27.3339 25.1324C26.2685 26.2777 24.2858 26.2777 20.3202 26.2777H19.6798C15.7142 26.2777 13.7315 26.2777 12.6661 25.1324C12.6661 25.1324 12.6661 25.1324 12.6661 25.1324C11.6008 23.987 11.9662 22.2481 12.697 18.7704Z" stroke="white" strokeWidth="1.5"/>
              <path d="M17.7144 16.5261C18.0471 17.6624 18.9448 18.4766 20.0001 18.4766C21.0553 18.4766 21.9531 17.6624 22.2858 16.5261" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-button" aria-label="Account">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="black"/>
              <ellipse cx="20" cy="15.3333" rx="5.71429" ry="5.33334" stroke="white" strokeWidth="1.5"/>
              <path d="M30 34.9998C30 32.0543 25.5228 29.6665 20 29.6665C14.4772 29.6665 10 32.0543 10 34.9998" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="categories">
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#kids">KIDS</a>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* New Arrivals Section */}
        <section className="product-section">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">New<br/>Arrivals</h2>
              <p className="section-subtitle">Top Selling Items</p>
            </div>
            <div className="section-nav-bottom">
              <a href="#shop" className="shop-button">
                <span>Go To Shop</span>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path d="M-1.09896e-07 6H14M14 6L6.79588 0M14 6L6.79588 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="carousel-controls">
                <button className="carousel-button" aria-label="Previous">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path opacity="0.66" d="M5.85938 2.98043e-07L7.68596e-08 5.5L5.85938 11" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="carousel-button" aria-label="Next">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1.30386e-07 11L5.85937 5.5L6.93853e-07 0" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Women's Section */}
        <section className="product-section womens-section">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">Women's</h2>
              <p className="section-subtitle">Top selling items</p>
            </div>
            <div className="section-nav-bottom">
              <a href="#shop" className="shop-button">
                <span>Go To Shop</span>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path d="M-1.09896e-07 6H14M14 6L6.79588 0M14 6L6.79588 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="carousel-controls">
                <button className="carousel-button" aria-label="Previous">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path opacity="0.66" d="M5.85938 2.98043e-07L7.68596e-08 5.5L5.85938 11" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="carousel-button" aria-label="Next">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1.30386e-07 11L5.85937 5.5L6.93853e-07 0" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Men's Section */}
        <section className="product-section">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">Men's</h2>
              <p className="section-subtitle">Top selling Item</p>
            </div>
            <div className="section-nav-bottom">
              <a href="#shop" className="shop-button">
                <span>Go To Shop</span>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path d="M-1.09896e-07 6H14M14 6L6.79588 0M14 6L6.79588 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="carousel-controls">
                <button className="carousel-button" aria-label="Previous">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path opacity="0.66" d="M5.85938 2.98043e-07L7.68596e-08 5.5L5.85938 11" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="carousel-button" aria-label="Next">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1.30386e-07 11L5.85937 5.5L6.93853e-07 0" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kids Section */}
        <section className="product-section kids-section">
          <div className="section-header reverse">
            <div className="section-title-wrapper">
              <h2 className="section-title">Kids</h2>
              <p className="section-subtitle">Top selling items</p>
            </div>
            <div className="section-nav-bottom">
              <div className="carousel-controls">
                <button className="carousel-button" aria-label="Previous">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path opacity="0.66" d="M5.85938 2.98043e-07L7.68596e-08 5.5L5.85938 11" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="carousel-button" aria-label="Next">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1.30386e-07 11L5.85937 5.5L6.93853e-07 0" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <a href="#shop" className="shop-button">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path d="M14 6H0M0 6L7.20412 12M0 6L7.20412 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Go To Shop</span>
              </a>
            </div>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">More</h3>
            <ul className="footer-links">
              <li><a href="#3d-experience">3D Experience</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul className="footer-links">
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© copyright 2025</p>
          <button className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M0 6L6 0M6 0L12 6M6 0L6 16" stroke="black" strokeWidth="1.25"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
