import DocumentTitle from '../components/DocumentTitle';
import AppSection from '../components/AppSection/AppSection';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <AppSection>
        <LoginForm />
      </AppSection>
    </>
  );
};

export default Login;
