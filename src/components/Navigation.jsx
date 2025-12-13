/**
 * @fileoverview Navigation component with responsive mobile menu
 * @author Maxwell Jones
 */

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-top-row-mobile">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-wrapper">
              <img src="/logo.png" alt="Logo" className="nav-logo-img" />
            </div>
            <span>Maxwell Jones</span>
          </Link>
          <div className="nav-controls">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button 
              className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <Link to="/" className="nav-logo nav-logo-desktop">
          <div className="nav-logo-wrapper">
            <img src="/logo.png" alt="Logo" className="nav-logo-img" />
          </div>
          <span>Maxwell Jones</span>
        </Link>
        <div className="nav-right">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-controls-desktop">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
