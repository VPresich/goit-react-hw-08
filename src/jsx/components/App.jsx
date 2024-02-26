// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
// import { fetchContacts } from '../redux/contacts/operations';
// import { selectError, selectIsLoading } from '../redux/contacts/selectors';
// import AppContainer from './app-container/AppContainer';
// import TitleSection from './titlesection/TitleSection';
// import ContactForm from './contact-form/ContactForm';
// import SearchBox from './search-box/SearchBox';
// import Infinity from './loaders/Infinity/Infinity';
// import ContactsList from './contacts-list/ContactsList';
// import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';
// //import RegisterForm from './register-form/RegisterForm';

// const App = () => {
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <AppContainer>
//       <Toaster />
//       <TitleSection>{TITLE}</TitleSection>
//       {/* <RegisterForm/> */}
//       <ContactForm />
//       <SearchBox>{SEARCH_LABEL}</SearchBox>
//       {isLoading && !error && <Infinity isLoading={isLoading} />}
//       <ContactsList />
//     </AppContainer>
//   );
// };

// export default App;

import Home from '../pages/Home';
import Contacts from '../pages/Contacts';

const App = () => {
  return (
    <>
      <Home></Home>
      <Contacts></Contacts>
    </>
  );
};

export default App;
