import { useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import WorkoutContext from '../../context/workout/workoutContext';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const authContext = useContext(AuthContext);
  const workoutContext = useContext(WorkoutContext);

  const { logout } = authContext;
  const { clearWorkouts } = workoutContext;

  const onLogout = () => {
    logout();
    clearWorkouts();
  };

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    onLogout
  };
};

export default useModal;
