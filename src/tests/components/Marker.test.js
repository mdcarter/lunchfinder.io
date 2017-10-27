import React from 'react';
import Reflux from 'reflux';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Marker from './../../components/Marker';
import Actions from './../../Actions';

describe('<Marker />', () => {
  it('should always renders a div', () => {
    const wrapper = shallow(<Marker />);
    expect(wrapper.find('div.marker').length).toBeGreaterThan(0);
  });
});
