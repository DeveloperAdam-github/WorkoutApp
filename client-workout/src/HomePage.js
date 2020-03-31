import React, { useContext, useEffect } from 'react';
import AuthContext from './context/auth/authContext';

import fitness from './assets/images/FitnessImage1.svg';

const HomePage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='landing-page'>
        <h1 style={{ fontSize: '40px', paddingTop: '100px' }}>
          GET IT <br /> DONE.
        </h1>
      </div>
    </div>
  );
};

const gymPic = (
  <img
    src={fitness}
    alt='fitnessimage'
    style={{ height: '250px', width: '250px' }}
  />
);

export default HomePage;
