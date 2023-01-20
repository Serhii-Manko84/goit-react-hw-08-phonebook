import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export function ContactList({ onDeleteContact }) {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactID={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
