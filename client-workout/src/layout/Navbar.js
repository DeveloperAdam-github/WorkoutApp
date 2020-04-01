import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import gym from '../assets/images/gym.svg';
import logoutlogo from '../assets/images/logout.svg';

import BurgerModal from './Burger/BurgerModal.js';
import useModal from './Burger/useModal.js';

import AuthContext from '../context/auth/authContext';
import WorkoutContext from '../context/workout/workoutContext';
import BurgerModalMobile from './Burger/BurgerModalMobile';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const workoutContext = useContext(WorkoutContext);

  const { isAuthenticated, logout } = authContext;
  const { clearWorkouts } = workoutContext;

  const { isShowing, toggle } = useModal();

  const onLogout = () => {
    logout();
    clearWorkouts();
  };

  const authLinks = (
    <Fragment>
      <div className='nav-logo'>
        <Link to='/'>{Logo}</Link>
      </div>
      <div className='navbar'>
        <ul className='navbar-links'>
          <li>
            <Link
              to='/workout'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              TEMPLATES
            </Link>
          </li>
          <li>
            <Link
              to='/percentages'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              PERCENTAGES
            </Link>
          </li>
          <li>
            <Link
              to='/loginuser'
              onClick={onLogout}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
        <div className='burger' id='burger' onClick={toggle}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <BurgerModal isShowing={isShowing} hide={toggle} logout={onLogout} />
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className='nav-logo'>
        <Link to='/'>{Logo}</Link>
      </div>
      <div className='navbar'>
        <ul className='navbar-links'>
          <li>
            <Link
              to='/register'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              REGISTER
            </Link>
          </li>
          <li>
            <Link
              to='/loginuser'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              LOGIN
            </Link>
          </li>
        </ul>
        <div className='burger' id='burger' onClick={toggle}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <BurgerModalMobile isShowing={isShowing} hide={toggle} />
      </div>
    </Fragment>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

const Logo = (
  <img
    src={gym}
    alt=''
    style={{ height: '70px', width: '70px', float: 'left' }}
  />
);

// const logout = (
//   <img src={logoutlogo} alt='' style={{ height: '60px', width: '60px' }} />
// );

export default Navbar;
