import Actions from '../Actions';

export default context => {
  context.setState({ retrievingLocation: true });

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        context.setState({
          latitude: coords.latitude,
          longitude: coords.longitude,
          retrievingLocation: false
        });
        Actions.getCurrentAddress();
      },
      error => {},
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
};
