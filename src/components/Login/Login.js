import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
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
        <button className='btn-regular'>Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
