/*global google */

export default (context, originLatitude, originLongitude, destinationLatitude, destinationLongitude) => {
  const origin = new google.maps.LatLng(originLatitude, originLongitude);
  const destination = new google.maps.LatLng(destinationLatitude, destinationLongitude);
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
      }
    }
  );
};
