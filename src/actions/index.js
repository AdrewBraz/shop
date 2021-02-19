// @ts-check
import { fetchData, selectDepartment } from '../reducers/storeSlice';
import { modalStateOpen, modalStateClose, addMessage, addError } from '../reducers/appSlice';

export default {
  fetchData,
  modalStateOpen,
  modalStateClose,
  addMessage,
  addError,
  selectDepartment,
};
