import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/contactSlice';

import css from '../components/App.module.css';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {};

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    dispatch(deleteContactAction(contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizFilter)
    );
  };

  return (
    <div className={css.styleApp}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filterContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empy." />
      )}
    </div>
  );
};
