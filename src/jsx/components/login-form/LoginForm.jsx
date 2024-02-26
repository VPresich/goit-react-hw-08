//import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';

import { Formik, Form } from 'formik';
import FormField from '../form-field/FormField';
import CustomButton from '../custom-button/CustomButton';
import {
  INITIAL_LOGIN,
  CAPTION_LOGIN,
  LABEL_EMAIL,
  LABEL_PASSWORD,
} from './constants';
import { FeedbackSchema } from './feedback-schema';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  //const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    //   dispatch(logIn(values));
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_LOGIN}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form} autoComplete="off">
        <div className={styles.info}>
          <FormField type="email" name="email" styles={styles}>
            {LABEL_EMAIL}
          </FormField>
          <FormField type="password" name="password" styles={styles}>
            {LABEL_PASSWORD}
          </FormField>
        </div>
        <CustomButton type="submit">{CAPTION_LOGIN}</CustomButton>
      </Form>
    </Formik>
  );
};
export default LoginForm;
