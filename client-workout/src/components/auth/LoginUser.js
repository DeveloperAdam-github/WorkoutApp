import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import './Register.css';

const LoginUser = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
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
