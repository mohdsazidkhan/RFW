import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="common-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.webp" alt="RFW Logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav header-nav-desktop">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/casting" 
            className={`nav-link ${isActive('/casting') ? 'active' : ''}`}
          >
            CASTING
          </Link>
          <Link 
            to="/sponsorship" 
            className={`nav-link ${isActive('/sponsorship') ? 'active' : ''}`}
          >
            SPONSORSHIP & PARTNERSHIP
          </Link>
          <Link 
            to="/press" 
            className={`nav-link ${isActive('/press') ? 'active' : ''}`}
          >
            PRESS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="header-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
          <nav className="header-nav header-nav-mobile">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ABOUT
            </Link>
            <Link 
              to="/casting" 
              className={`nav-link ${isActive('/casting') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              CASTING
            </Link>
            <Link 
              to="/sponsorship" 
              className={`nav-link ${isActive('/sponsorship') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              SPONSORSHIP & PARTNERSHIP
            </Link>
            <Link 
              to="/press" 
              className={`nav-link ${isActive('/press') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              PRESS
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
