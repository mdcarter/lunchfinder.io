import Reflux from 'reflux';
import Actions from './Actions';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      locationUnavailable: null,
      radius: 800,
      latitude: null,
      longitude: null,
      restaurant: null
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
          Actions.getRestaurant();
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

  onGetRestaurant() {
    fetch(
      `https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259
        &ll=${this.state.latitude},${this.state.longitude}
        &radius=${this.state.radius}
        &limit=15
        &intent=browse
        &client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT}
        &client_secret=${process.env.REACT_APP_FOURSQUARE_SECRET}
        &v=20170815`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const restaurants = data.response.venues;
        this.setState({
          restaurant:
            restaurants[Math.floor(Math.random() * (restaurants.length + 1))]
        });
      });
  }
}
