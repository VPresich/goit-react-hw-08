import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './AppRouter';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import AppContainer from './AppContainer/AppContainer.jsx';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppContainer>
      {isRefreshing ? <b>Refreshing user... </b> : <AppRouter />}
    </AppContainer>
  );
};

export default App;
