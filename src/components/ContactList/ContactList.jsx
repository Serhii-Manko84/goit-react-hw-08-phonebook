import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

import css from '../ContactList/ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} number={number} contactID={id} />
          </li>
        );
      })}
    </ul>
  );
}
