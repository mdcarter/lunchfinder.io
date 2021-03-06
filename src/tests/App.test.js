import React from 'react';
import Reflux from 'reflux';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from './../App';
import Actions from './../Actions';

describe('<App />', () => {
  it('should always renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.container-app').length).toBeGreaterThan(0);
  });

  it('should call componentWillUnmount once and Reflux componentWillUnmount method', () => {
    sinon.spy(App.prototype, 'componentWillUnmount');
    sinon.spy(Reflux.Component.prototype, 'componentWillUnmount');

    shallow(<App />).unmount();

    expect(App.prototype.componentWillUnmount.calledOnce).toEqual(true);
    expect(Reflux.Component.prototype.componentWillUnmount.calledOnce).toEqual(true);
  });
});
