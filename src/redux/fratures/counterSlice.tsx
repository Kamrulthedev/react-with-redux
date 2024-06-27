import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


type CounterType = {
  count: number
}

const initialState : CounterType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    increment5: (state, actions : PayloadAction<number>) => {
      state.count = state.count + actions.payload ;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    decrement5: (state , actions : PayloadAction<number>) => {
      state.count = state.count - actions.payload;
    },
  },
});



export const {decrement, increment, increment5 , decrement5} = counterSlice.actions;
export default counterSlice.reducer;