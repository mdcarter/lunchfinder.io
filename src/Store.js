import Reflux from 'reflux';
import Actions from './Actions';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      locationUnavailable: null,
      latitude: null,
      longitude: null
    };

    this.listenables = [Actions];
  }

  onGetCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.setState({
            latitude: coords.latitude,
            longitude: coords.longitude
          });
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
}
