import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import './reset-password.css';

const ResetPassword = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const otp = location.state?.otp || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/reset-password/',
        {
          otp,
          new_password: newPassword,
          confirm_password: confirmPassword
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        history.push('/login', { 
          message: 'Password reset successfully. Please login with your new password.' 
        });
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Failed to reset password');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <Helmet>
        <title>Reset Password - Library</title>
      </Helmet>
      <div className="reset-password-reset-password">
        <div className="reset-password-component4">
          {/* Keep all your existing design elements */}
          {/* ... */}
          
          <div className="reset-password-group3">
            <span className="reset-password-text2">
              Please enter your new password
            </span>
            <span className="reset-password-text3">Reset Password</span>
            
            {/* Error Message */}
            {error && (
              <div style={{
                color: 'red',
                textAlign: 'center',
                margin: '10px 0',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}
            
            {/* New Password */}
            <div className="reset-password-frame2">
              <span className="reset-password-text4">New Password</span>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '1px solid #000',
                  background: 'transparent',
                  outline: 'none',
                  marginTop: '5px'
                }}
                required
              />
            </div>
            
            {/* Confirm Password */}
            <div className="reset-password-frame230">
              <span className="reset-password-text5">Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '1px solid #000',
                  background: 'transparent',
                  outline: 'none',
                  marginTop: '5px'
                }}
                required
              />
            </div>
            
            {/* Reset Password Button */}
            <div 
              className="reset-password-btn-reset-password" 
              onClick={handleSubmit}
              style={{ cursor: 'pointer' }}
            >
              <span className="reset-password-text6">
                {isLoading ? 'PROCESSING...' : 'RESET PASSWORD'}
              </span>
            </div>
          </div>
        </div>
        <div className="reset-password-group133563">
          <div className="reset-password-group133565">
            <img
              src="/external/downloadremovebgpreview14225-bz39-400w.png"
              alt="downloadremovebgpreview14225"
              className="reset-password-downloadremovebgpreview1"
            />
            <div className="reset-password-frame243">
              <span className="reset-password-text7">Brain Station 23</span>
              <span className="reset-password-text8">Library</span>
              <span className="reset-password-text9">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
