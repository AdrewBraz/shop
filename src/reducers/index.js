import { reducer as formReducer } from 'redux-form';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  form: formReducer,
});
