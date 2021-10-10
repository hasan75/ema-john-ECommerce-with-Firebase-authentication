import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  console.log('came from', location.state?.from);
  return (
    <div className='login-form'>
      <div>
        <h2>Log In</h2>
        <form onSubmit>
          <input type='email' name='' id='' placeholder='your email' />
          <br />
          <input
            type='password'
            name=''
            id=''
            placeholder='enter password'
          />{' '}
          <br />
          <input type='submit' value='Submit' />
        </form>
        <br />
        <p>
          New to Ema-John? <Link to='/register'>Create Account</Link>
        </p>
        <div>-------or--------</div>
        <button onClick={signInUsingGoogle} className='btn-regular'>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
