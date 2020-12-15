import { useFormik } from 'formik';
import React from 'react';
import { addMonths, addYears, format } from 'date-fns';
import axios from 'axios';
import { getList } from '../helpers';

export default () => {
  const generateOnSubmit = () => async (values) => {
    const data = {
      from: `${values.fromYear}-${values.fromMonth}`,
      to: `${values.toYear}-${values.toMonth}`,
    };
    console.log(values);
    axios.post('/', data)
      .then(() => console.log('success'))
      .catch(() => console.log('failure'));
  };

  const listOfYears = getList(new Date(2017, 12, 1), addYears, new Date(2020, 1, 1));
  const listOfMonths = getList(new Date(2017, 12, 1), addMonths, new Date(2018, 12, 1));

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: {
    },
  });

  return (
    <form action="/" id="dates" className="form-inline mb-3" method="post" onSubmit={form.handleSubmit}>
      <div className="form-group flex-row w-100">
        <div className="form-group">
          <label htmlFor="yearFrom">choose from year</label>
          <select name="fromYear" id="yearFrom" onChange={form.handleChange}>
            <option value="">Select year</option>
            {listOfYears.map((year) => <option key={`${year}`} value={`${format(year, 'yyyy')}`}>{format(year, 'yyyy')}</option>)}
          </select>
          <label htmlFor="monthFrom">choose from month</label>
          <select name="fromMonth" id="monthFrom" onChange={form.handleChange}>
            <option value="">Select month</option>
            {listOfMonths.map((month) => <option key={`${month}`} value={`${format(month, 'MM-dd')}`}>{format(month, 'MMMM')}</option>)}
          </select>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="yearTo">choose from year</label>
            <select name="toYear" id="yearTo" onChange={form.handleChange}>
              <option value="">Select year</option>
              {listOfYears.map((year) => <option key={`${year}`} value={`${format(year, 'yyyy')}`}>{format(year, 'yyyy')}</option>)}
            </select>
            <label htmlFor="monthTo">choose from month</label>
            <select name="toMonth" id="monthTo" onChange={form.handleChange}>
              <option value="">Select month</option>
              {listOfMonths.map((month) => <option key={`${month}`} value={`${format(month, 'MM-dd')}`}>{format(month, 'MMMM')}</option>)}
            </select>
          </div>
        </div>
        <div className="input-group-prepend">
          <button type="submit" className=" btn btn-primary btn-sm">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
