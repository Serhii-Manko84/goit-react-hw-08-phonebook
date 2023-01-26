import Loader from 'components/Loader/Loader';
import { Message } from 'components/Message/Message';
import { ContactForm } from 'components/ContactForm/ContactForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactRequest,
  getContactsRequest,
} from 'redux/contacts/contactSlice';

import css from './ContactsPage.module.css';

function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (userData === null) return;
    dispatch(getContactsRequest());
  }, [userData, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactRequest(contactId));
  };
  return (
    <>
      <ul>
        {isLoading && <Loader />}
        {error && <p>error={error}</p>}
        <ContactForm />
        {Array.isArray(contacts) && contacts.length === 0 && (
          <Message text="Contact list is empy." />
        )}
        {Array.isArray(contacts) &&
          contacts.map(({ id, name, number }) => {
            return (
              <li className={css.item} key={id}>
                <h3>{name}</h3>
                <p>{number}</p>
                <button
                  disabled={isLoading}
                  type="submit"
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  Delete Contact
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ContactsPage;
