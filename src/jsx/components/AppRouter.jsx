import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import AppContainer from './AppContainer/AppContainer.jsx';

const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts.jsx'));
const RegisterPage = lazy(() => import('../pages/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
