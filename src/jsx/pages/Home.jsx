import TitleSection from '../components/TitleSection/TitleSection';
import { TITLE } from '../auxiliary/constants';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
    </div>
  );
};
export default Home;
