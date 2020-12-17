import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'store',
  initialState: {vmp:[], groupedCodes: [], total: []},
  reducers: {
    fetchData(state, { payload: { groupedCodes, total, vmp} }) {
      state.groupedCodes = groupedCodes;
      state.total = total;
      state.vmp = vmp
    },
  },
});

export const { fetchData } = store.actions;

export default store.reducer;
