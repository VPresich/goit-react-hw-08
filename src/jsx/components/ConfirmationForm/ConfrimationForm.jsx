import { MSG_QUESTION, CAPTION_OK } from './constants';

import CustomButton from '../CustomButton/CustomButton';
import styles from './ConfirmationForm.module.css';

const ConfirmationForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <p className={styles.question}>{MSG_QUESTION}</p>
      <CustomButton type="submit">{CAPTION_OK}</CustomButton>
    </form>
  );
};
export default ConfirmationForm;
