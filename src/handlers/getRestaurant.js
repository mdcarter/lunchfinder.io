import Request from './../utils/Request';
import Query from 'query-string';

export default async context => {
  context.setState({ status: { fetchingData: true } });

  const params = {
    categoryId: process.env.REACT_APP_FOURSQUARE_FOOD_CATEGORY,
    ll: context.state.latitude + ',' + context.state.longitude,
    radius: context.state.radius,
    limit: 25,
    intent: 'browse',
    client_id: process.env.REACT_APP_FOURSQUARE_CLIENT,
    client_secret: process.env.REACT_APP_FOURSQUARE_SECRET,
    v: '20170815'
  };

  const data = await Request.fetch(`${process.env.REACT_APP_FOURSQUARE_BASE_URL}venues/search?${Query.stringify(params)}`);
  if (data && data.response && data.response.venues) {
    context.setState({
      restaurant: data.response.venues[Math.floor(Math.random() * data.response.venues.length)],
      status: { fetchingData: false }
    });
  }
  // Once the restaurant is selected, make a call to the venue endpoint to get more details https://developer.foursquare.com/docs/responses/venue
};
