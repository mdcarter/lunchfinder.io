import Reflux from 'reflux';
import Actions from './Actions';
import Handlers from './Handlers';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      retrievingLocation: false,
      fetchingData: false,
      radius: process.env.REACT_APP_DEFAULT_RADIUS,
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

  onSelectRestaurant() {
    this.handlers.selectRestaurant(this);
  }

  onGetRestaurant(id) {
    this.handlers.getRestaurant(this, id);
  }

  onGetDirections() {
    this.handlers.getDirections(this);
  }

  onSetDirectionsLink() {
    this.handlers.setDirectionsLink(this);
  }

  onReduceSearchRadius() {
    this.handlers.reduceSearchRadius(this);
  }

  onExcludeCurrentCategory() {
    this.handlers.excludeCurrentCategory(this);
  }
}
