import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './signup.css';

const Signup = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    contact_number: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/signup/',
        formData
      );

      if (response.status === 201) {
        setSuccess('Registration successful!');
        setFormData({
          username: '',
          contact_number: '',
          email: '',
          first_name: '',
          last_name: '',
          password: '',
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <Helmet>
        <title>Sign Up - Library</title>
      </Helmet>
      <div className="signup-signup">
        <div className="signup-admin-otp-form">
          <div className="signup-group133570">
            <div className="signup-admin-forgot-password-form">
              <div className="signup-pleaseenteryourusername"></div>
              <div className="signup-forgot-password"></div>
              <div className="signup-btn-back-right">
                <span className="signup-text10">BACK</span>
              </div>
              <div className="signup-group133551">
                <div className="signup-group133566">
                  <img
                    src="/external/subtract4227-342g.svg"
                    alt="Subtract4227"
                    className="signup-subtract1"
                  />
                  <img
                    src="/external/subtract4227-9kj.svg"
                    alt="Subtract4227"
                    className="signup-subtract2"
                  />
                </div>
              </div>
              <div className="signup-group133571">
                <div className="signup-group133572">
                  <span className="signup-text11">Library</span>
                  <span className="signup-text12">Brain Station 23</span>
                  <span className="signup-text13">
                    Your Premier Digital Library for Exploring Technical,
                    Training, and IT Books
                  </span>
                </div>
              </div>
              <img
                src="/external/logo24376-0guj-200h.png"
                alt="logo24376"
                className="signup-logo2"
              />
            </div>
            <div className="signup-group133569">
              <div className="signup-group133561">
                <div className="signup-group133560">
                  <div className="signup-group4">
                    <span className="signup-text14">
                      Please provide your information to sign up.
                    </span>
                    
                    {/* Error/Success Messages - Added minimal styling */}
                    {error && (
                      <div style={{ 
                        color: 'red', 
                        margin: '10px 0',
                        textAlign: 'center',
                        fontSize: '14px'
                      }}>
                        {error}
                      </div>
                    )}
                    {success && (
                      <div style={{ 
                        color: 'green', 
                        margin: '10px 0',
                        textAlign: 'center',
                        fontSize: '14px'
                      }}>
                        {success}
                      </div>
                    )}

                    {/* First Name */}
                    <div className="signup-frame230">
                      <span className="signup-text18">First Name</span>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div className="signup-frame231">
                      <span className="signup-text19">Last Name</span>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Contact No */}
                    <div className="signup-frame232">
                      <span className="signup-text16">Contact No</span>
                      <input
                        type="text"
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="signup-frame233">
                      <span className="signup-text17">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Username */}
                    <div className="signup-frame2">
                      <span className="signup-text15">Username</span>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="signup-frame3">
                      <span className="signup-text20">Password</span>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #000',
                          width: '100%',
                          padding: '5px 0',
                          marginTop: '5px'
                        }}
                        required
                      />
                    </div>

                    {/* Sign Up Button */}
                    <div 
                      className="signup-btn-sign-up" 
                      onClick={handleSubmit}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="signup-text22">SIGN UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;