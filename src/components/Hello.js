import * as React from 'react';

export default class HelloReact extends React.Component {
  render() {
    return <div>Helloo {this.props.name}!</div>;
  }
}