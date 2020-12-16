import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import actions from '../actions';

export default (props) => {
  const dispatch = useDispatch();
  const { modal } = useSelector(({ app }) => app);

  const handleOpenModal = () => {
    dispatch(actions.modalStateOpen);
  };

  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <div>
          <Button size="lg" variant="info">
            <Link to="/oms2">OMS 2</Link>
          </Button>
          <Button size="lg" variant="info">
            <Link to="/oms3">OMS 3</Link>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};
