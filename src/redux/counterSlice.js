import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterApp",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, data) => {
      if (!data.payload) {
        state.value = state.value + 1;
      } else {
        state.value = state.value + data.payload;
      }
    },
    decrement: (state, data) => {
      if (!data.payload) {
        state.value = state.value - 1;
      } else {
        state.value -= data.payload;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
