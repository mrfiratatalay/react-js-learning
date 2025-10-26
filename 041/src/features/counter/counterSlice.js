import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    //case "INCREMENT"
    increment: (state) => {
      state.count += 1;
    },

    //case "DECREMENT"
    decrement: (state) => {
      state.count -= 1;
    },

    addByAmount: (state, action) => {
      state.count += action.payload;
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, addByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
