import Reflux from 'reflux';
import Request from './Request';
import Actions from './Actions';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      status: {
        retrievingLocation: false,
        fetchingData: false
      },
      locationUnavailable: null,
      radius: 500,
      address: null,
      latitude: null,
      longitude: null,
      restaurant: null
    };

    this.listenables = [Actions];
  }

  onGetCurrentLocation() {
    this.setState({ status: { retrievingLocation: true } });
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.setState({
            latitude: coords.latitude,
            longitude: coords.longitude,
            status: {
              retrievingLocation: false
            }
          });
          Actions.getCurrentAddress();
        },
        error => {
          this.setState({ locationUnavailable: true });
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      this.setState({ locationUnavailable: true });
    }
  }

  onSetCurrentLocation(latitude, longitude) {
    this.setState({
      latitude: latitude,
      longitude: longitude
    });
  }

  async onGetCurrentAddress() {
    this.setState({ status: { fetchingData: true } });
    const address = await Request.fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}`);
    this.setState({
      address: address.results[0].formatted_address,
      status: { fetchingData: false }
    });
  }

  onSetCurrentAddress(address) {
    this.setState({ address: address });
  }

  async onGetRestaurant() {
    this.setState({ status: { fetchingData: true } });
    const data = await Request.fetch(
      `https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259
        &ll=${this.state.latitude},${this.state.longitude}
        &radius=${this.state.radius}
        &limit=20
        &intent=browse
        &client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT}
        &client_secret=${process.env.REACT_APP_FOURSQUARE_SECRET}
        &v=20170815`
    );

    if (data && data.response && data.response.venues) {
      this.setState({
        restaurant: data.response.venues[Math.floor(Math.random() * data.response.venues.length)],
        status: { fetchingData: false }
      });
    }
    // Once the restaurant is selected, make a call to the venue endpoint to get more details https://developer.foursquare.com/docs/responses/venue
  }
}
