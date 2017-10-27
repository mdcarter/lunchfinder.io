import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import App from './../App';
import Actions from './../Actions';

jest.mock('./../components/Home', () => {
  return props => {
    return <div />;
  };
});

describe('<App />', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should call componentDidMount once and getCurrentLocation Action', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    sinon.spy(Actions, 'getCurrentLocation');

    const wrapper = mount(<App />);

    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Actions.getCurrentLocation.calledOnce).toEqual(true);
  });
});
