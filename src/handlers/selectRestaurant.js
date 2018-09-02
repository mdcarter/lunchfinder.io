import Actions from './../Actions';
import Query from 'query-string';

export default async context => {
  context.setState({
    retrievingLocation: true
  });

  const params = {
    categoryId: process.env.REACT_APP_FOURSQUARE_FOOD_CATEGORY,
    ll: context.state.latitude + ',' + context.state.longitude,
    radius: context.state.radius,
    limit: process.env.REACT_APP_DEFAULT_LIMIT,
    intent: 'browse'
  };

  const credentials = {
    client_id: process.env.REACT_APP_FOURSQUARE_CLIENT,
    client_secret: process.env.REACT_APP_FOURSQUARE_SECRET,
    v: new Date()
      .toISOString()
      .slice(0, 10)
      .split('-')
      .join('')
  };

  const res = await fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/search?${Query.stringify({ ...params, ...credentials })}`);
  const restaurants = await res.json();

  if (restaurants && restaurants.response && restaurants.response.venues) {
    const restaurant_id = restaurants.response.venues[Math.floor(Math.random() * restaurants.response.venues.length)].id;
    Actions.getRestaurant(restaurant_id);
  } else {
    context.setState({
      error: 'You need to specify an address',
      retrievingLocation: false
    });
  }
};
