import React from 'react';
import { Link } from 'react-router-dom';

import gym from '../assets/images/gym.svg';

import BurgerModal from './Burger/BurgerModal.js';
import useModal from './Burger/useModal.js';

const Navbar = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div>
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
              WORKOUTS
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
        <BurgerModal isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
};

const Logo = (
  <img
    src={gym}
    alt=''
    style={{ height: '70px', width: '70px', float: 'left' }}
  />
);

export default Navbar;
