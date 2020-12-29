// @ts-check
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import '../assets/application.scss';
import App from './components/App';
import reducers from './reducers';
import Oms3 from './components/Oms3';
import Oms2 from './components/Oms2';

const store = configureStore({
  reducer: reducers,
});

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path="/oms2" component={Oms2} />
        <Route exact path="/oms3" component={Oms3} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
render(<Root store={store} />, document.getElementById('main'));
