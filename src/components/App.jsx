import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import css from '../components/App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //  componentDidMount() {
  //   const contacts = localStorage.getItem(LOCAL_KEY);
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contacts => contacts.name === name)
      ? alert(`${name}, This user is already in the contact list.`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    console.log(event);
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizFilter)
    );
  };

  return (
    <div className={css.styleApp}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={setFilter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empy." />
      )}
    </div>
  );
};
