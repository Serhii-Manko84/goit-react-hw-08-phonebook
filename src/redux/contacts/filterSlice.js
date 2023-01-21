import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    getFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { getFilterValue } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;
