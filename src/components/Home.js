import * as React from 'react';
import HeaderHome from './HeaderHome';
import Nav from './Nav';
import Banner from './Banner';
import Recommendations from './Recommendations';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderHome />
        <Nav />
        <Banner />
        <Recommendations />
      </div>
    );
  }
}