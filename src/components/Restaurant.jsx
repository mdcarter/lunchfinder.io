import React from 'react';
import Reflux from 'reflux';
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

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (!this.state.restaurant) {
      return null;
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
            <button onClick={Actions.getRestaurant}>Y aller</button>
            <button onClick={Actions.getRestaurant}>Pas ce type de cuisine</button>
            <button onClick={Actions.getRestaurant}>Moins loin de moi</button>
            <button onClick={Actions.getRestaurant}>Pas ce restaurant</button>
          </div>
        </section>

        <section className="map">
          <GoogleMapReact center={coords} defaultZoom={16} options={options}>
            <Marker lat={this.state.restaurant.location.lat} lng={this.state.restaurant.location.lng} />
          </GoogleMapReact>
        </section>
      </div>
    );
  }
}
