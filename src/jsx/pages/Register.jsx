import { Helmet } from 'react-helmet';
import AppContainer from '../components/app-container/AppContainer';
import { RegisterForm } from '../../jsx/components/register-form/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <AppContainer>
        <RegisterForm />
      </AppContainer>
    </div>
  );
};

export default Register;
