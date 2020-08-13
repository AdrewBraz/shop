import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import actions from '../actions';

export default (props) => {
  const generateOnSubmit = () => async (values) => {
    const { store } = values;
    try {
      const coll = await axios.get(`/store/${store}`).then(res => res, null)
      console.log(actions.getData)
    } catch (e) {
      console.log(e)
      throw new Error('Something went wrong');
    }
  };

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: { store: 'catch of the day' },
    validateOnBlur: false,
  });


  return (
  <form className="store-selector" onChange={form.handleChange} onSubmit={form.handleSubmit} >
      <h2>Please enter the Store</h2>
      <select name='store' className="store-select">
          <option value="catch of the day" type="submit" >Catch Of The Day </option>
          <option value="beer card" type="submit" >Beer Card </option>
          <option value="king grill" type="submit" >King Of The Grill </option>
      </select>
      <button type="submit" disabled={form.isValidating || form.isSubmitting} className=" btn btn-primary btn-sm">
        {form.isSubmitting ? "Submiting" : "Submit"}
      </button>
  </form>
    
  );
};