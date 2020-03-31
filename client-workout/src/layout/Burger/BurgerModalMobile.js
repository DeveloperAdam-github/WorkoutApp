import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const BurgerModalMobile = ({ isShowing, hide, Logo }) =>
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
                      to='/register'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      REGISTER
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={hide}
                      to='/loginuser'
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      LOGIN
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

export default BurgerModalMobile;
