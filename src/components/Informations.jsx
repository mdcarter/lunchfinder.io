import React, { Component } from 'react';
import History from './../History';
import Actions from './../Actions';
import Icons from './Icons';
import Logo from './Logo';

import './../styles/Informations.css';

export default class Informations extends Component {
  render() {
    return (
      <header className="restaurant-header">
        <a className="logo" onClick={() => History.push(`/`)}>
          <Logo black="true" />
        </a>
        <h3>Your restaurant for today</h3>

        <section className="details">
          <h2>{this.props.restaurant.name}</h2>
          {this.props.restaurant.rating && (
            <div className="rating-block">
              ★ {this.props.restaurant.ratingSignals} reviews{' '}
              <span className="rating">
                {this.props.restaurant.rating}
                <sup>/10</sup>
              </span>
            </div>
          )}
          <ul>
            {this.props.restaurant.categories && this.props.restaurant.categories[0] && <li>{this.props.restaurant.categories[0].name}</li>}
            {this.props.restaurant.price && <li>{this.props.restaurant.price.currency.repeat(this.props.restaurant.price.tier)}</li>}
            {this.props.restaurant.contact &&
              this.props.restaurant.contact.phone && (
                <li>
                  <a href={`tel:${this.props.restaurant.contact.phone}`}>{this.props.restaurant.contact.phone}</a>
                </li>
              )}
            {this.props.restaurant.url && (
              <li>
                <a href={this.props.restaurant.url}>{this.props.restaurant.url}</a>
              </li>
            )}
            {this.props.restaurant.hours && <li>{this.props.restaurant.hours.status}</li>}
          </ul>
        </section>

        <ul className="distance">
          {this.props.restaurant.location && (
            <li className="distance-block">
              <Icons name="Distance" /> {this.props.restaurant.location.address}
              {this.props.restaurant.distance && <span> - {this.props.restaurant.distance} from you</span>}
            </li>
          )}
          {this.props.restaurant.duration && (
            <li className="duration-block">
              <Icons name="Duration" /> {this.props.restaurant.duration}
            </li>
          )}
        </ul>

        <div className="actions">
          <a className={this.props.retrievingLocation ? 'btn btn-loading go' : 'btn go'} target="_blank" href={this.props.restaurant.directions}>
            {this.props.retrievingLocation ? 'Loading...' : 'Go !'}
          </a>
          <button className={this.props.retrievingLocation ? 'btn btn-loading' : 'btn'} onClick={Actions.selectRestaurant}>
            {this.props.retrievingLocation ? 'Loading...' : 'Not this restaurant'}
          </button>
          {this.props.radius > process.env.REACT_APP_MINIMUM_RADIUS && (
            <button className="btn reduce-radius" onClick={Actions.reduceSearchRadius}>
              {this.props.retrievingLocation ? 'Loading...' : "Not so far away, I'm hungry!"}
            </button>
          )}
        </div>
      </header>
    );
  }
}
