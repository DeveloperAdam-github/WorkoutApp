import React from 'react';
import WorkoutForm from '../components/workouts/WorkoutForm';

const LoginForm = () => {
  return (
    <div className='container'>
      <div className='login-form-container'>
        <h1>Welcome</h1>
        <p>Log your workout below...</p>
        <br />
        <WorkoutForm />
        <br />
      </div>
    </div>
  );
};

export default LoginForm;
