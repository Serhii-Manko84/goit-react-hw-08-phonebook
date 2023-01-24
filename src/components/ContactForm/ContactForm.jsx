import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts.thunk';
import { selectContacts } from 'redux/contacts/selectors';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const { name, number } = formData;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      return alert(`${formData.name} already in your contacts list`);
    }

    dispatch(addNewContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.title}>Name</span>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.title}>Number</span>
        <input
          className={css.input}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
