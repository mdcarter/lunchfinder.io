import React from 'react';
import Reflux from 'reflux';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import Informations from './Informations';
import Preview from './Preview';
import Store from './../Store';
import History from './../History';
import Actions from './../Actions';
import Theme from './../styles/map';

import './../styles/Restaurant.css';

export default class Restaurant extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    if (!this.state.restaurant && this.props.match && this.props.match.params.id) {
      Actions.getRestaurant(this.props.match.params.id);
    }
    if (!this.state.restaurant && (!this.props.match || !this.props.match.params.id)) {
      History.push('/');
    }
    if (!this.state.latitude) {
      Actions.getCurrentLocation();
    }
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (!this.state.restaurant) {
      return null;
    }

    let coords;
    if (this.state.restaurant.location && this.state.restaurant.location.lat && this.state.restaurant.location.lng) {
      coords = { lat: this.state.restaurant.location.lat, lng: this.state.restaurant.location.lng };
    }

    const options = {
      disableDefaultUI: true,
      mapTypeControl: false,
      draggable: false,
      styles: Theme
    };

    return (
      <div className="page-restaurant">
        <section className="restaurant">
          <Informations {...this.state} />
          <Preview {...this.state} />
        </section>
        <section className="map">
          <a className="go" target="_blank" href={this.state.restaurant.directions}>
            <button>Go !</button>
          </a>
          {coords && (
            <GoogleMapReact center={coords} defaultZoom={16} options={options}>
              <Marker lat={this.state.restaurant.location.lat} lng={this.state.restaurant.location.lng} link={this.state.restaurant.directions} />
            </GoogleMapReact>
          )}
        </section>
        <footer />
      </div>
    );
  }
}
