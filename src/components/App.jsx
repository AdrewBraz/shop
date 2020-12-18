import React from 'react';
import { useDispatch } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <div>
          <Link className="btn btn-info" role="button" to="/oms2">OMS 2</Link>
          <Link to="/oms3">OMS 3</Link>
        </div>
      </Jumbotron>
    </div>
  );
};
