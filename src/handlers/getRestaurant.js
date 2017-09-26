import Request from './../utils/Request';
import Actions from './../Actions';
import Query from 'query-string';

export default async (context, id) => {
  context.setState({ status: { fetchingData: true } });

  const credentials = {
    client_id: process.env.REACT_APP_FOURSQUARE_CLIENT,
    client_secret: process.env.REACT_APP_FOURSQUARE_SECRET,
    v: new Date()
      .toISOString()
      .slice(0, 10)
      .split('-')
      .join('')
  };

  const restaurant = await Request.fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/${id}?${Query.stringify(credentials)}`);

  context.setState({
    restaurant: restaurant.response.venue,
    status: { fetchingData: false }
  });

  if (context.state.address) {
    Actions.getDirections();
  }
};
