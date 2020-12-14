import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import actions from '../actions';

import AddFileForm from './AddFileForm'

export default (props) => {
  const dispatch = useDispatch();
  const generateOnSubmit = () => async (values) => {
    const { store } = values;
    const {data} = await axios.get(`/store/${store}`).then(res => res, null)
    dispatch(actions.getData(data))
  };

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: { store: 'catch of the day' },
    validateOnBlur: false,
  });


  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <AddFileForm />
    </div>
  );
};