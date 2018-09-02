export default (context, latitude, longitude) => {
  context.setState({
    latitude: latitude,
    longitude: longitude,
    error: null
  });
};
