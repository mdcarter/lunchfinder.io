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

jest.mock('google-map-react', () => {
  return props => {
    return <div />;
  };
});

jest.mock('./utils/Request', () => {
  class Request {
    fetch(url, options) {
      return Promise.resolve({});
    }
  }
  return new Request();
});
