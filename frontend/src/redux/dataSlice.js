import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data.js';
const initialState = {
  data: data,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUpdatedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUpdatedData } = dataSlice.actions;
export default dataSlice.reducer;
