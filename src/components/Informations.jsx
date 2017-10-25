import React, { Component } from 'react';
import Actions from './../Actions';

import './../styles/Informations.css';

export default class Informations extends Component {
  render() {
    return (
      <section className="restaurant">
        <header>
          <h3>Votre restaurant du jour</h3>

          <section className="title">
            <img src="" alt={this.props.restaurant.name} />
            <div className="subtitle">
              <h2>{this.props.restaurant.name}</h2>
              {this.props.restaurant.rating && (
                <span className="rating">
                  <strong>★ {this.props.restaurant.rating}/10</strong> ({this.props.restaurant.ratingSignals} avis)
                </span>
              )}
            </div>
          </section>

          <ul className="informations">
            <li>
              {this.props.restaurant.distance && <span>{this.props.restaurant.distance} - </span>}
              {this.props.restaurant.location.address}
            </li>
            {this.props.restaurant.duration && <li>{this.props.restaurant.duration} à pied</li>}
            {this.props.restaurant.contact &&
              this.props.restaurant.contact.phone && (
                <li>
                  <a href={`tel:${this.props.restaurant.contact.phone}`}>{this.props.restaurant.contact.phone}</a>
                </li>
              )}
            <li>{this.props.restaurant.categories[0].name}</li>
            {this.props.restaurant.duration && (
              <li>
                <a href={this.props.restaurant.url}>{this.props.restaurant.url}</a>
              </li>
            )}
          </ul>

          <div className="actions">
            <a target="_blank" href={this.props.restaurant.directions}>
              Y aller
            </a>
            <button onClick={Actions.getRestaurant}>Pas ce type de cuisine</button>
            {this.props.radius > process.env.REACT_APP_MINIMUM_RADIUS && <button onClick={Actions.reduceSearchRadius}>Moins loin de moi</button>}
            <button onClick={Actions.selectRestaurant}>Pas ce restaurant</button>
          </div>
        </header>
      </section>
    );
  }
}
