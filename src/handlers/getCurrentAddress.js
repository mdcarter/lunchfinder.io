import Request from './../utils/Request';
import Actions from './../Actions';

export default async context => {
  context.setState({ status: { fetchingData: true } });

  const address = await Request.fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${context.state.latitude},${context.state.longitude}`);

  if (address.results && address.results.length) {
    context.setState({
      address: address.results[0].formatted_address,
      status: { fetchingData: false }
    });

    if (context.state.restaurant) {
      Actions.getDirections();
    }
  } else {
    context.setState({ status: { fetchingData: false } });
  }
};
