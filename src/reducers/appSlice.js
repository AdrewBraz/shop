// @ts-check
import { createSlice } from '@reduxjs/toolkit';

const app = createSlice({
  name: 'app',
  initialState: {modal: 'close'},
  reducers: {
    modalStateOpen(state) {
      state.modal = 'open';
      return state;
    },
    modalStateClose(state) {
      state.modal = 'close';
      return state;
    }
  },
});

export const { modalStateOpen, modalStateClose } = app.actions;

export default app.reducer;
