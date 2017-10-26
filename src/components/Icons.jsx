import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    const svg = require(`!raw-loader!./../images/icon-${this.props.icon}.svg`);
    return <span dangerouslySetInnerHTML={{ __html: svg }} />;
  }
}
