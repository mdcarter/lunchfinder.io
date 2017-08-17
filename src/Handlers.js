import getCurrentLocation from './handlers/getCurrentLocation';
import setCurrentLocation from './handlers/setCurrentLocation';
import getCurrentAddress from './handlers/getCurrentAddress';
import setCurrentAddress from './handlers/setCurrentAddress';
import getRestaurant from './handlers/getRestaurant';

class Handlers {}

Handlers.prototype.getCurrentLocation = getCurrentLocation;
Handlers.prototype.setCurrentLocation = setCurrentLocation;
Handlers.prototype.getCurrentAddress = getCurrentAddress;
Handlers.prototype.setCurrentAddress = setCurrentAddress;
Handlers.prototype.getRestaurant = getRestaurant;

export default Handlers;
