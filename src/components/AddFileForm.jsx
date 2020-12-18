import { useFormik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { format } from 'date-fns';
import axios from 'axios';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import validationSchema from '../validationSchema';
import { listOfMonths, listOfYears } from '../helpers';
import actions from '../actions';

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { groupedCodes } = useSelector(({ store }) => store);
  const generateOnSubmit = () => async (values) => {
    console.log(values);
    const dates = {
      from: `${values.fromYear}-${values.fromMonth}`,
      to: `${values.toYear}-${values.toMonth}`,
    };
    const result = await axios.post(`${location.pathname}`, dates)
      .then(({ data }) => {
        console.log('success');
        return data;
      })
      .catch(() => console.log('failure'));
    dispatch(actions.fetchData(result));
  };

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: {
    },
    validationSchema,
  });

  return (
    <>
      <form action="/" id="dates" className="form-inline mb-3" method="post" onSubmit={form.handleSubmit}>
        <div className="form-group align-items-end justify-content-around flex-row w-100">
          <div className="form-group col-md-2">
            <label htmlFor="yearFrom">Начало периода</label>
            <select className="form-control" name="fromYear" id="yearFrom" onChange={form.handleChange}>
              <option value="">Выберите год</option>
              {listOfYears.map((year) => <option key={`${year}`} value={`${format(year, 'yyyy')}`}>{format(year, 'yyyy')}</option>)}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="monthFrom">Начало периода</label>
            <select className="form-control" name="fromMonth" id="monthFrom" onChange={form.handleChange}>
              <option value="">Выберите месяц</option>
              {listOfMonths.map((month) => <option key={`${month}`} value={`${format(month, 'MM-dd')}`}>{format(month, 'MMMM')}</option>)}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="yearTo">Конец периода</label>
            <select className="form-control" name="toYear" id="yearTo" onChange={form.handleChange}>
              <option value="">Выберите год</option>
              {listOfYears.map((year) => <option key={`${year}`} value={`${format(year, 'yyyy')}`}>{format(year, 'yyyy')}</option>)}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="monthTo">Конец периода</label>
            <select className="form-control" name="toMonth" id="monthTo" onChange={form.handleChange}>
              <option value="">Выберите месяц</option>
              {listOfMonths.map((month) => <option key={`${month}`} value={`${format(month, 'MM-dd')}`}>{format(month, 'MMMM')}</option>)}
            </select>
          </div>
          <div className="input-group-prepend col-md-2">
            <button disabled={form.isValidating || form.isSubmitting} type="submit" className=" btn btn-primary btn-sm">
              Запрос
            </button>
          </div>
          <div className="col-md-2">
            { groupedCodes.length <= 0 ? null : <a download href="/download" className="btn btn-success" role="button">Экспорт в xlsx</a>}
          </div>
        </div>

      </form>
    </>
  );
};
