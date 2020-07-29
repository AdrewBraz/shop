import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

export default (props) => {
  const history = useHistory();
  console.log(props)
  const goToStore = (values) => {
    const { store } = values;
    history.push(`/${store}`);
    this.context.router.transitionTo(`/store/${value}`)
  };

  const generateOnSubmit = () => async (values) => {
    const { store } = values;
    history.push(`/${store}`);
    const { name } = values;
    try {
      this.context.router.transitionTo(`/store/${value}`)
    } catch (e) {
      throw new Error('Something went wrong');
    }
  };

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: { name: '' },
    validateOnBlur: false,
  });


  return (
  <form className="store-selector" onSubmit={form.handleSubmit} >
      <h2>Please enter the Store</h2>
      <select className="store-select">
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
