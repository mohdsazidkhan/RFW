import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;

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
  
  // Check if logo and menu should be white (when menu is open on any page)
  const shouldBeWhite = isMenuOpen;

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
          style={{ filter: shouldBeWhite ? "none" : (theme === "dark" ? "invert(1)" : "none") }}
        />

          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav header-nav-desktop">
          {['/', '/about', 
          '/designers', 
          '/calendar', 
          '/livestream', 
          '/sponsorship', '/press', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${isActive(path) ? 'active' : ''}`}
              onClick={closeMenu}
              style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
            >
              {path === '/' ? t.nav.home :
               path === '/about' ? t.nav.about :
               path === '/designers' ? t.nav.designers :
               path === '/calendar' ? t.nav.calendar :
               path === '/livestream' ? t.nav.stream :
               path === '/sponsorship' ? t.nav.sponsorship :
               path === '/press' ? t.nav.press : t.nav.contact}
            </Link>
          ))}
        </nav>

        {/* Language Toggle Button */}
        <button 
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          style={{ filter: shouldBeWhite ? "none" : (theme === "dark" ? "invert(1)" : "none") }}
        >
          {language === 'ar' ? 'EN' : 'AR'}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="header-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{ filter: shouldBeWhite ? "none" : (theme === "dark" ? "invert(1)" : "none") }} className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span style={{ filter: shouldBeWhite ? "none" : (theme === "dark" ? "invert(1)" : "none") }} className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span style={{ filter: shouldBeWhite ? "none" : (theme === "dark" ? "invert(1)" : "none") }} className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
          <nav className="header-nav header-nav-mobile">
            {['/', '/about', 
            '/designers', 
            '/calendar', 
            '/livestream', 
            '/sponsorship', '/press', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${isActive(path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {path === '/' ? t.nav.home :
                 path === '/about' ? t.nav.about :
                 path === '/designers' ? t.nav.designers :
                 path === '/calendar' ? t.nav.calendar :
                 path === '/livestream' ? t.nav.stream :
                 path === '/sponsorship' ? t.nav.sponsorship :
                 path === '/press' ? t.nav.press : t.nav.contact}
              </Link>
            ))}
            <button 
              className="language-toggle-mobile"
              onClick={toggleLanguage}
              aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;