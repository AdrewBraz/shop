import React from 'react';
import { useDispatch } from 'react-redux';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Jumbotron>
        <h1>Отчеты из ПУМП по принятым счетам</h1>
        <Container className="mt-5">
          <div className=" d-flex w-25 flex-row align-items-center justify-content-between">
            <Link className="btn btn-info" role="button" to="/oms2">OMS 2</Link>
            <Link className="btn btn-info" disabled role="button" to="/oms3">OMS 3</Link>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};
