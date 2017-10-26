import getCurrentLocation from './handlers/getCurrentLocation';
import setCurrentLocation from './handlers/setCurrentLocation';
import getCurrentAddress from './handlers/getCurrentAddress';
import setCurrentAddress from './handlers/setCurrentAddress';
import selectRestaurant from './handlers/selectRestaurant';
import getRestaurant from './handlers/getRestaurant';
import getDirections from './handlers/getDirections';
import setDirectionsLink from './handlers/setDirectionsLink';
import reduceSearchRadius from './handlers/reduceSearchRadius';
import excludeCurrentCategory from './handlers/excludeCurrentCategory';

class Handlers {}

Handlers.prototype.getCurrentLocation = getCurrentLocation;
Handlers.prototype.setCurrentLocation = setCurrentLocation;
Handlers.prototype.getCurrentAddress = getCurrentAddress;
Handlers.prototype.setCurrentAddress = setCurrentAddress;
Handlers.prototype.selectRestaurant = selectRestaurant;
Handlers.prototype.getRestaurant = getRestaurant;
Handlers.prototype.getDirections = getDirections;
Handlers.prototype.setDirectionsLink = setDirectionsLink;
Handlers.prototype.reduceSearchRadius = reduceSearchRadius;
Handlers.prototype.excludeCurrentCategory = excludeCurrentCategory;

export default Handlers;
