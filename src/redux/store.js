import { configureStore } from '@reduxjs/toolkit';
import contactsReducers, { contactsReducer } from './contacts/contactSlice';
import filterReducer from './contacts/filterSlice';
import userReducer from './contacts/userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
    user: userReducer,
    phonebook: contactsReducer,
  },
});
