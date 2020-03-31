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

export default (state, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
        loading: false
      };
    case ADD_WORKOUT:
      console.log('Payload: ', action);
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        loading: false
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.map(workout =>
          workout.id === action.payload.id ? action.payload : workout
        ),
        loading: false
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          workout => workout.id !== action.payload
        ),
        loading: false
      };
    case CLEAR_WORKOUTS:
      return {
        ...state,
        workouts: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_WORKOUT:
      return {
        ...state,
        filtered: state.workouts.filter(workout => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            workout.exercise.match(regex) || workout.workoutday.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case WORKOUT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
