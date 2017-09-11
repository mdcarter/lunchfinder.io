import Request from './../utils/Request';
import Query from 'query-string';

export default async (context, origin, destination) => {
  console.log(context, origin, destination);
  const params = {
    categoryId: process.env.REACT_APP_FOURSQUARE_FOOD_CATEGORY,
    ll: context.state.latitude + ',' + context.state.longitude,
    radius: context.state.radius,
    limit: process.env.REACT_APP_DEFAULT_LIMIT,
    intent: 'browse'
  };

  const direction = await Request.fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}`);
  console.log(direction);
};
