import React from 'react';
import Workouts from './components/workouts/Workouts';

import fitness from './assets/images/FitnessImage1.svg';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='landing-page'>
        <h1 style={{ fontSize: '45px' }}>
          <br />
          GET IT <br /> DONE.
        </h1>
        <br />
        <div className='workouts'>
          <Workouts />
        </div>
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

export default LandingPage;
