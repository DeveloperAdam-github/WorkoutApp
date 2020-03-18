import React, { useState } from 'react';

import pluslogo from '../../assets/images/plus.svg';

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    workoutday: '',
    exercise: '',
    weight: '',
    sets: '',
    reps: ''
  });

  const { workoutday, exercise, weight, sets, reps } = workout;

  const onChange = e =>
    setWorkout({ ...workout, [e.target.name]: e.target.value });

  return (
    <form>
      <div className='weight-form-input'>
        <div className='form-card'>
          {/* <input
            className='input-text'
            type='text'
            placeholder='Workout Day'
            name='workoutday'
            value={workoutday}
            onChange={onChange}
          /> */}
          <input
            className='input-text'
            type='text'
            placeholder='Exercise'
            name='exercise'
            value={exercise}
            onChange={onChange}
          />
          <input
            className='input-number'
            type='number'
            placeholder='Weight = 0'
            name='weight'
            value={weight}
            onChange={onChange}
          />
          <input
            className='input-number'
            type='number'
            placeholder='Sets = 0'
            name='sets'
            value={sets}
            onChange={onChange}
          />
          <input
            className='input-number'
            type='number'
            placeholder='Reps = 0'
            name='reps'
            value={reps}
            onChange={onChange}
          />
          {plus}
        </div>
      </div>
    </form>
  );
};

const plus = (
  <img
    src={pluslogo}
    alt='del'
    style={{ height: '20px', width: '20px', marginTop: '20px' }}
  />
);

export default WorkoutForm;
