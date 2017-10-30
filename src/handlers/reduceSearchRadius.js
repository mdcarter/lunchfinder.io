import Actions from '../Actions';

export default context => {
  let radius = (context.state.restaurant.distanceInMeters ? context.state.restaurant.distanceInMeters : context.state.radius) - 200;

  if (radius < process.env.REACT_APP_MINIMUM_RADIUS) {
    radius = process.env.REACT_APP_MINIMUM_RADIUS;
  }

  context.setState({ radius: radius });

  Actions.selectRestaurant();
};
