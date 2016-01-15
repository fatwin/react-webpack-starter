import * as React from 'react';
import { Link } from 'react-router';
import IconSVG from './IconSVG';
import searchSVG from './../img/search.svg';

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="header-home-search">
        <IconSVG iconFile={searchSVG} className="icon-search" />
        <Link to="search" className="search-box">
          <span>{this.props.placeHolder}</span>
        </Link>
      </div>
    );
  }
}