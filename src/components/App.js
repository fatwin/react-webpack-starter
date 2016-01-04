import * as React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/search">搜索</Link></li>
          <li><Link to="/user">我的</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}