import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Informations from './../../components/Informations';
import Actions from './../../Actions';
import History from './../../History';

describe('<Informations />', () => {
  const state = { restaurant: { id: 1, location: { lat: 0, lng: 0 } } };

  it('should renders a div if a restaurant is present', () => {
    const wrapper = shallow(<Informations {...state} />);
    expect(wrapper.find('section.restaurant').length).toBeGreaterThan(0);
  });

  it('should renders a rating div if the restaurant has it', () => {
    const withRating = { ...state, ...{ restaurant: { rating: 5 } } };
    const wrapper = shallow(<Informations {...withRating} />);
    expect(wrapper.find('span.rating').length).toBeGreaterThan(0);
  });

  it('should renders an image if a best photo is present', () => {
    const withPhoto = { ...state, ...{ restaurant: { bestPhoto: { prefix: 'prefix/', suffix: '/suffix' } } } };
    const wrapper = shallow(<Informations {...withPhoto} />);
    expect(wrapper.find('img.picture').prop('src')).toEqual('prefix/120x120/suffix');
  });
});
