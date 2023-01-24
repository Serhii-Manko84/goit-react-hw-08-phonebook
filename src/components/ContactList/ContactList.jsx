import { Contact } from 'components/Contact/Contact';
import { selectFilter } from 'components/Filter/selectors';
import Loader from 'components/Loader/Loader';
import { Message } from 'components/Message/Message';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

import css from '../ContactList/ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {isLoading && <Loader />}
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
        })}
    </ul>
  );
}
