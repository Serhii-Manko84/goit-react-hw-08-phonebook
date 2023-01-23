import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactsAPI = axios.create({
  baseURL: 'https://63cd4b0bd4d47898e39634b4.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsAPI.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error.message');
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await contactsAPI.post('', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error.message');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await contactsAPI.delete(`/${id}`);
      // thinkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error.message');
    }
  }
);
