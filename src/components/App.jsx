// @ts-check
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../assets/lg.svg';


const App = () => (
  <Container>
    <Jumbotron className="bg-white d-flex align-items-center flex-column p-2">
      <Link to="/">
        <Icon style={{width: '100px', height: '100px'}} />
      </Link>
      <h1 className="text-center">Отчеты из ПУМП по принятым счетам</h1>
      <Container className="mt-5">
        <div className=" d-flex w-25 m-auto flex-row align-items-center justify-content-between">
          <Link className="btn btn-info btn-lg" role="button" to="/oms2">ОМС 2</Link>
          <Link className="btn btn-info btn-lg" role="button" to="/oms3">OМС 3</Link>
        </div>
      </Container>
    </Jumbotron>
  </Container>
);

export default App;
