import Request from './../utils/Request';

export default async context => {
  context.setState({ status: { fetchingData: true } });
  const data = await Request.fetch(
    `https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259
      &ll=${context.state.latitude},${context.state.longitude}
      &radius=${context.state.radius}
      &limit=20
      &intent=browse
      &client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT}
      &client_secret=${process.env.REACT_APP_FOURSQUARE_SECRET}
      &v=20170815`
  );

  if (data && data.response && data.response.venues) {
    context.setState({
      restaurant: data.response.venues[Math.floor(Math.random() * data.response.venues.length)],
      status: { fetchingData: false }
    });
  }
  // Once the restaurant is selected, make a call to the venue endpoint to get more details https://developer.foursquare.com/docs/responses/venue
};
