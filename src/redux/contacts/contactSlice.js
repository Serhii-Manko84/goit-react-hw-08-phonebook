import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactsAPI } from './userApi';

export const getContactsRequest = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const response = await ContactsAPI.getContactsRequest();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
console.log();
// add Contact

export const addContactRequest = createAsyncThunk(
  'contacts/add',
  async (contactData, thunkAPI) => {
    try {
      const response = await ContactsAPI.addContactRequest(contactData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete Contact

export const deleteContactRequest = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await ContactsAPI.deleteContactRequest(contactId);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      // Get Contacts
      .addCase(getContactsRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContactsRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add New Contact
      .addCase(addContactRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [action.payload, ...state.contacts];
      })
      .addCase(addContactRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Contact
      .addCase(deleteContactRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const deleteContactId = action.payload.id;
        state.contacts = state.contacts.filter(
          contact => contact.id !== deleteContactId
        );
      })
      .addCase(deleteContactRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
