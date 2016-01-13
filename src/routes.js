import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';
import User from './components/User';
import Hello from './components/Hello';
import NoMatch from './components/NoMatch';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="user" component={User} />
    <Route path="search" component={Search} />
    {/*<Route path="hello" component={Hello} />*/}
    <Route path="*" component={NoMatch}/>
  </Route>
);