import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CheckMail from './views/check-mail'
import ResetPassword from './views/reset-password'
import UserLoginSignup from './views/user-login-signup'
import Forgotpassword from './views/forgotpassword'
import Signup from './views/signup'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* 👇 Default route - now points to UserLoginSignup */}
        <Route component={UserLoginSignup} exact path="/" />

        {/* ✅ Other routes */}
        <Route component={CheckMail} exact path="/check-mail" />
        <Route component={ResetPassword} exact path="/reset-password" />
        <Route component={Forgotpassword} exact path="/forgotpassword" />
        <Route component={Signup} exact path="/signup" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
