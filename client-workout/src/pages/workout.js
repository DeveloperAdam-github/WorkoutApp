import React from 'react';
import '../App.css';

import Jimwendler from '../assets/images/Jimwendler.jpg';

const Workout = () => {
  return (
    <div className='container'>
      <div className='workoutpage'>
        <h1 style={{ marginBottom: '90px' }}>WORKOUTS</h1>
        <div className='cards-list'>
          <div className='card 1'>
            <div className='card_image'>
              <img
                src='https://violentzen.com/wp-content/uploads/2015/07/531workoutJimWendler.gif'
                alt='pic'
              />
            </div>
            <div className='card_title'>
              <p></p>
            </div>
          </div>

          <div className='card 2'>
            <div className='card_image'>
              <img
                src='https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/arnold-schwarzenegger-workout.jpg'
                alt='pic'
              />
            </div>
            <div className='card_title '>
              <p></p>
            </div>
          </div>

          <div className='card 3'>
            <div className='card_image'>
              <img
                src='https://i.ytimg.com/vi/y86TYYpaMoA/maxresdefault.jpg'
                alt='pic'
              />
            </div>
            <div className='card_title'>
              <p></p>
            </div>
          </div>

          <div className='card 4'>
            <div className='card_image'>
              <img
                src='https://i.ytimg.com/vi/qkUTDTL1o_Q/maxresdefault.jpg'
                alt='pic'
              />
            </div>
            <div className='card_title'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JimW = (
  <img
    src={Jimwendler}
    alt='html'
    style={{
      width: '100%',
      height: '100%'
    }}
  />
);

export default Workout;
