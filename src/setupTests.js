import 'raf/polyfill';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';

configure({ adapter: new Adapter() });

jest.mock('google-map-react');

GoogleMapReact.mockImplementation(() => {
  return {
    render: () => {
      return <div className="google-map-react" />;
    }
  };
});

jest.mock('react-places-autocomplete');

PlacesAutocomplete.mockImplementation(() => {
  return {
    render: () => {
      return <div className="react-places-autocomplete" />;
    }
  };
});

geocodeByAddress.mockImplementation(() => {
  return new Promise(resolve => {
    resolve(['address']);
  });
});

getLatLng.mockImplementation(() => {
  return new Promise(resolve => {
    resolve({
      lat: 1,
      lng: 2
    });
  });
});

window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => [] }));
