import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './AppRouter';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <b>Refreshing user... </b> : <AppRouter />;
};

export default App;
