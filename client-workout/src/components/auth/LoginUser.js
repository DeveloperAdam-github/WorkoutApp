import React, { useState } from 'react';

import './Register.css';

const LoginUser = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span style={{ color: '#fd4e00' }}>Login</span>
      </h1>
      <form onSubmit={onSubmit} className='register-form'>
        <div className='form-group'>
          <label htmlFor='name'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            style={{ fontSize: '16px' }}
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          style={{
            width: '18rem',
            color: '#fd4e00',
            fontSize: '1.4rem',
            marginTop: '10px'
          }}
          type='submit'
          value='Login'
          className='register-button'
        />
      </form>
    </div>
  );
};

export default LoginUser;
