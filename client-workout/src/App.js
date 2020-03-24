import React, { Fragment } from 'react';
import './App.css';

import Navbar from './layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Workout from './pages/workout';
import Percentages from './pages/percentages';
import About from './pages/about';
import LoginForm from './pages/login';
import WorkoutState from './context/workout/WorkoutState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import RegisterUser from './components/auth/RegisterUser';
import LoginUser from './components/auth/LoginUser';
import Alerts from './components/layout/Alerts';

function App() {
  return (
    <AuthState>
      <WorkoutState>
        <AlertState>
          <Fragment>
            <BrowserRouter>
              <Navbar />
              <Alerts />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/workout' component={Workout} />
              <Route exact path='/percentages' component={Percentages} />
              <Route exact path='/about' component={About} />
              <Route exact path='/loginform' component={LoginForm} />
              <Route exact path='/register' component={RegisterUser} />
              <Route exact path='/loginuser' component={LoginUser} />
            </BrowserRouter>
          </Fragment>
        </AlertState>
      </WorkoutState>
    </AuthState>
  );
}

export default App;
