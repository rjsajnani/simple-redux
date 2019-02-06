import React from 'react';
import {render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import reducer from './reducers';
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );