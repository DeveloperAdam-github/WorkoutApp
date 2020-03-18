import React, { Fragment } from 'react';
import './App.css';

import Navbar from './layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Workout from './pages/workout';
import Percentages from './pages/percentages';
import About from './pages/about';
import Login from './pages/login';
import WorkoutState from './context/workout/WorkoutState';

function App() {
  return (
    <WorkoutState>
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/workout' component={Workout} />
          <Route exact path='/percentages' component={Percentages} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </BrowserRouter>
      </Fragment>
    </WorkoutState>
  );
}

export default App;
