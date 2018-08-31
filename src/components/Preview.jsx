import React, { Component } from 'react';

import './../styles/Preview.css';

export default class Preview extends Component {
  renderEmpty() {
    return (
      <div className="restaurant-preview">
        <h4>A quick preview…</h4>
        <div className="fallback">
          <p>Sorry, no reviews or photos to show here…</p>
          <span>Maybe it’s a brand new restaurant ? Let’s be patient.. </span>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.tab !== 'reviews') {
      return null;
    }

    const reviews = this.props.restaurant.tips.groups[0].items;
    const photos = this.props.restaurant.photos.groups[1].items;

    console.log(reviews);
    console.log(photos);

    if (photos.length === 0 && reviews.length === 0) {
      return this.renderEmpty();
    }

    return (
      <div className="restaurant-preview">
        <h4>A quick preview…</h4>
        <div className="columns">
          <section className="reviews">
            <h5>Random reviews</h5>
          </section>
          <section className="photos">
            <h5>Random photos</h5>
          </section>
        </div>
      </div>
    );
  }
}
