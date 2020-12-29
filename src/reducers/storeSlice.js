// @ts-check
import { createSlice, createSelector } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'store',
  initialState: { data: [], department: '' },
  reducers: {
    fetchData(state, { payload }) {
      payload.forEach((item) => {
        state.data.push(item);
      });
      return state;
    },
    selectDepartment(state, { payload }) {
      state.department = payload;
      return state;
    },
  },
});

const getData = ({ store }) => store.data[0];
const getDepartment = ({ store }) => store.department;

export const TableSelector = createSelector([getData, getDepartment],
  (data, department) => data.filter((item) => item.ORD_NAME === department));

export const { fetchData, selectDepartment } = store.actions;

export default store.reducer;
