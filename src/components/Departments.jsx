// @ts-check
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { uniqBy } from 'lodash';
import { TableSelector } from '../reducers/storeSlice';
import Table from './Table';
import actions from '../actions';

const Departments = (props) => {
  const list = useSelector(({ store }) => store.data);
  const department = useSelector(({ store }) => store.department);
  const data = useSelector(TableSelector);
  const departments = uniqBy(list, 'ORD_NAME').map((item) => item.ORD_NAME);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(actions.selectDepartment(id));
  };

  return (
    <Accordion>
      {departments.map((item, i) => (
        <Card key={item}>
          <Accordion.Toggle as={Card.Header} variant="link" onClick={() => { handleClick(item); }} eventKey={`${i}`}>
            {item}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${i}`}>
            <Card.Body>
              {data && department === item ? <Table data={data} /> : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Departments;
