import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddFileForm from './AddFileForm';
import Table from './Table';

const Report = () => {
  const store = useSelector(({ store }) => store);
  const { groupedCodes, vmp, total } = store;
  return (
    <Container>
      <AddFileForm />
      { groupedCodes.length === 0 ? null
        : (<Table groupedCodes={groupedCodes} vmp={vmp} total={total} />)}
    </Container>
  );
};

export default Report;
