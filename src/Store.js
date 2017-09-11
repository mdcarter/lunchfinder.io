import Reflux from 'reflux';
import Actions from './Actions';
import Handlers from './Handlers';

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

    this.handlers = new Handlers();
    this.listenables = [Actions];
  }

  onGetCurrentLocation() {
    this.handlers.getCurrentLocation(this);
  }

  onSetCurrentLocation(latitude, longitude) {
    this.handlers.setCurrentLocation(this, latitude, longitude);
  }

  onGetCurrentAddress() {
    this.handlers.getCurrentAddress(this);
  }

  onSetCurrentAddress(address) {
    this.handlers.setCurrentAddress(this, address);
  }

  onGetRestaurant() {
    this.handlers.getRestaurant(this);
  }
}
