import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import App from './components/App';

render(
  <App store={store} history={history} />,
  document.getElementById('app')
);
