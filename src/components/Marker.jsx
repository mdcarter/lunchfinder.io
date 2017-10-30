import React, { Component } from 'react';
import Icons from './Icons';

export default class Marker extends Component {
  render() {
    return (
      <div className="marker">
        <Icons name="Marker" />
        <a className="btn go" target="_blank" href={this.props.link}>
          Y aller
        </a>
      </div>
    );
  }
}
