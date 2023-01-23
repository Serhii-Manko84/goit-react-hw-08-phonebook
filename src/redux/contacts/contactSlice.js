import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchContacts } from './contacts.thunk';

const initialState = { contacts: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        action.state.error = action.payload;
      })

      // add contact
      .addCase(addNewContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addNewContact.rejected, (state, action) => {
        state.isLoading = false;
        action.state.error = action.payload;
      })

      // delete contact
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (action, state) => {
        action.state.error = action.payload;
      });
  },
});

export const { addContact, deleteOnContact } = contactsSlice.actions;

const contactsReducers = contactsSlice.reducer;
export default contactsReducers;
