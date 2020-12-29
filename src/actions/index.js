// @ts-check
import { fetchData, selectDepartment } from '../reducers/storeSlice';
import { modalStateOpen, modalStateClose, stateURL } from '../reducers/appSlice';

export default {
  fetchData,
  modalStateOpen,
  modalStateClose,
  stateURL,
  selectDepartment,
};
