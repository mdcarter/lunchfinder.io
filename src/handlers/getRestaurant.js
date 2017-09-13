import Request from './../utils/Request';
import Actions from './../Actions';
import Query from 'query-string';

export default async context => {
  context.setState({ status: { fetchingData: true } });

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

  const restaurants = await Request.fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/search?${Query.stringify({ ...params, ...credentials })}`);

  if (restaurants && restaurants.response && restaurants.response.venues) {
    const restaurant_id = restaurants.response.venues[Math.floor(Math.random() * restaurants.response.venues.length)].id;
    const restaurant = await Request.fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/${restaurant_id}?${Query.stringify(credentials)}`);

    context.setState({
      restaurant: restaurant.response.venue,
      status: { fetchingData: false }
    });

    Actions.getDirections();
  } else {
    context.setState({
      error: 404,
      status: { fetchingData: false }
    });
  }
};
