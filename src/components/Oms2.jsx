// @ts-check
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddFileForm from './AddFileForm';
import Table from './Table';

const Oms2 = () => {
  const data = useSelector(({ store }) => store.data);
  return (
    <Container>
      <AddFileForm data={data} />
      { data.length === 0 ? null
        : (<Table data={data[0]} />)}
    </Container>
  );
};

export default Oms2;
