import React, { Component } from 'react';

import './../styles/Reviews.css';

export default class Reviews extends Component {
  render() {
    if (this.props.tab !== 'reviews') {
      return null;
    }

    const reviews = this.props.restaurant.tips.groups[0].items;
    const review = reviews[Math.floor(Math.random() * reviews.length)];

    return (
      <div className="restaurant-reviews">
        <h4>Avis</h4>
        <div className="hr" />
        <p>{review.text}</p>
      </div>
    );
  }
}
