import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
    name: 'currentStore',
    initialState: {},
    reducers: {
        getData(state, { payload }){
          console.log(payload)
        }
    }
})

export const { getData } = store.actions;

export default store.reducer