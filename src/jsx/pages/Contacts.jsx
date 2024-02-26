// import { Helmet } from 'react-helmet';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import AppContainer from '../components/app-container/AppContainer';
import ContactForm from '../components/contact-form/ContactForm';
import SearchBox from '../components/search-box/SearchBox';
import Infinity from '../components/loaders/Infinity/Infinity';
import ContactsList from '../components/contacts-list/ContactsList';
import { SEARCH_LABEL } from '../auxiliary/constants';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Phone book</title>
      </Helmet> */}
      <AppContainer>
        <Toaster />
        <ContactForm />
        <SearchBox>{SEARCH_LABEL}</SearchBox>
        {isLoading && !error && <Infinity isLoading={isLoading} />}
        <ContactsList />
      </AppContainer>
    </>
  );
};

export default Contacts;
