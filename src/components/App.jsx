// @ts-check
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">Отчеты из ПУМП по принятым счетам</h1>
      <Container className="mt-5">
        <div className=" d-flex w-25 m-auto flex-row align-items-center justify-content-between">
          <Link className="btn btn-secondary btn-lg" role="button" to="/oms2">ОМС 2</Link>
          <Link className="btn btn-link" role="button" to="/oms3">OМС 3</Link>
        </div>
      </Container>
    </Jumbotron>
  </div>
);

export default App;
