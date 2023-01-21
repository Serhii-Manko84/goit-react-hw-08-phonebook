import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contact list`);
      }

      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducers = contactsSlice.reducer;
export default contactsReducers;
