import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Home from './../../components/Home';
import Actions from './../../Actions';

describe('<Home />', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('always renders a div', () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({ restaurant: true });
    expect(wrapper.find('Redirect').length).toBeGreaterThan(0);
  });

  it('should call componentWillUnmount once and Reflux componentWillUnmount method', () => {
    sinon.spy(Home.prototype, 'componentWillUnmount');
    sinon.spy(Reflux.Component.prototype, 'componentWillUnmount');

    const wrapper = shallow(<Home />).unmount();

    expect(Home.prototype.componentWillUnmount.calledOnce).toEqual(true);
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).toEqual(true);
  });
});
