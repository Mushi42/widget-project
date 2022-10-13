import React from 'react'
import Search from '../Shared/Search/Search'

const Topbar = () => {
  return (
      <div className="wrapper">
          <div className="container">
              <div className="navbar">
                  <div className="logo">Logo</div>
                  <Search />
                  <div className="links">
                      <ul>
                          <li>
                              Home
                          </li>
                          <li className="dropdown">
                              Info
                              <div className="menu">
                                  <div className="menu-container">
                                      <div className="header">
                                          <h3>
                                              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                              My cart</h3>
                                          <p className="sub-title">Lorem adad sd asdadd Lorem adad sd asdadd </p>
                                      </div>
                                      <div className="menu-content">
                                          <div className="menu-links">
                                              <ul>
                                                  <li>Support</li>
                                                  <li>Guides</li>
                                                  <li>Custom stories</li>
                                              </ul>
                                              <ul>
                                                  <li>Blog</li>
                                                  <li>Contact</li>
                                                  <li>Conference</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="menu-footer">
                                          <div className="header">
                                              <h3>
                                                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>Documentations</h3>
                                              <p className="sub-title">Lorem adad sd asdadd Lorem adad.</p>
                                          </div>
                                          <div className="menu-links">
                                              <ul>
                                                  <li>Support</li>
                                                  <li>Guides</li>
                                              </ul>
                                              <ul>
                                                  <li>Blog</li>
                                                  <li>Contact</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="dropdown">
                              Cart
                              <div className="menu">
                                  <div className="menu-container">
                                      <div className="header">
                                          <h3>
                                              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                              Shopping cart</h3>
                                          <p className="sub-title">Lorem adad sd asdadd Lorem adad sd asdadd </p>
                                      </div>
                                      <div className="menu-content">
                                          <div className="menu-cart">
                                              <div className="product">
                                                  <div className="image"></div>
                                                  <div className="product-description">
                                                      <div className="prod">Product Lorem adad sd asdadd </div>
                                                      <div className="counter">
                                                          <div className="price">400$</div>
                                                          <div className="buttons">
                                                              <button>-</button>
                                                              <div className="count">4</div>
                                                              <button>+</button>
                                                          </div>

                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="product">
                                                  <div className="image"></div>
                                                  <div className="product-description">
                                                      <div className="prod">Product asd sda</div>
                                                      <div className="counter">
                                                          <div className="price">400$</div>
                                                          <div className="buttons">
                                                              <button>-</button>
                                                              <div className="count">4</div>
                                                              <button>+</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Topbar