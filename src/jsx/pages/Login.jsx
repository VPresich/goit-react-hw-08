import { Helmet } from 'react-helmet';
import AppContainer from '../components/app-container/AppContainer';
import { LoginForm } from '../../jsx/components/login-form/LoginForm';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AppContainer>
        <LoginForm />
      </AppContainer>
    </div>
  );
};

export default Login;
