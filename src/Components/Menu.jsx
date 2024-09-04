import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import './Menu.css'; // Import CSS for Menu

const Menu = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="menu-container">
      <div className="horizontal-menu">
        <button
          onClick={toggleMenu}
          className="hamburger-btn"
          aria-expanded={isOpen}
          aria-controls="menu-items"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div 
          id="menu-items" 
          className={`menu-items ${isOpen ? 'open' : ''}`} 
          role="menu"
        >
          <Link 
            to="/grid-view" 
            onClick={closeMenu}
            role="menuitem"
          >
            Grid View
          </Link>
          <Link 
            to="/tiles-view" 
            onClick={closeMenu}
            role="menuitem"
          >
            Tile View
          </Link>
        </div>
      </div>
    </div>
  );
};

// Add prop types to document expected props
Menu.propTypes = {
  view: PropTypes.string, // Adjust type according to actual usage
};

export default Menu;
