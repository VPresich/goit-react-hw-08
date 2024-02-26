import { Helmet } from 'react-helmet';
import AppSection from '../components/AppSection/AppSection';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <AppSection>
        <RegisterForm />
      </AppSection>
    </div>
  );
};

export default Register;
