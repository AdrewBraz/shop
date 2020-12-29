// @ts-check
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TableSelector } from '../reducers/storeSlice';
import Table from './Table';
import actions from '../actions';

const Departments = (props) => {
  const allData = useSelector(({ store }) => store.data);
  const data = useSelector(TableSelector);
  const [, list] = allData;
  const departments = list.map((item) => item.ORD_NAME);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(actions.selectDepartment(id));
  };

  return (
    <Accordion>
      {departments.map((item, i) => (
        <Card key={item}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" onClick={() => { handleClick(item); }} eventKey={`${i}`}>
              {item}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${i}`}>
            <Card.Body>
              {data ? <Table data={data} /> : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Departments;
