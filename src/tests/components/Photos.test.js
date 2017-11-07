import React from 'react';
import { shallow } from 'enzyme';

import Photos from './../../components/Photos';

describe('<Photos />', () => {
  const state = {
    restaurant: {
      photos: {
        count: 16,
        groups: [
          {
            items: [{ suffix: 'suffix', prefix: 'prefix' }]
          }
        ]
      }
    }
  };

  it('should renders a ul if photos are present', () => {
    const wrapper = shallow(<Photos {...state} />);
    expect(wrapper.find('ul.restaurant-photos').length).toBeGreaterThan(0);
  });
});
