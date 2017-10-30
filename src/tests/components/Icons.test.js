import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Icons from './../../components/Icons';
import Actions from './../../Actions';

describe('<Icons />', () => {
  it('should always renders a svg', () => {
    const wrapper = mount(<Icons name="Url" />);
    expect(wrapper.find('svg').length).toBeGreaterThan(0);
  });

  it('should renders a svg even if no name is provided', () => {
    const wrapper = mount(<Icons />);
    expect(wrapper.find('svg').length).toBeGreaterThan(0);
  });
});
