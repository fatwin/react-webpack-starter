import * as React from 'react';
import IconSVG from './IconSVG';
import searchSVG from './../img/search.svg';
import history from './../history';

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="home-search" onClick={() => history.pushState(null, 'search')}>
        <IconSVG iconFile={searchSVG} className="icon icon-search-box" />
        <div className="search-box">
          <span>{this.props.placeHolder}</span>
        </div>
      </div>
    );
  }
}