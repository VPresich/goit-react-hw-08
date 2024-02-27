import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import styles from './AppContainer.module.css';
export const AppContainer = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};

export default AppContainer;
