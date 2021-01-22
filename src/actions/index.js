// @ts-check
import { fetchData, selectDepartment } from '../reducers/storeSlice';
import { modalStateOpen, modalStateClose } from '../reducers/appSlice';

export default {
  fetchData,
  modalStateOpen,
  modalStateClose,
  selectDepartment,
};
