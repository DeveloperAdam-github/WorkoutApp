import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WorkoutContext from '../../context/workout/workoutContext';
import WorkoutItem from '../workouts/WorkoutItem';
import Spinner from '../../layout/Spinner';

const Workouts = () => {
  const workoutContext = useContext(WorkoutContext);

  const { workouts, filtered, getWorkouts, loading } = workoutContext;

  useEffect(() => {
    getWorkouts();
    // eslint-disable-next-line
  }, []);

  if (workouts !== null && workouts.length === 0 && !loading) {
    return <h4>Add your first workout</h4>;
  }

  return (
    <Fragment>
      {workouts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(workout => (
                <CSSTransition
                  key={workout._id}
                  timeout={500}
                  classNames='item'
                >
                  <WorkoutItem workout={workout} />
                </CSSTransition>
              ))
            : workouts.map(workout => (
                <CSSTransition
                  key={workout._id}
                  timeout={500}
                  classNames='item'
                >
                  <WorkoutItem workout={workout} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Workouts;
