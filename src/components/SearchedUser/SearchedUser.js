// SearchedUser.js
import React, { useState } from 'react';
// import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
// src/components/SearchedUser/SearchedUser.js
import NavigationButtons from '../NavigationButtons/NavigationButtons';

import './SearchedUser.css'; // Import your SearchedUser.css file

const allEmployees = [
  { id: 1, name: 'John Doe', dob: '1990-01-15', role: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', dob: '1985-05-22', role: 'Product Manager' },
  { id: 3, name: 'Bob Johnson', dob: '1993-08-10', role: 'UI/UX Designer' },
  // Add more employee data as needed
];

const SearchedUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(allEmployees);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredResults = allEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.role.toLowerCase().includes(term)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="page-container searched-name-page">
      <h1>Employee List</h1>
      <div className="search-container">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Enter name or role"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="employee-list">
        {searchResults.map((employee) => (
          <div key={employee.id} className="employee-item">
            <p>EMP ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>DOB: {employee.dob}</p>
            <p>Role: {employee.role}</p>
          </div>
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
};

export default SearchedUser;
