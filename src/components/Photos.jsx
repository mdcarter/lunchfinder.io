import React, { Component } from 'react';

import './../styles/Photos.css';

export default class Photos extends Component {
  render() {
    if (!this.props.restaurant.photos || this.props.restaurant.photos.count === 0) {
      return null;
    }

    const photos = this.props.restaurant.photos.groups[0].items.slice(0, 4);
    const remaining = this.props.restaurant.photos.count - 4;

    return (
      <ul className="restaurant-photos">
        {photos.map(function(image, index) {
          const src = `${image.prefix}150x150${image.suffix}`;
          return (
            <li key={index}>
              <img src={src} alt={`${image.firstName} ${image.lastName}`} />
            </li>
          );
        })}
        {remaining > 0 && (
          <li className="remaining">
            <a target="_blank" href={this.props.restaurant.canonicalUrl}>
              +{remaining} photos
            </a>
          </li>
        )}
      </ul>
    );
  }
}
