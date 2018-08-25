import React from 'react';
import { mount } from 'enzyme';

import Icons from './../../components/Icons';

describe('<Icons />', () => {
  it('should always renders a svg', () => {
    const wrapper = mount(<Icons name="Arrow" />);
    expect(wrapper.find('svg').length).toBeGreaterThan(0);
  });

  it('should renders a svg even if no name is provided', () => {
    const wrapper = mount(<Icons />);
    expect(wrapper.find('svg').length).toBeGreaterThan(0);
  });
});
