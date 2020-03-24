import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WorkoutContext from '../../context/workout/workoutContext';
import WorkoutItem from '../workouts/WorkoutItem';

const Workouts = () => {
  const workoutContext = useContext(WorkoutContext);

  const { workouts, filtered } = workoutContext;

  if (workouts.length === 0) {
    return <h4>Add your first workout</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(workout => (
              <CSSTransition key={workout.id} timeout={500} classNames='item'>
                <WorkoutItem workout={workout} />
              </CSSTransition>
            ))
          : workouts.map(workout => (
              <CSSTransition key={workout.id} timeout={500} classNames='item'>
                <WorkoutItem key={workout.id} workout={workout} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Workouts;
