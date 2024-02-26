import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts/contactsSlice';
import { filtersReducer } from '../redux/filters/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
