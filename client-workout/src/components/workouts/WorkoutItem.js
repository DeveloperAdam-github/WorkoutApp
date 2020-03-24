import React, { useContext } from 'react';
import WorkoutContext from '../../context/workout/workoutContext';

import PropTypes from 'prop-types';
import './WorkoutItem.css';
import del from '../../assets/images/bin.svg';
import edi from '../../assets/images/edit.svg';

const WorkoutItem = ({ workout }) => {
  const workoutContext = useContext(WorkoutContext);
  const { deleteWorkout, setCurrent, clearCurrent } = workoutContext;

  const { id, workoutday, exercise, weight, sets, reps } = workout;

  const onDelete = () => {
    deleteWorkout(id);
    clearCurrent();
  };

  return (
    <div className='workoutcard-container'>
      <div className='workoutcard bg-light'>
        <h1 className='text-center' style={{ color: 'black' }}>
          {workoutday}
        </h1>
        <h3 className='text-center' style={{ color: 'black' }}>
          Exercise: <span style={{ color: 'white' }}>{exercise}</span>
        </h3>
        <h3 className='text-center' style={{ color: 'black' }}>
          Weight: <span style={{ color: 'white' }}>{weight}</span>
        </h3>
        <h3 className='text-center' style={{ color: 'black' }}>
          Sets: <span style={{ color: 'white' }}>{sets} X</span> Reps:
          <span style={{ color: 'white' }}> {reps},</span>
        </h3>
        <div className='delete' onClick={onDelete}>
          {Delete}
        </div>
        <div className='edit' onClick={() => setCurrent(workout)}>
          {Edit}
        </div>
      </div>
    </div>
  );
};

WorkoutItem.propTypes = {
  workout: PropTypes.object.isRequired
};

const Delete = (
  <img src={del} alt='del' style={{ height: '20px', width: '20px' }} />
);
const Edit = (
  <img src={edi} alt='del' style={{ height: '20px', width: '20px' }} />
);

export default WorkoutItem;
