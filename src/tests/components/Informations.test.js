import React from 'react';
import { shallow } from 'enzyme';

import Informations from './../../components/Informations';

describe('<Informations />', () => {
  const state = { restaurant: { id: 1, location: { lat: 0, lng: 0 } } };

  it('should renders a div if a restaurant is present', () => {
    const wrapper = shallow(<Informations {...state} />);
    expect(wrapper.find('header.restaurant-header').length).toBeGreaterThan(0);
  });

  it('should renders an image if a best photo is present', () => {
    const withPhoto = { ...state, ...{ restaurant: { bestPhoto: { prefix: 'prefix/', suffix: '/suffix' } } } };
    const wrapper = shallow(<Informations {...withPhoto} />);
    expect(wrapper.find('img.picture').prop('src')).toEqual('prefix/120x120/suffix');
  });

  it('should renders a rating container if the restaurant has ratings', () => {
    const withRating = { ...state, ...{ restaurant: { rating: 5 } } };
    const wrapper = shallow(<Informations {...withRating} />);
    expect(wrapper.find('span.rating-block').length).toBeGreaterThan(0);
  });

  it('should renders a distance container if the restaurant has distance', () => {
    const withDistance = { ...state, ...{ restaurant: { location: { address: '9 rue' }, distance: '0,7 km' } } };
    const wrapper = shallow(<Informations {...withDistance} />);
    expect(wrapper.find('li.distance-block').length).toBeGreaterThan(0);
  });

  it('should renders a duration container if the restaurant has ratings', () => {
    const withDuration = { ...state, ...{ restaurant: { duration: '9min' } } };
    const wrapper = shallow(<Informations {...withDuration} />);
    expect(wrapper.find('li.duration-block').length).toBeGreaterThan(0);
  });

  it('should renders a hours container if the restaurant has hours', () => {
    const withHours = { ...state, ...{ restaurant: { hours: '22h' } } };
    const wrapper = shallow(<Informations {...withHours} />);
    expect(wrapper.find('li.hours-block').length).toBeGreaterThan(0);
  });

  it('should renders a contact container if the restaurant has contact', () => {
    const withContact = { ...state, ...{ restaurant: { contact: { phone: '+33' } } } };
    const wrapper = shallow(<Informations {...withContact} />);
    expect(wrapper.find('li.contact-block').length).toBeGreaterThan(0);
  });

  it('should renders a category container if the restaurant has category', () => {
    const withCategory = { ...state, ...{ restaurant: { categories: [{ name: 'cateogry' }] } } };
    const wrapper = shallow(<Informations {...withCategory} />);
    expect(wrapper.find('li.category-block').length).toBeGreaterThan(0);
  });

  it('should renders a url container if the restaurant has url', () => {
    const withUrl = { ...state, ...{ restaurant: { url: 'https://' } } };
    const wrapper = shallow(<Informations {...withUrl} />);
    expect(wrapper.find('li.url-block').length).toBeGreaterThan(0);
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
