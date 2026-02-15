import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    country: '',
    stateRegion: '',
    address: '',
    city: '',
    postalCode: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const orderItems = [
    {
      id: 1,
      name: 'Full Sleeve Zipper',
      size: 'L',
      price: 199,
      quantity: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/b957303d7821dd8e6ae8ec09cc90d7db10f98204?width=226'
    },
    {
      id: 2,
      name: 'Basic Fit T-Shirt',
      size: 'L',
      price: 99,
      quantity: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/a92285c8308a0273e3d5e14c4f8fc540d3dc9ce9?width=226'
    }
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="checkout-page">
      {/* Background texture */}
      <div className="noisy-background">
        <img className="grain-texture" src="https://api.builder.io/api/v1/image/assets/TEMP/406740e7f1d380dc4b8565a3142b35672e4a1dc6?width=2598" alt="" />
        <img className="grain-texture" src="https://api.builder.io/api/v1/image/assets/TEMP/4e6ad58801ada798aaa2da44866f605def2fab05?width=2598" alt="" />
      </div>

      {/* Header Navigation */}
      <header className="checkout-header">
        <button className="back-button" onClick={() => navigate('/')} aria-label="Go back">
          <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
            <path d="M47.5 6H0M0 6L6 0M0 6L6 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="header-icons">
          <button className="icon-button" aria-label="Favorites">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="black"/>
              <path d="M17.1997 25.7998L16.71 26.372L17.1997 25.7998ZM19.9492 15.676L19.3866 16.1766C19.5216 16.3284 19.7131 16.4182 19.917 16.4253C20.1209 16.4324 20.3195 16.3561 20.4672 16.2141L19.9492 15.676ZM21.8204 25.9599L22.2594 26.5643L21.8204 25.9599ZM17.1997 25.7998L17.6893 25.2277C16.5656 24.2699 15.3628 23.3536 14.4246 22.2085C13.5108 21.0932 12.9058 19.822 12.9754 18.2055L12.2258 18.1795L11.4763 18.1535C11.3866 20.2373 12.1878 21.855 13.2604 23.1642C14.3086 24.4436 15.6723 25.4874 16.71 26.372L17.1997 25.7998ZM12.2258 18.1795L12.9754 18.2055C13.043 16.6353 13.9856 15.359 15.204 14.8539C16.374 14.3688 17.9354 14.5447 19.3866 16.1766L19.9492 15.676L20.5119 15.1753C18.6943 13.1314 16.4737 12.7089 14.639 13.4695C12.8526 14.2101 11.568 16.0235 11.4763 18.1535L12.2258 18.1795ZM17.1997 25.7998L16.71 26.372C17.0847 26.6914 17.4981 27.0418 17.9234 27.312C18.3485 27.5821 18.8551 27.8186 19.4258 27.8384L19.458 27.089L19.4903 26.3397C19.3005 26.3332 19.0593 26.2501 18.736 26.0447C18.4129 25.8394 18.0773 25.5584 17.6893 25.2277L17.1997 25.7998ZM21.8204 25.9599L22.2594 26.5643C23.3702 25.7541 24.8195 24.8078 25.9745 23.6047C27.1565 22.3736 28.0943 20.8162 28.184 18.7324L27.4344 18.7065L26.6849 18.6805C26.6153 20.297 25.9028 21.5226 24.896 22.5713C23.8621 23.6481 22.5841 24.4784 21.3815 25.3556L21.8204 25.9599ZM27.4344 18.7065L28.184 18.7324C28.2757 16.6024 27.1507 14.7055 25.4333 13.8435C23.6695 12.9582 21.4191 13.2258 19.4313 15.1379L19.9492 15.676L20.4672 16.2141C22.0543 14.6874 23.6261 14.6201 24.751 15.1847C25.9223 15.7726 26.7525 17.1103 26.6849 18.6805L27.4344 18.7065ZM21.8204 25.9599L21.3815 25.3556C20.9662 25.6585 20.6074 25.9155 20.2677 26.0978C19.9277 26.2802 19.68 26.3463 19.4903 26.3397L19.458 27.089L19.4258 27.8384C19.9964 27.8581 20.5218 27.6574 20.9689 27.4176C21.4162 27.1776 21.8584 26.8568 22.2594 26.5643L21.8204 25.9599Z" fill="white"/>
            </svg>
          </button>
          <button className="icon-button" aria-label="Shopping cart">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="black"/>
              <path d="M12.697 18.7704C13.2167 16.2973 13.4766 15.0607 14.4631 14.3302C14.4631 14.3302 14.4631 14.3302 14.4631 14.3302C15.4497 13.5996 16.8597 13.5996 19.6798 13.5996H20.3202C23.1403 13.5996 24.5503 13.5996 25.5369 14.3302C25.5369 14.3302 25.5369 14.3302 25.5369 14.3302C26.5234 15.0607 26.7833 16.2973 27.303 18.7704C28.0338 22.2481 28.3992 23.987 27.3339 25.1324C27.3339 25.1324 27.3339 25.1324 27.3339 25.1324C26.2685 26.2777 24.2858 26.2777 20.3202 26.2777H19.6798C15.7142 26.2777 13.7315 26.2777 12.6661 25.1324C12.6661 25.1324 12.6661 25.1324 12.6661 25.1324C11.6008 23.987 11.9662 22.2481 12.697 18.7704Z" fill="white"/>
              <path d="M12.6661 25.1324C13.7315 26.2777 15.7142 26.2777 19.6798 26.2777H20.3202C24.2858 26.2777 26.2685 26.2777 27.3339 25.1324M12.6661 25.1324C11.6008 23.987 11.9662 22.2481 12.697 18.7704C13.2167 16.2973 13.4766 15.0607 14.4631 14.3302M12.6661 25.1324C12.6661 25.1324 12.6661 25.1324 12.6661 25.1324ZM27.3339 25.1324C28.3992 23.987 28.0338 22.2481 27.303 18.7704C26.7833 16.2973 26.5234 15.0607 25.5369 14.3302M27.3339 25.1324C27.3339 25.1324 27.3339 25.1324 27.3339 25.1324ZM25.5369 14.3302C24.5503 13.5996 23.1403 13.5996 20.3202 13.5996H19.6798C16.8597 13.5996 15.4497 13.5996 14.4631 14.3302M25.5369 14.3302C25.5369 14.3302 25.5369 14.3302 25.5369 14.3302ZM14.4631 14.3302C14.4631 14.3302 14.4631 14.3302 14.4631 14.3302Z" stroke="black" strokeWidth="1.5"/>
              <path d="M17.7144 16.5261C18.0471 17.6624 18.9448 18.4766 20.0001 18.4766C21.0553 18.4766 21.9531 17.6624 22.2858 16.5261" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="checkout-container">
        {/* Main Form Section */}
        <div className="checkout-form">
          <h1 className="page-title">Checkout</h1>

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className="step active">Information</div>
            <div className="step">Shipping</div>
            <div className="step">Payment</div>
          </div>

          {/* Contact Info */}
          <section className="form-section">
            <h2 className="section-title">Contact info</h2>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </section>

          {/* Shipping Address */}
          <section className="form-section">
            <h2 className="section-title">Shipping address</h2>
            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="input-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-input form-select"
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
              <svg className="select-arrow" width="9" height="4" viewBox="0 0 9 4" fill="none">
                <path d="M4.689e-07 -7.94721e-08L4.5 4L9 7.07333e-07" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="stateRegion"
                placeholder="State / Region"
                value={formData.stateRegion}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </section>

          {/* Shipping Button */}
          <button className="shipping-button">
            <span>Shipping</span>
            <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
              <path d="M0 6H47.5M47.5 6L41.5 0M47.5 6L41.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Order Summary */}
        <aside className="order-summary">
          <div className="summary-header">
            <h2 className="summary-title">YOUR ORDER</h2>
            <div className="item-count">(2)</div>
          </div>

          <div className="order-items">
            {orderItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <div className="item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <button className="change-link">Change</button>
                  </div>
                  <p className="item-size">Size: {item.size}</p>
                  <div className="item-footer">
                    <span className="item-quantity">({item.quantity})</span>
                    <span className="item-price">$ {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span className="total-label">Subtotal</span>
              <span className="total-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span className="total-label">Shipping</span>
              <span className="total-note">Calculated at next step</span>
            </div>
            <div className="total-row final">
              <span className="total-label">Total</span>
              <span className="total-value">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
