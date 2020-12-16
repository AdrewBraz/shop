import { createSlice } from '@reduxjs/toolkit';

const app = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    modalStateOpen(state){
        state.modal = 'open'
    },
    modalStateClose(state){
        state.modal = 'close'
    },
    stateURL(state, {payload}){
        state.url = payload
    }
  },
});

export const { modalStateOpen, modalStateClose, stateURL } = app.actions;

export default app.reducer;
