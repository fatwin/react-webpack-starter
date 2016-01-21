import * as React from 'react';
import { Link } from 'react-router';
import IconSVG from './IconSVG';
import navBackSVG from './../img/nav-back.svg';
import searchSVG from './../img/search.svg';
import history from './../history';

export default class Search extends React.Component {
  constructor () {
    super();
    this.state = { searchResult: 'no result' };
  }
  
  componentDidMount () {
    this.refs.searchInput.focus();
  }
  
  handleChange(e) {
    this.setState({ searchResult:e.target.value });
  }
  
  render() {
    return (
      <div className="search">
        <div className="nav-back" onClick={() => history.goBack()}>
          <IconSVG iconFile={navBackSVG} />
        </div>
        <div className="search-form">
          <form>
            <input type="text" className="search-input"  ref="searchInput"
                onChange={this.handleChange.bind(this)} />
            <IconSVG iconFile={searchSVG} className="icon icon-search" />
          </form>
        </div>
        <div>
          {this.state.searchResult}
        </div>
      </div>
    );
  }
}