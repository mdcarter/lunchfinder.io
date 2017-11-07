import React from 'react';
import { shallow } from 'enzyme';

import Marker from './../../components/Marker';

describe('<Marker />', () => {
  it('should always renders a div', () => {
    const wrapper = shallow(<Marker />);
    expect(wrapper.find('div.marker').length).toBeGreaterThan(0);
  });
});
