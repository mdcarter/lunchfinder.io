import Reflux from 'reflux';

export default Reflux.createActions([
  'getCurrentLocation',
  'setCurrentLocation',
  'getCurrentAddress',
  'setCurrentAddress',
  'getCategories',
  'selectRestaurant',
  'getRestaurant',
  'getDirections',
  'setDirectionsLink',
  'reduceSearchRadius',
  'excludeCurrentCategory'
]);
