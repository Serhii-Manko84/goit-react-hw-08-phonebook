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
const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => builder,
  //   // Register
  //   .addCase(loginUserRequest.pending, (state, action) => {
  //     state.isLoading = true;
  //     state.error = null;
  //   })
  //   .addCase(loginUserRequest.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.userData = action.payload.user;
  //     state.token = action.payload.token;
  //   })
  //   .addCase(loginUserRequest.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   }),
});
export const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
