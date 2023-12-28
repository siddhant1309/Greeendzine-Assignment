import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SearchedUser from './components/SearchedUser/SearchedUser';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/searched-user" element={<SearchedUser />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
