import React, { useReducer } from 'react';
import uuid from 'uuid';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
  ADD_WORKOUT,
  DELETE_WORKOUT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WORKOUT,
  FILTER_WORKOUT,
  CLEAR_FILTER
} from '../types';

const WorkoutState = props => {
  const initialState = {
    workouts: [
      {
        id: 1,
        workoutday: 'Chest day',
        exercise: 'Bench Press',
        weight: 100,
        sets: 5,
        reps: 10
      },
      {
        id: 2,
        workoutday: 'Leg day',
        exercise: 'Leg Press',
        weight: 180,
        sets: 2,
        reps: 20
      },
      {
        id: 3,
        workoutday: 'Back day',
        exercise: 'Deadlift',
        weight: 220,
        sets: 3,
        reps: 3
      }
    ]
  };

  const [state, dispatch] = useReducer(workoutReducer, initialState);

  // Add workout

  // Delete workout

  // Set current workout

  // Clear current workout

  // Update workout

  // Filter workouts

  // Clear filter

  return (
    <WorkoutContext.Provider
      value={{
        workouts: state.workouts
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutState;
