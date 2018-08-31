import Query from 'query-string';
import History from '../History';

export default context => {
  let restaurant = context.state.restaurant;

  const params = {
    api: 1,
    origin: `${context.state.address}`,
    destination: `${restaurant.name} ${restaurant.location.address} ${restaurant.location.city} ${restaurant.location.country}`,
    travelmode: 'walking'
  };

  restaurant.directions = `https://www.google.com/maps/dir/?${Query.stringify(params)}`;

  console.log(restaurant.directions);

  context.setState({
    restaurant: restaurant
  });

  History.push(`/restaurant/${restaurant.id}`);
};
