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
            <ul>
              {reviews.map((review, i) => (
                <li className="review" key={i}>
                  <div className="photo">
                    <img src={review.user.photo.prefix + '100x100' + review.user.photo.suffix} alt={review.user.firstName + ' ' + review.user.lastName} />
                  </div>
                  <section className="main">
                    <header>
                      {review.user.firstName} {review.user.lastName} <span>{new Date(review.createdAt * 1000).toLocaleDateString()}</span>
                    </header>
                    <p>{review.text}</p>
                  </section>
                </li>
              ))}
              <a className="see-more" target="_blank" href={this.props.restaurant.canonicalUrl}>
                see more reviews on Foursquare
              </a>
            </ul>
          </section>
          <section className="photos">
            <h5>Random photos</h5>
            <ul>
              {photos.map((photo, i) => (
                <li className="photo" key={i}>
                  <img src={photo.prefix + '150x150' + photo.suffix} alt={photo.firstName + ' ' + photo.lastName} />
                </li>
              ))}
              <a className="see-more" target="_blank" href={this.props.restaurant.canonicalUrl}>
                see more photos on Foursquare
              </a>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
