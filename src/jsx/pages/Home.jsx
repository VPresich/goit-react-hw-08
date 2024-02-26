import SectionTitle from '../components/SectionTitle/SectionTitle';
import { TITLE } from '../auxiliary/constants';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>{TITLE}</SectionTitle>
    </div>
  );
};
export default Home;
