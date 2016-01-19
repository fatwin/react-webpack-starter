import './css/style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.js';
import history from './history';

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);