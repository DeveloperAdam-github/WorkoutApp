import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(workoutReducer, initialState);

  // Add workout
  const addWorkout = workout => {
    workout.id = uuidv4();
    dispatch({ type: ADD_WORKOUT, payload: workout });
  };

  // Delete workout
  const deleteWorkout = id => {
    dispatch({ type: DELETE_WORKOUT, payload: id });
  };

  // Set current workout
  const setCurrent = workout => {
    dispatch({ type: SET_CURRENT, payload: workout });
  };

  // Clear current workout
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update workout
  const updateWorkout = workout => {
    dispatch({ type: UPDATE_WORKOUT, payload: workout });
  };

  // Filter workouts
  const filterWorkouts = text => {
    dispatch({ type: FILTER_WORKOUT, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts: state.workouts,
        current: state.current,
        filtered: state.filtered,
        addWorkout,
        deleteWorkout,
        setCurrent,
        clearCurrent,
        updateWorkout,
        filterWorkouts,
        clearFilter
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutState;
