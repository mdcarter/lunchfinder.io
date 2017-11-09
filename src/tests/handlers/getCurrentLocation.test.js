import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import getCurrentLocation from './../../handlers/getCurrentLocation';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {}
};

describe('getCurrentLocation handler', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(Actions, 'getCurrentAddress');
    navigator.geolocation = {
      getCurrentPosition: function(callback) {
        callback({
          coords: {
            latitude: 1,
            longitude: 2
          }
        });
      }
    };
  });

  afterEach(() => {
    sandbox.restore();
    navigator.geolocation = undefined;
  });

  it('should call getCurrentAddress action if coordinates are provided', () => {
    getCurrentLocation(context);
    expect(Actions.getCurrentAddress.calledOnce).equal(true);
  });
});
