import React, { useReducer } from 'react';
import axios from 'axios';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
  GET_WORKOUTS,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WORKOUT,
  FILTER_WORKOUT,
  CLEAR_FILTER,
  WORKOUT_ERROR,
  CLEAR_WORKOUTS
} from '../types';

const WorkoutState = props => {
  const initialState = {
    workouts: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(workoutReducer, initialState);

  // GET WORKOUT
  const getWorkouts = async () => {
    try {
      const res = await axios.get('/api/workouts');

      dispatch({
        type: GET_WORKOUTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add workout
  const addWorkout = async workout => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/workouts', workout, config);

      dispatch({
        type: ADD_WORKOUT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete workout
  const deleteWorkout = async id => {
    try {
      await axios.delete(`/api/workouts/${id}`);

      dispatch({
        type: DELETE_WORKOUT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update workout
  const updateWorkout = async workout => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/workouts/${workout._id}`,
        workout,
        config
      );

      dispatch({
        type: UPDATE_WORKOUT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear workouts
  const clearWorkouts = () => {
    dispatch({ type: CLEAR_WORKOUTS });
  };

  // Set current workout
  const setCurrent = workout => {
    dispatch({ type: SET_CURRENT, payload: workout });
  };

  // Clear current workout
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        addWorkout,
        deleteWorkout,
        setCurrent,
        clearCurrent,
        updateWorkout,
        filterWorkouts,
        clearFilter,
        getWorkouts,
        clearWorkouts
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutState;
