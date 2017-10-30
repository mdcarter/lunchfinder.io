import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    const name = this.props.name ? this.props.name : 'Default';
    const Icon = require(`../images/icons/Icon${name}.jsx`).default;
    return <Icon />;
  }
}
