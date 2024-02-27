import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import AppContainer from './AppContainer/AppContainer.jsx';

import HomePage from '../pages/Home/Home.jsx';
import ContactsPage from '../pages/Contacts.jsx';
import RegisterPage from '../pages/Register.jsx';
import LoginPage from '../pages/Login.jsx';

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
