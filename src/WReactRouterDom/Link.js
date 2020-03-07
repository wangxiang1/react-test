import React, { Component } from 'react';
import { RouterContext } from './RouterContext';

export default class Link extends Component {

  static contextType = RouterContext;

  handleClick = (e) => {
    e.preventDefault();
    this.context.history.push(this.props.to)
  }

  render() {
    return (
      <a onClick={this.handleClick}>
        {this.props.children}
      </a>
    )
  }
}
