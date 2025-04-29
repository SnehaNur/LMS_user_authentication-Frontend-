import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLoginSignup from './components/user-login-signup';
import AdminLoginForm from './components/admin-login-form';
import AdminForgotPasswordForm from './components/admin-forgot-password-form';
// import other components as needed

function App() {
  return (
    <Router>
      <Switch>
        {/* Default route */}
        <Route exact path="/" component={UserLoginSignup} />
        
        {/* Other routes */}
        <Route path="/admin-login-form" component={AdminLoginForm} />
        <Route path="/admin-forgot-password-form" component={AdminForgotPasswordForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
