import React from 'react';
import Reflux from 'reflux';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Home from './../../components/Home';

describe('<Home />', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(Home.prototype, 'componentWillUnmount');
    sandbox.spy(Reflux.Component.prototype, 'componentWillUnmount');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should always renders a div', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div.page-home').length).toBeGreaterThan(0);
  });

  it('should renders a loading button if location is pending', () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({ radius: 800, retrievingLocation: true });
    expect(
      wrapper
        .find('div.page-home button')
        .first()
        .props().className
    ).toEqual('find btn-loading');
  });

  it('should call componentWillUnmount once and Reflux componentWillUnmount method', () => {
    shallow(<Home />).unmount();

    expect(Home.prototype.componentWillUnmount.calledOnce).toEqual(true);
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).toEqual(true);
  });
});
