import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsAdding } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form } from 'formik';
import { feedbackSchema } from './feedback-schema';

import {
  INITIAL_CONTACT,
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
  CAPTION_ADDING,
} from './constants';

import CustomButton from '../CustomButton/CustomButton';
import FormField from '../FormField/FormField';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const isOperation = useSelector(selectIsAdding);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    !isError && actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <FormField type="text" name="name" styles={styles}>
            {LABEL_NAME}
          </FormField>
          <FormField type="tel" name="number" styles={styles}>
            {LABEL_PHONE}
          </FormField>
        </div>
        <CustomButton type="submit">
          {isOperation && !isError ? CAPTION_ADDING : CAPTION_ADD}
        </CustomButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
