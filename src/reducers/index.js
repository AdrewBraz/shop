// @ts-check
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import store from './storeSlice';
import app from './appSlice';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  store,
});
export default createRootReducer;
