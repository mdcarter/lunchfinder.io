import React, { Component } from 'react';
import Actions from './../Actions';
import Icons from './Icons';

import './../styles/Informations.css';

export default class Informations extends Component {
  render() {
    console.log(this.props.restaurant);

    return (
      <section className="restaurant">
        <header>
          <h3>Votre restaurant du jour</h3>

          <section className="title">
            <img src={`${this.props.restaurant.bestPhoto.prefix}120x120${this.props.restaurant.bestPhoto.suffix}`} alt={this.props.restaurant.name} />
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
            {this.props.restaurant.location && (
              <li>
                <Icons name="distance" />
                {this.props.restaurant.distance && <span>{this.props.restaurant.distance} - </span>}
                {this.props.restaurant.location.address}
              </li>
            )}

            {this.props.restaurant.duration && (
              <li>
                <Icons name="duration" />
                {this.props.restaurant.duration} à pieds
              </li>
            )}

            {this.props.restaurant.hours && (
              <li>
                <Icons name="hours" />
                {this.props.restaurant.hours.status}
              </li>
            )}

            {this.props.restaurant.contact &&
              this.props.restaurant.contact.phone && (
                <li>
                  <Icons name="phone" />
                  <a href={`tel:${this.props.restaurant.contact.phone}`}>{this.props.restaurant.contact.phone}</a>
                </li>
              )}

            {this.props.restaurant.categories &&
              this.props.restaurant.categories[0] && (
                <li>
                  <Icons name="category" />
                  {this.props.restaurant.categories[0].name}
                </li>
              )}

            {this.props.restaurant.url && (
              <li>
                <Icons name="url" />
                <a href={this.props.restaurant.url}>{this.props.restaurant.url}</a>
              </li>
            )}
          </ul>

          <div className="actions">
            <a className="btn go" target="_blank" href={this.props.restaurant.directions}>
              Y aller
            </a>
            <button className="btn" onClick={Actions.getRestaurant}>
              Pas ce type de cuisine
            </button>
            {this.props.radius > process.env.REACT_APP_MINIMUM_RADIUS && (
              <button className="btn" onClick={Actions.reduceSearchRadius}>
                Moins loin de moi
              </button>
            )}
            <button className="btn" onClick={Actions.selectRestaurant}>
              Pas ce restaurant
            </button>
          </div>
        </header>
      </section>
    );
  }
}
