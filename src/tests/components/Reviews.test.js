import React from 'react';
import { shallow } from 'enzyme';

import Reviews from './../../components/Reviews';

describe('<Reviews />', () => {
  const state = {
    restaurant: {
      tips: {
        count: 16,
        groups: [
          {
            items: [{ text: 'text' }]
          }
        ]
      }
    }
  };

  it('should renders a div if tips are present', () => {
    const wrapper = shallow(<Reviews {...state} />);
    expect(wrapper.find('div.restaurant-reviews').length).toBeGreaterThan(0);
  });
});
