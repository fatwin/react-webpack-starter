import * as React from 'react';
import IconSVG from './IconSVG';
import loginSVG from './../img/login.svg';

export default class User extends React.Component {
  render() {
    return (
      <div className="home-user">
        <IconSVG iconFile={loginSVG} className="icon" />
      </div>
    );
  }
}