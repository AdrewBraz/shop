// @ts-check
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddFileForm from './AddFileForm';
import Departments from './Departments';

const Report = () => {
  const data = useSelector(({ store }) => store.data);
  return (
    <Container>
      <AddFileForm data={data} />
      { data.length === 0 ? null
        : (<Departments />)}
    </Container>
  );
};

export default Report;
