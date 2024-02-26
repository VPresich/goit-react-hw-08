//import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';

import { Formik, Form } from 'formik';
import FormField from '../form-field/FormField';
import CustomButton from '../custom-button/CustomButton';
import {
  INITIAL_REGISTER,
  CAPTION_REGISTER,
  LABEL_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
} from './constants';
import { FeedbackSchema } from './feedback-schema';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  //const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    //   dispatch(register(values));
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_REGISTER}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form} autoComplete="off">
        <div className={styles.info}>
          <FormField type="text" name="name" styles={styles}>
            {LABEL_NAME}
          </FormField>
          <FormField type="email" name="email" styles={styles}>
            {LABEL_EMAIL}
          </FormField>
          <FormField type="password" name="password" styles={styles}>
            {LABEL_PASSWORD}
          </FormField>
        </div>
        <CustomButton type="submit">{CAPTION_REGISTER}</CustomButton>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
