import * as React from 'react';
import SearchBox from './SearchBox';
import User from './User';

export default class HeaderHome extends React.Component {
  render() {
    return (
      <header>
        <div className="header-home-logo">
          <span>范PIN</span>
        </div>
        <SearchBox />
        <User />
      </header>
    );
  }
}