import React, { useContext, useEffect } from 'react';
import Workouts from './components/workouts/Workouts';
import WorkoutFilter from './components/workouts/WorkoutFilter';
import AuthContext from './context/auth/authContext';

import fitness from './assets/images/FitnessImage1.svg';

const LandingPage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='landing-page'>
        <h1 style={{ fontSize: '35px', paddingTop: '140px' }}>
          <br />
          GET IT <br /> DONE.
        </h1>
        <br />
        <WorkoutFilter />
        <a href='/workoutform'>Add a workout</a>
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
