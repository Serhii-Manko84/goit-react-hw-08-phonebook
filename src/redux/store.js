import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contactSlice';
import filterReducer from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});

//
