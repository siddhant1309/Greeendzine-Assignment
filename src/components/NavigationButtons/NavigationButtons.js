// NavigationButtons.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationButtons.css'; // Import your NavigationButtons.css file

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons">
      <Link to="/dashboard" className="nav-button">
        Home
      </Link>
      <Link to="/searched-user" className="nav-button">
        User
      </Link>
    </div>
  );
};

export default NavigationButtons;
