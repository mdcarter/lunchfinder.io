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

  onGetCategories() {
    fetch(
      `https://api.foursquare.com/v2/venues/categories?client_id=${process.env
        .REACT_APP_FOURSQUARE_CLIENT}&client_secret=${process.env
        .REACT_APP_FOURSQUARE_SECRET}&v=20170813`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const categories = data.response.categories
          .find(category => {
            return (
              category.id === process.env.REACT_APP_FOURSQUARE_FOOD_CATEGORY
            );
          })
          .categories.map(category => {
            return { id: category.id, name: category.shortName };
          });
        console.log(categories);
        this.setState({ categories: categories });
      });
  }
}
