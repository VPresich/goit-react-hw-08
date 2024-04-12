import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TITLE, AUTHOR, TOOLS } from '../../auxiliary/constants';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>{TITLE}</SectionTitle>
      <p className={styles.author}>{AUTHOR}</p>
      <span aria-label="IoIosContacts icon">
        <RiContactsBook2Fill className={`${styles.icon} ${styles.large}`} />
      </span>
      <p className="styles.lang">{TOOLS}</p>
    </div>
  );
};
export default Home;
