import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Restaurant from './../../components/Restaurant';
import Actions from './../../Actions';
import History from './../../History';

describe('<Restaurant />', () => {
  let sandbox;
  const restaurant = { id: 1, location: { lat: 1.5, lng: 6.7 } };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(History, 'push');
    sandbox.spy(Restaurant.prototype, 'componentDidMount');
    sandbox.spy(Restaurant.prototype, 'componentWillUnmount');
    sandbox.spy(Reflux.Component.prototype, 'componentWillUnmount');
    sandbox.spy(Actions, 'getRestaurant');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should renders a div if a restaurant is present', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.setState({ restaurant: restaurant });
    expect(wrapper.find('div.page-restaurant').length).toBeGreaterThan(0);
  });

  it('should render a Google Map if a restaurant is present with latitude and longitude', () => {
    const wrapper = mount(<Restaurant />);
    wrapper.setState({ restaurant: restaurant });
    expect(wrapper.find('div.google-map-react').length).toBeGreaterThan(0);
  });

  it('should not render a Google Map if a restaurant is present without latitude and longitude', () => {
    const wrapper = shallow(<Restaurant />);
    const withoutLocation = { id: 1 };
    wrapper.setState({ restaurant: withoutLocation });
    expect(wrapper.find('div.google-map-react').length).toEqual(0);
  });

  it('should call getRestaurant Action if a params is present and restaurant absent', () => {
    const params = { params: { id: 2 } };
    const wrapper = shallow(<Restaurant match={params} />);

    expect(Restaurant.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Actions.getRestaurant.calledOnce).toEqual(true);
  });

  it('should redirect to home if no params is present and restaurant absent', () => {
    const wrapper = shallow(<Restaurant />);

    expect(History.push.calledOnce).toEqual(true);
  });

  it('should redirect to home if no id params is present and restaurant absent', () => {
    const params = { params: { toto: 'tutu' } };
    const wrapper = shallow(<Restaurant match={params} />);

    expect(History.push.calledOnce).toEqual(true);
  });

  it('should call componentWillUnmount once and Reflux componentWillUnmount method', () => {
    const wrapper = shallow(<Restaurant />).unmount();

    expect(Restaurant.prototype.componentWillUnmount.calledOnce).toEqual(true);
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).toEqual(true);
  });
});
