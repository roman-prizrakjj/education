import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Курсы', href: '#courses' },
    { label: 'Для компаний', href: '#corporate' },
    { label: 'О нас', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        <a href="#" className="header__logo">
          <span className="header__logo-text">EMD</span>
          <span className="header__logo-accent">Education</span>
        </a>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <div className="header__nav-top">
            <a href="#" className="header__logo header__logo--dark" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="header__logo-text">EMD</span>
              <span className="header__logo-accent">Education</span>
            </a>
            <button
              className="header__close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="header__nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header__nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary header__cta" onClick={() => setIsMobileMenuOpen(false)}>
              Консультация
            </a>
          </div>
        </nav>

        <button
          className={`header__burger ${isMobileMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
