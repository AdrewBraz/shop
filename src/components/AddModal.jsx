import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import actions from '../actions';
import { listOfMonths, listOfYears, formatter } from '../../helpers';

const AddModal = () => {
    const modal = useSelector(({app}) => app.modal)
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(actions.modalStateClose())
    }

    const generateOnSubmit = () => async (values) => {
        const { excel, month, year } = values;
        console.log(excel)
        const formdata = new FormData()
        formdata.append('excel', excel);
        formdata.append('date', `${year}-${month}`)
        console.log(formdata)
        try{
          await axios.post('/parse', formdata).then(() => console.log('success'));
        } catch (e) {
          throw new Error('Something went wrong');
        }
        dispatch(actions.modalStateClose());
      };

    const form = useFormik({
        onSubmit: generateOnSubmit(),
        initialValues: {},
        validateOnBlur: false,
      });

    return (
        <Modal show={modal !== 'close'} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action='/parse' encType="multipart/form-data" method="post" className="form-inline mb-3" onSubmit={form.handleSubmit}>
          <div className="input-group flex-row w-100">
            <input type="file" name="excel" placeholder='file' onChange={({currentTarget}) => { form.setFieldValue('excel', currentTarget.files[0])}} className="form-control" />
            <div className="input-group-prepend">
              <button type="submit" disabled={form.isValidating || form.isSubmitting} className=" btn btn-primary btn-sm">
                {form.isSubmitting ? <Spinner animation="border" /> : 'Добавить файл'}
              </button>
            </div>
          </div>
          <div className="input-group flex-row w-100">
            <div className="form-group col-md-2">
              <label htmlFor="year">Начало периода</label>
              <select className="form-control" name="year" id="year" onChange={form.handleChange}>
                <option value="">Выберите год</option>
                {listOfYears.map((year) => <option key={`${year}`} value={`${format(year, 'yyyy')}`}>{format(year, 'yyyy')}</option>)}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="month">Начало периода</label>
              <select className="form-control" name="month" id="month" onChange={form.handleChange}>
                <option value="">Выберите месяц</option>
                {listOfMonths.map((month) => <option key={`${month}`} value={`${format(month, 'MM-dd')}`}>{formatter(month)}</option>)}
              </select>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    )
}

export default AddModal;