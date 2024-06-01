import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import styles from './AppContainer.module.css';
export const AppContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Outlet />
      {children}
      <Toaster />
    </div>
  );
};

export default AppContainer;
