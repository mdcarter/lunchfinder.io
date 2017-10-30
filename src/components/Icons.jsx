import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    const Icon = require(`../images/icons/Icon${this.props.name}.jsx`).default;
    return <Icon />;
  }
}
