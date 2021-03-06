// @ts-check
import React from 'react';
import { useEffect } from 'react';
import { Jumbotron, Container, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../assets/lg.svg';
import AddModal from './AddModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const { errorText, errorStatus, messageText, messageStatus } = useSelector(({ app }) => app);
  console.log(messageText)
  const openModal = () => {
    dispatch(actions.modalStateOpen())
  }

  useEffect(() => {
    if(errorStatus){
      const timer = setTimeout(() => {
        dispatch(actions.removeError())
      }, 2500);
      return () => clearTimeout(timer)
    }
  }, [errorStatus])
  useEffect(() => {
    if(messageStatus){
      const timer = setTimeout(() => {
        dispatch(actions.removeMessage())
      }, 2500);
      return () => clearTimeout(timer)
    }
  }, [messageStatus])
  return (
    <>
      <Container>
        <Jumbotron className="bg-white d-flex align-items-center flex-column p-2">
          <Link to="/">
            <Icon style={{ width: '100px', height: '100px' }} />
          </Link>
          <h1 className="text-center">Отчеты из ПУМП по принятым счетам</h1>
          <Container className="mt-5">
            <div className=" d-flex w-50 m-auto flex-row align-items-center justify-content-between">
              {/* <Link aria-disabled className="btn btn-info btn-lg" role="button" to="/oms1">ОМС 1</Link> */}
              <Link className="btn btn-info btn-lg" role="button" to="/oms2">ОМС 2</Link>
              <Link className="btn btn-info btn-lg" role="button" to="/oms3">OМС 3</Link>
              <Button onClick={() => { openModal()}}>Добавить</Button>
            </div>
          </Container>
        </Jumbotron>
      </Container>
      <Container>
        <AddModal />
        <Alert variant='danger' show={errorStatus}>{errorText}</Alert>
        <Alert variant='info' show={messageStatus}>{messageText}</Alert>
      </Container>
    </>
  )
}

export default App;
