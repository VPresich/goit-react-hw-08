import DocumentTitle from '../components/DocumentTitle';
import AppSection from '../components/AppSection/AppSection';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <DocumentTitle>Register</DocumentTitle>
      <AppSection>
        <RegisterForm />
      </AppSection>
    </div>
  );
};

export default Register;
