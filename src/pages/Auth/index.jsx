import React from 'react';
import { LoginForm, RegisterForm } from '../../modules';
import { Route } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="auth">
      <Route exact path={['/login', '/']} component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
    </div>
  )
}

export default Auth;
