import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    fetchData(state, { payload }){
      console.log(payload)
      state.groupedData = payload;
    }
  },
});

export const { fetchData } = store.actions;

export default store.reducer;
