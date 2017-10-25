import React, { Component } from 'react';

export default class Marker extends Component {
  render() {
    return (
      <div className="marker">
        <div className="icon">X</div>
        <a target="_blank" href={this.props.link}>
          Y aller
        </a>
      </div>
    );
  }
}
