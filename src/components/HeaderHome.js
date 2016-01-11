import * as React from 'react';
import SearchBox from './SearchBox';
import User from './User';

export default class HeaderHome extends React.Component {
  render() {
    return (
      <header>
        <span className="header-home-logo">范PIN</span>
        <SearchBox />
        <User />
      </header>
    );
  }
}