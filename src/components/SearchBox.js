import * as React from 'react';
import { browserHistory } from 'react-router';
import IconSVG from './IconSVG';
import searchSVG from './../img/search.svg';

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="home-search" onClick={()=>browserHistory.push('search')}>
        <IconSVG iconFile={ searchSVG } className = "icon icon-search-box" />
        <div className="search-box">
          <span>{this.props.placeHolder}</span>
        </div>
      </div>
    );
  }
}