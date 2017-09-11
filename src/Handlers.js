import getCurrentLocation from './handlers/getCurrentLocation';
import setCurrentLocation from './handlers/setCurrentLocation';
import getCurrentAddress from './handlers/getCurrentAddress';
import setCurrentAddress from './handlers/setCurrentAddress';
import getRestaurant from './handlers/getRestaurant';
import getDirections from './handlers/getDirections';

class Handlers {}

Handlers.prototype.getCurrentLocation = getCurrentLocation;
Handlers.prototype.setCurrentLocation = setCurrentLocation;
Handlers.prototype.getCurrentAddress = getCurrentAddress;
Handlers.prototype.setCurrentAddress = setCurrentAddress;
Handlers.prototype.getRestaurant = getRestaurant;
Handlers.prototype.getDirections = getDirections;

export default Handlers;
