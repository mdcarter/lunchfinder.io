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
      error => {
        context.setState({
          retrievingLocation: false,
          error: "You have disabled Geolocation, we can't locate you, sorry"
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
};
