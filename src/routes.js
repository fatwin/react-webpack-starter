import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import SearchBox from './components/SearchBox';
import User from './components/User';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="search" component={SearchBox} />
    <Route path="user" component={User} />
  </Route>
);