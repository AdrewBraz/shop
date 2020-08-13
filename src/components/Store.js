import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

export default (props) => {
  const history = useHistory();
  const { slug } = useParams();
  const generateOnSubmit = () => async (values) => {
    const { store } = values;
    try {
      const coll = await axios.get(`/store/${store}`).then(res => res, null)
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
