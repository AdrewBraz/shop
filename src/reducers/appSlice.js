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
    },
    addMessage(state, { payload }) {
      state.message = payload;
      return state;
    },
    addError(state, { payload }) {
      state.error = payload;
      return state;
    }
  },
});

export const { modalStateOpen, modalStateClose, addMessage, addError } = app.actions;

export default app.reducer;
