import { combineReducers } from '@reduxjs/toolkit';
import store from './storeSlice';
import app from './appSlice';

export default combineReducers({
  store,
  app
});
