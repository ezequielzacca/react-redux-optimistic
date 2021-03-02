import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios from "axios";
import { undo } from '../../app/undo.reducer-enhancer';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    }
  },
});

export const { increment, decrement } = counterSlice.actions;

export const simulateCallServer = () => new Promise<void>((resolve, reject) => {
  //Between 0.5 and 3 second random delay
  const delay = Math.floor((Math.random() * 2.5) + 0.5) * 1000;
  //with 30% chance of failure
  const willFail = Math.random() < 0.3;
  setTimeout(() => {
    if (willFail) {
      reject()
    } else {
      resolve()
    }
  }, delay);
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
