import React, { Component } from 'react';
import Actions from './../Actions';

import './../styles/Tabs.css';

export default class Tabs extends Component {
  render() {
    return (
      <nav className="tabs">
        <ul>
          <li className={this.props.tab === 'reviews' ? 'selected' : ''}>
            <a onClick={Actions.selectReviewsTab}>Reviews ({this.props.restaurant.tips.count})</a>
          </li>
          <li className={this.props.tab === 'photos' ? 'selected' : ''}>
            <a onClick={Actions.selectPhotosTab}>Photos</a>
          </li>
        </ul>
      </nav>
    );
  }
}
