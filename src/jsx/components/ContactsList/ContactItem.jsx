import { useDispatch, useSelector } from 'react-redux';
import {
  selectDeletingItem,
  selectUpdatingItem,
  selectError,
} from '../../redux/contacts/selectors.js';
import {
  deleteContact,
  saveUpdatingItemIndex,
} from '../../redux/contacts/operations.js';
import { FaUser, FaPhone } from 'react-icons/fa';
import CustomButton from '../CustomButton/CustomButton.jsx';
import {
  CAPTION_DELETE,
  CAPTION_DELETEING,
  CAPTION_EDITING,
  CAPTION_EDIT,
} from './constants.js';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const isError = useSelector(selectError);
  const isOperationDel = useSelector(selectDeletingItem) === id;
  const isOperationUpdate = useSelector(selectUpdatingItem) === id;
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  const handleEditItem = () => {
    dispatch(saveUpdatingItemIndex(id));
  };

  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <div className={styles.buttons}>
        <CustomButton onClick={handleDeleteItem} type={'button'}>
          {isOperationDel && !isError ? CAPTION_DELETEING : CAPTION_DELETE}
        </CustomButton>
        <CustomButton onClick={handleEditItem} type={'button'}>
          {isOperationUpdate && !isError ? CAPTION_EDITING : CAPTION_EDIT}
        </CustomButton>
      </div>
    </>
  );
};

export default ContactItem;
