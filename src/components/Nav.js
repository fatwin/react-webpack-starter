import * as React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="new">新品</Link></li>
          <li><Link to="search">附近</Link></li>
          <li><Link to="experience">体验</Link></li>
          <li><Link to="scene">场景</Link></li>
        </ul>
        {this.props.children}
      </nav>
    );
  }
}