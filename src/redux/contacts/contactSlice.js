import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addNewContact, fetchContacts } from './contacts.thunk';

const initialState = { contacts: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
});

extraReducers: builder => {
  builder
    .addCase(fetchContacts.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload.data;
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
      action.contacts = action.payload.data;
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
      action.contacts = action.contacts.payload;
    })
    .addCase(deleteContact.rejected, (action, state) => {
      action.state.error = action.payload;
    });
};

//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         if (
//           state.contacts.some(
//             contact =>
//               contact.name.toLowerCase() === action.payload.name.toLowerCase()
//           )
//         ) {
//           return alert(`${action.payload.name} is already in contact list`);
//         }

//         state.contacts.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return { payload: { name, number, id: nanoid() } };
//       },
//     },

//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload.id
//       );
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// const contactsReducers = contactsSlice.reducer;
// export default contactsReducers;
