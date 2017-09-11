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
        <div className="restaurant">
          <h2>Restaurant proposé: {this.state.restaurant.name}</h2>
          <button onClick={Actions.getRestaurant}>Un autre svp</button>
          <p>
            {this.state.restaurant.location.address} ({this.state.restaurant.categories[0].name})
            {this.state.restaurant.duration && <span> {this.state.restaurant.duration} à pied</span>}
            {this.state.restaurant.distance && <span> {this.state.restaurant.distance} - Adresse</span>}
          </p>
          <pre>
            <code>{JSON.stringify(this.state.restaurant, undefined, 1)}</code>
          </pre>
        </div>
        <div className="map">
          <GoogleMapReact center={coords} defaultZoom={16} options={options}>
            <Marker lat={this.state.restaurant.location.lat} lng={this.state.restaurant.location.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
