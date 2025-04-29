import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './check-mail.css';

const CheckMail = (props) => {
  const history = useHistory();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    // Move to Reset Password page and pass the otp
    history.push('/reset-password', { otp });
  };

  return (
    <div className="check-mail-container">
      <Helmet>
        <title>Check Mail</title>
      </Helmet>
      <div className="check-mail-check-mail">
        <div className="check-mail-component2">
          <div className="check-mail-group4">
            <div className="check-mail-admin-otp-form">
              <div className="check-mail-admin-forgot-password-form">
                <div className="check-mail-pleaseenteryourusername"></div>
                <div className="check-mail-forgot-password"></div>
                <div className="check-mail-btn-back-right">
                  <span className="check-mail-text1">BACK</span>
                </div>
                <div className="check-mail-group133551">
                  <img
                    src="/external/subtract4225-nb3.svg"
                    alt="Subtract4225"
                    className="check-mail-subtract1"
                  />
                  <img
                    src="/external/subtract4225-vatq.svg"
                    alt="Subtract4225"
                    className="check-mail-subtract2"
                  />
                </div>
                <img
                  src="/external/logo24376-479-200h.png"
                  alt="logo24376"
                  className="check-mail-logo2"
                />
              </div>
            </div>
            <img
              src="/external/image14225-dpx-400h.png"
              alt="Image14225"
              className="check-mail-image1"
            />
          </div>

          <span className="check-mail-text2">
            Please enter the OTP to proceed
          </span>
          <span className="check-mail-text3">Check your Mailbox</span>

          {/* OTP Input Field */}
          <div className="check-mail-frame">
            <span className="check-mail-text4">OTP</span>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              className="otp-input"
              required
            />
          </div>

          {/* Show Error if any */}
          {error && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              {error}
            </div>
          )}

          {/* VERIFY button */}
<div className="check-mail-btn-verify">
  <button
    onClick={handleSubmit}
    className="verify-button"
    style={{
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none', 
    }}
  >
 <span className="check-mail-text5" style={{ cursor: 'pointer' }}>
    VERIFY
  </span>
  </button>
</div>


          <div className="check-mail-group133563">
            <div className="check-mail-frame243">
              <span className="check-mail-text6">Brain Station 23</span>
              <span className="check-mail-text7">Library</span>
              <span className="check-mail-text8">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
