import * as React from 'react';
import { Link } from 'react-router';
import IconSVG from './IconSVG';
import navBackSVG from './../img/nav-back.svg';
import searchSVG from './../img/search.svg';
import history from './../history';

export default class Search extends React.Component {
  // Use arrow function instead
  // handleClick() {
  //   history.goBack(); 
  // } 
 
  render() {
    return (
      <div className="search">
        <div className="nav-back" onClick={() => history.goBack()}>
          <IconSVG iconFile={navBackSVG} className="icon" />
        </div>
        <div className="search-form">
          <form>
            <input type="text" className="search-input" />
            <IconSVG iconFile={searchSVG} />
          </form>
        </div>
      </div>
    );
  }
}