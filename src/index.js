import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import '../assets/application.scss';
import App from './components/App';
import reducers from './reducers';
import Report from './components/Report';

const store = configureStore({
  reducer: reducers,
});

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path="/oms2" component={Report} />
        <Route exact path="/oms3" component={Report} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
render(<Root store={store} />, document.getElementById('main'));
