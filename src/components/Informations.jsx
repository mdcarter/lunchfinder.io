import React, { Component } from 'react';
import Actions from './../Actions';
import Icons from './Icons';

import './../styles/Informations.css';

export default class Informations extends Component {
  render() {
    let image = '/default';
    if (this.props.restaurant.bestPhoto && this.props.restaurant.bestPhoto.prefix && this.props.restaurant.bestPhoto.suffix) {
      image = `${this.props.restaurant.bestPhoto.prefix}120x120${this.props.restaurant.bestPhoto.suffix}`;
    }

    return (
      <section className="restaurant">
        <header>
          <h3>Votre restaurant du jour</h3>

          <section className="title">
            <img src={image} alt={this.props.restaurant.name} />
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
                <Icons icon="distance" />
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
              {this.props.retrievingLocation ? 'chargement...' : 'Y aller'}
            </a>
            <button className="btn" onClick={Actions.excludeCurrentCategory}>
              {this.props.retrievingLocation ? 'chargement...' : 'Pas ce type de cuisine'}
            </button>
            {this.props.radius > process.env.REACT_APP_MINIMUM_RADIUS && (
              <button className="btn" onClick={Actions.reduceSearchRadius}>
                {this.props.retrievingLocation ? 'chargement...' : 'Moins loin de moi'}
              </button>
            )}
            <button className="btn" onClick={Actions.selectRestaurant}>
              {this.props.retrievingLocation ? 'chargement...' : 'Pas ce restaurant'}
            </button>
          </div>
        </header>

        {this.props.excludedCategories.length !== 0 && (
          <div style={{ marginTop: '40px' }}>
            DEBUG : Catégories exclues ({this.props.excludedCategories.length}) :
            {this.props.excludedCategories.map((category, i) => <span key={category.id}>{category.name}, </span>)}
          </div>
        )}
      </section>
    );
  }
}
