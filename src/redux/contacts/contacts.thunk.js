import { createAsyncThunk } from '@reduxjs/toolkit';

const contactsAPI = axios.create({
  baseURL: 'https://63cd4b0bd4d47898e39634b4.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk(
  'users/fetchAll',
  async (_, thinkAPI) => {
    try {
      const { data } = await contactsAPI.get('/contacts');
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue('error.message');
    }
  }
);
