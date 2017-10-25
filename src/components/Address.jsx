import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Address extends Component {
  constructor(props) {
    super(props);
    this.selectAddress = this.selectAddress.bind(this);
  }

  async selectAddress(address) {
    this.props.updateAddress(address);
    const addresses = await geocodeByAddress(address);
    const coordinates = await getLatLng(addresses[0]);
    this.props.updateLocation(coordinates.lat, coordinates.lng);
  }

  render() {
    const params = {
      value: this.props.address,
      onChange: this.props.updateAddress,
      placeholder: 'Enter an address...',
      autoFocus: true
    };

    return <PlacesAutocomplete inputProps={params} onSelect={this.selectAddress} googleLogo={false} />;
  }
}

Address.propTypes = {
  address: PropTypes.string,
  updateAddress: PropTypes.func,
  updateLocation: PropTypes.func
};

export default Address;
