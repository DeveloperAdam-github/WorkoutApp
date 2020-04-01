import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const BurgerModal = ({ isShowing, hide, onLogout, logout }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='modal-overlay' />
          <div
            className='modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            <div className='modal'>
              <div className='modal-header'>
                <button
                  className='modal-burger-button'
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='burger-navbar'>
                <ul className='burger-navbar-links'>
                  <li>
                    <Link
                      onClick={hide}
                      to='/workout'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      TEMPLATES
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={hide}
                      to='/percentages'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      PERCENTAGES
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={hide}
                      to='/workoutform'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      WORKOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={logout}
                      to='/loginuser'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      LOGOUT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default BurgerModal;
