import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { ERR_404 } from '../../auxiliary/constants';
import styles from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>{ERR_404}</SectionTitle>
    </div>
  );
};
export default NotFoundPage;
