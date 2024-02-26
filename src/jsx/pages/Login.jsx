import { Helmet } from 'react-helmet';
import AppSection from '../components/AppSection/AppSection';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AppSection>
        <LoginForm />
      </AppSection>
    </div>
  );
};

export default Login;
