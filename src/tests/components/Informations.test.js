import React from 'react';
import { shallow } from 'enzyme';

import Informations from './../../components/Informations';

describe('<Informations />', () => {
  const state = { restaurant: { id: 1, location: { lat: 0, lng: 0 } } };

  it('should renders a div if a restaurant is present', () => {
    const wrapper = shallow(<Informations {...state} />);
    expect(wrapper.find('header.restaurant-header').length).toBeGreaterThan(0);
  });

  it('should renders a rating container if the restaurant has ratings', () => {
    const withRating = { ...state, ...{ restaurant: { rating: 5 } } };
    const wrapper = shallow(<Informations {...withRating} />);
    expect(wrapper.find('div.rating-block').length).toBeGreaterThan(0);
  });

  it('should renders a loading button if location is pending', () => {
    const withLoading = { ...state, ...{ radius: 800, retrievingLocation: true } };
    const wrapper = shallow(<Informations {...withLoading} />);
    expect(
      wrapper
        .find('div.actions .btn')
        .first()
        .props().className
    ).toEqual('btn btn-loading go');
  });

  it('should renders a reduce radius button if radius is not too low', () => {
    const withRadius = { ...state, ...{ radius: 800 } };
    process.env.REACT_APP_MINIMUM_RADIUS = 600;
    const wrapper = shallow(<Informations {...withRadius} />);
    expect(wrapper.find('button.reduce-radius').length).toBeGreaterThan(0);
  });
});
