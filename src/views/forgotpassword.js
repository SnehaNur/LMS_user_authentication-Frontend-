import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import './forgotpassword.css';
import axios from 'axios';

const Forgotpassword = (props) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/forgot-password/',
        { username }
      );

      setMessage(response.data.message || 'Password reset instructions have been sent to your email');
      // Redirect to check-mail page after successful submission
      history.push('/check-mail');
    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.response?.data?.username?.[0] ||
        'Failed to send reset instructions. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgotpassword-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="forgotpassword-forgotpassword">
        <div className="forgotpassword-user-forgot-password"></div>
        <div className="forgotpassword-admin-forgot-password-form">
          <img
            src="/external/pleaseenteryourusername4225-o34.svg"
            alt="Pleaseenteryourusername4225"
            className="forgotpassword-pleaseenteryourusername"
          />
          <img
            src="/external/forgotpassword4225-jv9b.svg"
            alt="ForgotPassword4225"
            className="forgotpassword-forgot-password"
          />
          
          {/* Username Input Field */}
          <div className="forgotpassword-frame2">
            <input
              type="text"
              className="forgotpassword-username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />
            <div className="forgotpassword-username">
              <img
                src="/external/vector4225-3f8.svg"
                alt="Vector4225"
                className="forgotpassword-vector1"
              />
              <img
                src="/external/vector4225-2eka.svg"
                alt="Vector4225"
                className="forgotpassword-vector2"
              />
              <img
                src="/external/vector4225-k9zg.svg"
                alt="Vector4225"
                className="forgotpassword-vector3"
              />
              <img
                src="/external/vector4225-1dph.svg"
                alt="Vector4225"
                className="forgotpassword-vector4"
              />
              <img
                src="/external/vector4225-r4hl.svg"
                alt="Vector4225"
                className="forgotpassword-vector5"
              />
              <img
                src="/external/vector4225-31i.svg"
                alt="Vector4225"
                className="forgotpassword-vector6"
              />
              <img
                src="/external/vector4225-8jew.svg"
                alt="Vector4225"
                className="forgotpassword-vector7"
              />
              <img
                src="/external/vector4225-1km.svg"
                alt="Vector4225"
                className="forgotpassword-vector8"
              />
            </div>
          </div>

          {/* Messages */}
          {message && (
            <div className="forgotpassword-success-message">
              {message}
            </div>
          )}
          {error && (
            <div className="forgotpassword-error-message">
              {error}
            </div>
          )}

          {/* Reset Password Button */}
          <button 
            className="forgotpassword-btn-reset-password" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span className="forgotpassword-text1" style={{ cursor: 'pointer' }}>
              {isLoading ? 'SENDING...' : 'RESET PASSWORD'}
            </span>
          </button>

          {/* Back Button */}
          <div className="forgotpassword-btn-back-right" onClick={() => history.goBack()}>
            <span className="forgotpassword-text2">BACK</span>
          </div>

          <img
            src="/external/image444225-2930i-200h.png"
            alt="Image444225"
            className="forgotpassword-image44"
          />
          <div className="forgotpassword-group133551">
            <img
              src="/external/subtract4225-vrpl.svg"
              alt="Subtract4225"
              className="forgotpassword-subtract1"
            />
            <img
              src="/external/subtract4225-guxt.svg"
              alt="Subtract4225"
              className="forgotpassword-subtract2"
            />
          </div>
          <div className="forgotpassword-group133563">
            <div className="forgotpassword-frame2431">
              <span className="forgotpassword-text3">Brain Station 23</span>
              <span className="forgotpassword-text4">Library</span>
              <span className="forgotpassword-text5">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
          <div className="forgotpassword-group133564">
            <div className="forgotpassword-frame2432">
              <span className="forgotpassword-text6">Brain Station 23</span>
              <span className="forgotpassword-text7">Library</span>
              <span className="forgotpassword-text8">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
          <img
            src="/external/logo14376-xvkg-300h.png"
            alt="logo14376"
            className="forgotpassword-logo1"
          />
          <img
            src="/external/logo24376-cvbk-200h.png"
            alt="logo24376"
            className="forgotpassword-logo2"
          />
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;