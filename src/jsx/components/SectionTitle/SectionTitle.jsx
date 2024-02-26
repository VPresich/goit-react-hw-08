import styles from './SectionTitle.module.css';

const TitleSection = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default TitleSection;
