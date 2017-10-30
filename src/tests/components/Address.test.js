import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Address from './../../components/Address';
import Actions from './../../Actions';

describe('<Address />', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a PlacesAutocomplete component', () => {
    const wrapper = mount(<Address />);
    expect(wrapper.find('div.react-places-autocomplete').length).toBeGreaterThan(0);
  });
});
