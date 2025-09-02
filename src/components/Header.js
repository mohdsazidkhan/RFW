import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Detect theme based on page - UPDATED LOGIC
  const getTheme = () => {
    // Only these pages should have dark theme
    const darkPages = ['/press', '/contact']; 
    return darkPages.includes(location.pathname) ? 'dark' : 'light';
  };

  const theme = getTheme();

  return (
    <header className={`common-header ${theme}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>
          <img
          src="/logo.webp"
          alt="RFW Logo"
          className="logo-image"
          style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
        />

          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav header-nav-desktop">
          {['/', '/about', '/casting', '/calendar', '/sponsorship', '/press', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${isActive(path) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {path === '/' ? 'HOME' :
               path === '/about' ? 'ABOUT' :
               path === '/casting' ? 'CASTING' :
               path === '/calendar' ? 'CALENDAR' :
               path === '/sponsorship' ? 'SPONSORSHIP & PARTNERSHIP' :
               path === '/press' ? 'PRESS' : 'CONTACT US'}
            </Link>
          ))}
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
            {['/', '/about', '/casting', '/calendar', '/sponsorship', '/press', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${isActive(path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {path === '/' ? 'HOME' :
                 path === '/about' ? 'ABOUT' :
                 path === '/casting' ? 'CASTING' :
                 path === '/calendar' ? 'CALENDAR' :
                 path === '/sponsorship' ? 'SPONSORSHIP & PARTNERSHIP' :
                 path === '/press' ? 'PRESS' : 'CONTACT US'}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;