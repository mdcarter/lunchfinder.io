import Actions from './../Actions';
import Query from 'query-string';

export default async (context, id) => {
  context.setState({ status: { fetchingData: true } });

  const credentials = {
    client_id: process.env.REACT_APP_FOURSQUARE_CLIENT,
    client_secret: process.env.REACT_APP_FOURSQUARE_SECRET,
    locale: 'en',
    v: new Date()
      .toISOString()
      .slice(0, 10)
      .split('-')
      .join('')
  };

  const res = await fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/${id}?${Query.stringify(credentials)}`);
  const restaurant = await res.json();

  if (restaurant.response && restaurant.response.venue) {
    context.setState({
      restaurant: restaurant.response.venue,
      retrievingLocation: false
    });
  }

  if (context.state.address) {
    Actions.getDirections();
  }
};
