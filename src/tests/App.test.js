import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './../App';

jest.mock('./../components/Home', () => {
  return 'div';
});

jest.mock('./../components/Restaurant', () => {
  return 'div';
});

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('calls Reflux.componentWillUnmount when unmounted', () => {
    sinon.spy(Reflux.Component.prototype, 'componentWillUnmount');
    mount(<App />).unmount();
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).to.equal(true);
  });
});
