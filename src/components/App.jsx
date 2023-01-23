import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.thunk';

import css from '../components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.styleApp}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
