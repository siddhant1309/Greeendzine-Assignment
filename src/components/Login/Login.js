// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your Login.css file
import loginImage from './Group_3.png';

const Login = () => {
  const navigate = useNavigate();  // Get the navigate function

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Here, you can add your authentication logic
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulating a successful login
    // Replace this with your actual authentication logic
    setTimeout(() => {
      // Redirect to the home page after successful login
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="page-container login-page">
      <img className="login-image" src={loginImage} alt="Login" />
      <div className="login-form">
      
        {/* <h1>Login</h1> */}
        
        <form onSubmit={handleLogin}>
          <div className="input-container">
            {/* <label>Email:</label> */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            {/* <label>Password:</label> */}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="forgot-password-container">
          <button className="forgot-password-button">Forgot Password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;