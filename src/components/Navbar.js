import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header--solid' : ''}`}>
      <div className="container-fluid">
        <div className="header-inner">
          {/* Background */}
          <div className="header-background"></div>
          {/* Desktop Header */}
          <div className="header-display-desktop">
            {/* Title and nav wrapper */}
            <div className="header-title-nav-wrapper">
              {/* Title */}
              <div className="header-title header-title--use-mobile-logo">
                <div className="header-title-logo">
                  <Link to="/">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/65e89bfea9208b23eefb5e65/1709743172113-TGBPX3DB677EA8JV4IME/RFW+-+Logo-04+copy.png?format=1500w" 
                      alt="Riyadh Fashion Week 2025" 
                    />
                  </Link>
                </div>
              </div>
              {/* Nav */}
              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list">
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/') ? 'header-nav-item--active header-nav-item--homepage' : ''}`}>
                      <Link to="/">Home</Link>
                    </div>
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/about') ? 'header-nav-item--active' : ''}`}>
                      <Link to="/about">About</Link>
                    </div>
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/casting') ? 'header-nav-item--active' : ''}`}>
                      <Link to="/casting">CASTING</Link>
                    </div>
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/sponsorship') ? 'header-nav-item--active' : ''}`}>
                      <Link to="/sponsorship">SPONSORSHIP & PARTNERSHIP</Link>
                    </div>
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/press') ? 'header-nav-item--active' : ''}`}>
                      <Link to="/press">Press</Link>
                    </div>
                    <div className={`header-nav-item header-nav-item--collection ${isActive('/contact') ? 'header-nav-item--active' : ''}`}>
                      <Link to="/contact">Contact us</Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="header-display-mobile">
            {/* Title and nav wrapper */}
            <div className="header-title-nav-wrapper">
              {/* Title */}
              <div className="header-title header-title--use-mobile-logo">
                <div className="header-title-logo">
                  <Link to="/">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/65e89bfea9208b23eefb5e65/1709743173449-PB8PQCI1JXHVTSZUR7M2/RFW+-+Logo-04+copy.png?format=1500w" 
                      alt="Riyadh Fashion Week 2025" 
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Burger Menu */}
          <div className="header-burger" onClick={toggleMenu}>
            <button className="header-burger-btn burger">
              <span className="js-header-burger-open-title visually-hidden">Open Menu</span>
              <span className="js-header-burger-close-title visually-hidden">Close Menu</span>
              <div className="burger-box">
                <div className="burger-inner header-menu-icon-doubleLineHamburger">
                  <div className="top-bun"></div>
                  <div className="patty"></div>
                  <div className="bottom-bun"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay">
              <nav className="mobile-menu">
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <Link to="/casting" onClick={toggleMenu}>CASTING</Link>
                <Link to="/sponsorship" onClick={toggleMenu}>SPONSORSHIP & PARTNERSHIP</Link>
                <Link to="/press" onClick={toggleMenu}>Press</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact us</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
