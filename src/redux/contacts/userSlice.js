import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from './userApi';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const userReducer = userSlice.reducer;
export default userReducer;
