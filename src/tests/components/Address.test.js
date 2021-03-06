import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Address from './../../components/Address';

describe('<Address />', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should always renders a div', () => {
    const wrapper = mount(<Address />);
    expect(wrapper.find('div.react-places-autocomplete').length).toBeGreaterThan(0);
  });

  it('should call Store and Google API methods when selectAddress method is called', async () => {
    let updateAddress = sinon.spy();
    let updateLocation = sinon.spy();

    const props = {
      updateAddress: updateAddress,
      updateLocation: updateLocation
    };

    const wrapper = mount(<Address {...props} />);
    await wrapper.instance().selectAddress('test');

    expect(updateAddress.calledOnce).toEqual(true);
    expect(updateLocation.calledOnce).toEqual(true);
  });
});
