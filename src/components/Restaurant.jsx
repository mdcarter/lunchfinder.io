import React from 'react';
import Reflux from 'reflux';
import { Redirect } from 'react-router';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import Store from './../Store';
import Actions from './../Actions';
import Theme from './../styles/map';

import './../styles/Restaurant.css';

export default class Restaurant extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    if (!this.state.restaurant && this.props.match.params.id) {
      Actions.getRestaurant(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (this.state.restaurant && this.props.match.params.id && this.props.match.params.id !== this.state.restaurant.id) {
      return <Redirect to={`/restaurant/${this.state.restaurant.id}`} push={false} />;
    }

    if (!this.state.restaurant) {
      if (this.props.match.params.id) {
        return null;
      } else {
        return <Redirect to="/" push={true} />;
      }
    }

    const coords = { lat: this.state.restaurant.location.lat, lng: this.state.restaurant.location.lng };
    const options = {
      disableDefaultUI: true,
      mapTypeControl: false,
      draggable: false,
      styles: Theme
    };

    return (
      <div className="page-restaurant">
        <section className="restaurant">
          <header>
            <h3>Votre restaurant du jour</h3>
            <h2>{this.state.restaurant.name}</h2>
            <div className="subtitle">
              {this.state.restaurant.rating && (
                <span className="rating">
                  <strong>{this.state.restaurant.rating}/10</strong> ({this.state.restaurant.ratingSignals} avis)
                </span>
              )}
            </div>
          </header>

          <ul className="informations">
            <li>
              {this.state.restaurant.distance && <span>{this.state.restaurant.distance} - </span>}
              {this.state.restaurant.location.address}
            </li>
            {this.state.restaurant.duration && <li>{this.state.restaurant.duration} à pied</li>}
            {this.state.restaurant.contact &&
            this.state.restaurant.contact.phone && (
              <li>
                <a href={`tel:${this.state.restaurant.contact.phone}`}>{this.state.restaurant.contact.phone}</a>
              </li>
            )}
            <li>{this.state.restaurant.categories[0].name}</li>
            {this.state.restaurant.duration && (
              <li>
                <a href={this.state.restaurant.url}>{this.state.restaurant.url}</a>
              </li>
            )}
          </ul>

          <div className="actions">
            <a target="_blank" href={this.state.restaurant.directions}>
              Y aller
            </a>
            <button onClick={Actions.getRestaurant}>Pas ce type de cuisine</button>
            {this.state.radius > process.env.REACT_APP_MINIMUM_RADIUS && <button onClick={Actions.reduceSearchRadius}>Moins loin de moi</button>}
            <button onClick={Actions.selectRestaurant}>Pas ce restaurant</button>
          </div>
        </section>

        <section className="map">
          {coords && (
            <GoogleMapReact center={coords} defaultZoom={16} options={options}>
              <Marker lat={this.state.restaurant.location.lat} lng={this.state.restaurant.location.lng} link={this.state.restaurant.directions} />
            </GoogleMapReact>
          )}
        </section>
      </div>
    );
  }
}
