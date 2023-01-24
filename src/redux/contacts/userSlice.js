import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const registerThunk = createAsyncThunk(
//   'user/register',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await userAPI.register(formData);
//       console.log(response);
//     } catch (error) {}
//   }
// );

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
});

const userReducer = userSlice.reducer;
export default userReducer;
