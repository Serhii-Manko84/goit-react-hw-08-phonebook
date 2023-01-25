import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsRequest } from 'redux/contacts/contactSlice';

function ContactsPage() {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contscts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);
  const userData = useSelector(state => state.user.userData);
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  // );

  useEffect(() => {
    if (userData === null) return;
    dispatch(getContactsRequest());
  }, [userData, dispatch]);
  return (
    <>
      <div>ContactsPage</div>;
      <ul>
        {/* {isLoading && <Loader />}
        {filteredContacts.length === 0 && (
          <Message text="Contact list is empy." />
        )}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <li className={css.item} key={id}>
                <Contact name={name} number={number} id={id} />
              </li>
            );
          })} */}
      </ul>
    </>
  );
}

export default ContactsPage;
