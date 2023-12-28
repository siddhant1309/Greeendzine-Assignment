// Home.js
import React from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import './Home.css'; // Import your Home.css file
import image from './moptro_logo.png';

const Home = () => {
  // Function to calculate the width of the productivity bar
  const calculateBarWidth = (percentage) => {
    return { width: `${percentage}%` };
  };

  return (
    <div className="page-container dashboard-page">
      <div className="image-container">
        <img className="dashboard-image" src={image} alt="Dashboard Image" />
      </div>
      <div className="employee_prod_dash">
        <h1>Employee Productivity Dashboard</h1>
      </div>
      <div className="productivity-container">
        {[
          { day: 'Monday', percentage: 80 },
          { day: 'Tuesday', percentage: 90 },
          { day: 'Wednesday', percentage: 75 },
          { day: 'Thursday', percentage: 85 },
          { day: 'Friday', percentage: 78 },
          { day: 'Saturday', percentage: 95 },
        ].map((item, index) => (
          <div className="productivity-item" key={index}>
            <p>{`Productivity on ${item.day}:`}</p>
            <span className="productivity-percentage">{item.percentage}%</span>
            <div
              className="productivity-bar"
              style={calculateBarWidth(item.percentage)}
            ></div>
          </div>
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
};

export default Home;
