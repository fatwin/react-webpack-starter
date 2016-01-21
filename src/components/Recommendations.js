import * as React from 'react';
import Product from './Product';

export default class Recommendations extends React.Component {
  render() {
    return (
      <div>
        <Product />
        <div>A product.</div>
        <div>A store.</div>
      </div>
    );
  }
}