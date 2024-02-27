import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsAdding,
  selectUpdatingItem,
} from '../../redux/contacts/selectors';
import { addContact, updateContact } from '../../redux/contacts/operations';
import { Formik, Form } from 'formik';
import { feedbackSchema } from './feedback-schema';

import {
  INITIAL_CONTACT,
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
  CAPTION_ADDING,
  CAPTION_UPDATE,
  CAPTION_UPDATING,
} from './constants';

import CustomButton from '../CustomButton/CustomButton';
import FormField from '../FormField/FormField';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const isOperation = useSelector(selectIsAdding);
  const isError = useSelector(selectError);
  const updatingItem = useSelector(selectUpdatingItem);
  const buttonCaption = updatingItem ? CAPTION_UPDATE : CAPTION_ADD;
  const buttonCaptionDoing = updatingItem ? CAPTION_UPDATING : CAPTION_ADDING;

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    if (updatingItem) {
      dispatch(updateContact(values));
    } else {
      dispatch(addContact(values));
    }
    !isError && actions.resetForm();
  };

  return (
    <Formik
      initialValues={updatingItem ? updatingItem : INITIAL_CONTACT}
      enableReinitialize={true}
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
          {isOperation && !isError ? buttonCaptionDoing : buttonCaption}
        </CustomButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
