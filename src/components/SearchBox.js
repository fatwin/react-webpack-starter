import * as React from 'react';
import { Link } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

var history = createHistory();

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="header-home-search">
        <Link to="search" className="search-box">
          <span>搜索产品 / 体验店</span>
        </Link>
      </div>
    );
  }
}