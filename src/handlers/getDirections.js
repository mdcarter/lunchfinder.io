/*global google */

import Actions from './../Actions';

export default context => {
  const origin = new google.maps.LatLng(context.state.latitude, context.state.longitude);
  const destination = new google.maps.LatLng(context.state.restaurant.location.lat, context.state.restaurant.location.lng);
  const service = new google.maps.DistanceMatrixService();

  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: 'WALKING'
    },
    (response, status) => {
      if (response && response.rows && response.rows[0].elements && response.rows[0].elements[0].duration) {
        let restaurant = context.state.restaurant;

        restaurant.duration = response.rows[0].elements[0].duration.text;
        restaurant.distance = response.rows[0].elements[0].distance.text;

        context.setState({
          restaurant: restaurant
        });

        Actions.setDirectionsLink();
      }
    }
  );
};
