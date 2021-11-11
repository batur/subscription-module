import { createSlice } from '@reduxjs/toolkit';
import { date } from 'lib';

const initialState = { date: date.DateToStringWithFormat(date.now(), 'dd-MM-yyyy') };

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
