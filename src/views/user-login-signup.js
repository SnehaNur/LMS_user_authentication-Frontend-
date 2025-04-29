import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './user-login-signup.css';

const UserLoginSignup = (props) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/login/',
        loginData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (response.data.is_admin) {
        setError('For Admin login go to the admin-login page.');
        setIsLoading(false);
        return;
      }
  
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      window.location.href = '/dashboard';
  
    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail || 'Invalid credentials');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="user-login-signup-container">
      <Helmet>
        <title>Login - Library</title>
      </Helmet>
      <div className="user-login-signup-user-login-signup">
        <div className="user-login-signup-admin-login-form">
          <div className="user-login-signup-frame229">
            <span className="user-login-signup-text10">Brain Station 23</span>
            <span className="user-login-signup-text11">Library</span>
            <span className="user-login-signup-text12">
              Your Premier Digital Library for Exploring Technical, Training,
              and IT Books
            </span>
          </div>
          
          <span className="user-login-signup-text13">
            Please enter your credentials to log in
          </span>
          
          {/* Error Message - Positioned absolutely below the "Please enter..." text */}
          {error && (
            <div className="user-login-signup-error-message">
              {error}
            </div>
          )}
          
          {/* Username Field */}
          <div className="user-login-signup-frame2">
            <span className="user-login-signup-text14">Username</span>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              className="user-login-signup-input-field"
              required
            />
          </div>
          
          {/* Password Field */}
          <div className="user-login-signup-frame3">
            <span className="user-login-signup-text15">Password</span>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="user-login-signup-input-field"
              required
            />
          </div>
          
          <div className="user-login-signup-frame242">
            <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
              <span className="user-login-signup-text16" style={{ cursor: 'pointer' }}>
                Forgot password?
              </span>
            </Link>
          </div>
          
          <span className="user-login-signup-text17">Welcome Back !!</span>
          
          {/* Login Button */}
          <div 
            className="user-login-signup-group16" 
            onClick={handleSubmit}
            style={{ cursor: 'pointer' }}
          >
            <div className="user-login-signup-group1335621"></div>
            <div className="user-login-signup-group1335622"></div>
            <span className="user-login-signup-text18">
              {isLoading ? 'Logging in...' : 'LOG IN'}
            </span>
          </div>
          
          <div className="user-login-signup-group133550">
            <img
              alt="Subtract4225"
              src="/external/subtract4225-hv5q.svg"
              className="user-login-signup-subtract1"
            />
            <img
              alt="Subtract4225"
              src="/external/subtract4225-4yr6.svg"
              className="user-login-signup-subtract2"
            />
          </div>
        </div>
        
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <span className="user-login-signup-text19" style={{ cursor: 'pointer' }}>
            Sign Up
          </span>
        </Link>
        
        <img
          alt="logo24376"
          src="/external/logo24376-w5h-200h.png"
          className="user-login-signup-logo2"
        />
      </div>
    </div>
  );
};

export default UserLoginSignup;