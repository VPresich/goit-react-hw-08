import AppContainer from '../components/app-container/AppContainer';
import TitleSection from '../components/titlesection/TitleSection';
import { TITLE } from '../auxiliary/constants';

const Home = () => {
  return (
    <AppContainer>
      <TitleSection>{TITLE}</TitleSection>
    </AppContainer>
  );
};
export default Home;
