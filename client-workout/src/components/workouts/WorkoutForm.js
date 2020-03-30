import React, { useState, useContext, useEffect } from 'react';
import WorkoutContext from '../../context/workout/workoutContext';
import AuthContext from '../../context/auth/authContext';

import pluslogo from '../../assets/images/plus.svg';
import edi from '../../assets/images/edit.svg';

const WorkoutForm = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const workoutContext = useContext(WorkoutContext);

  const { addWorkout, current, clearCurrent, updateWorkout } = workoutContext;

  useEffect(() => {
    if (current !== null) {
      setWorkout(current);
    } else {
      setWorkout({
        workoutday: '',
        exercise: '',
        weight: '',
        sets: '',
        reps: ''
      });
    }
  }, [workoutContext, current]);

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

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addWorkout(workout);
    } else {
      updateWorkout(workout);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='weight-form-input'>
        <div className='form-card'>
          <h3>{current ? 'Edit ' : 'Add '} </h3>
          <input
            className='input-text'
            placeholder='Workout Day'
            name='workoutday'
            value={workoutday}
            onChange={onChange}
          />
          <input
            className='input-text'
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
          <button
            type='submit'
            style={{
              backgroundColor: '#fd4e00',
              border: 'none',
              height: '25px',
              width: '25px'
            }}
          >
            {plus}
          </button>
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
const edit = (
  <img src={edi} alt='del' style={{ height: '20px', width: '20px' }} />
);

export default WorkoutForm;
