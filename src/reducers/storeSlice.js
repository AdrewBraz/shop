// @ts-check
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';
import { orderBy } from 'lodash';

const store = createSlice({
  name: 'store',
  initialState: { data: [], department: '' },
  reducers: {
    fetchData(state, { payload }) {
      state.data = payload;
      return state;
    },
    selectDepartment(state, { payload }) {
      state.department = payload;
      return state;
    },
  },
  extraReducers: {
    [LOCATION_CHANGE](state) {
      state.data = [];
    },
  },
});

const getData = ({ store }) => store.data;
const getDepartment = ({ store }) => store.department;

export const TableSelector = createSelector([getData, getDepartment],
  (data, department) => {
    const filteredData = data.filter((item) => item.ORD_NAME === department);
    return orderBy(filteredData, 'COD');
  });

export const { fetchData, selectDepartment } = store.actions;

export default store.reducer;
