import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Restaurant from './../../components/Restaurant';
import Actions from './../../Actions';

describe('<Restaurant />', () => {
  const restaurant = { id: 1, location: { lat: 0, lng: 0 } };
  const params = { params: { id: 2 } };

  it('should renders a div if a restaurant is present', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.setState({ restaurant: restaurant });
    expect(wrapper.find('div.page-restaurant').length).toBeGreaterThan(0);
  });

  it('should call getRestaurant Action if a params is present and restaurant absent', () => {
    sinon.spy(Restaurant.prototype, 'componentDidMount');
    sinon.spy(Actions, 'getRestaurant');

    const wrapper = shallow(<Restaurant match={params} />);

    expect(Restaurant.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Actions.getRestaurant.calledOnce).toEqual(true);
  });

  xit('should redirect if a restaurant is present and not equal to the params', () => {
    const wrapper = shallow(<Restaurant match={params} />);
    wrapper.setState({ restaurant: restaurant });
    expect(wrapper.find('Redirect').length).toBeGreaterThan(0);
  });

  it('should call componentWillUnmount once and Reflux componentWillUnmount method', () => {
    sinon.spy(Restaurant.prototype, 'componentWillUnmount');
    sinon.spy(Reflux.Component.prototype, 'componentWillUnmount');

    const wrapper = shallow(<Restaurant />).unmount();

    expect(Restaurant.prototype.componentWillUnmount.calledOnce).toEqual(true);
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).toEqual(true);
  });
});
