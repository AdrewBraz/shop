import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddFileForm from './AddFileForm';
import Table from './Table';

export default () => {
  const store = useSelector(({ store }) => store);
  const { groupedCodes, vmp, total } = store;
  console.log(vmp, total, groupedCodes);
  return (
    <Container>
      <AddFileForm />
      { groupedCodes.length === 0 ? null : <Table groupedCodes={groupedCodes} vmp={vmp} total={total} />}
    </Container>
  );
};
