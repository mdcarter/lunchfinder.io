import Request from './../utils/Request';

export default async context => {
  context.setState({ status: { fetchingData: true } });

  const address = await Request.fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${context.state.latitude},${context.state.longitude}`);

  if (address.results) {
    context.setState({
      address: address.results[0].formatted_address,
      status: { fetchingData: false }
    });
  } else {
    context.setState({ status: { fetchingData: false } });
  }
};
