import 'raf/polyfill';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-places-autocomplete', () => {
  return props => {
    return <div />;
  };
});
