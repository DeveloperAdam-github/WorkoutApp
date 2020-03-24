import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

import './Register.css';

const RegisterUser = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('Register submit');
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span style={{ color: '#fd4e00' }}>Register</span>
      </h1>
      <form onSubmit={onSubmit} className='register-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
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
        <div>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password2'
            name='password2'
            value={password2}
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
          value='Register'
          className='register-button'
        />
      </form>
    </div>
  );
};

export default RegisterUser;
