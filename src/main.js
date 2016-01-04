import './css/style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.js';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);