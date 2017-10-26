import Actions from '../Actions';

export default context => {
  let excludedCategories = context.state.excludedCategories;

  if (context.state.restaurant.categories && context.state.restaurant.categories[0]) {
    excludedCategories.push(context.state.restaurant.categories[0]);
  }

  context.setState({ excludedCategories: excludedCategories });

  Actions.selectRestaurant();
};
