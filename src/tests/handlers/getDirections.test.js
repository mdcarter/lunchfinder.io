import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import getDirections from './../../handlers/getDirections';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {
    address: 'address',
    restaurant: {
      location: {
        lat: 1,
        lng: 2
      }
    }
  }
};

describe('getDirections handler', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    window.google = {
      maps: {
        DistanceMatrixService: function() {
          return {
            getDistanceMatrix: (params, callback) => {
              callback({
                rows: [{ elements: [{ duration: { text: '1min' }, distance: { text: '1min', value: 1 } }] }]
              });
            }
          };
        },
        LatLng: function() {}
      }
    };
    sandbox.spy(Actions, 'setDirectionsLink');
  });

  afterEach(() => {
    sandbox.restore();
    window.google = undefined;
  });

  it('should call setDirectionsLink action if restaurant location is present', async () => {
    getDirections(context);
    expect(Actions.setDirectionsLink.calledOnce).equal(true);
  });

  it('should not call setDirectionsLink action if no restaurant location present', async () => {
    getDirections({ state: {} });
    expect(Actions.setDirectionsLink.calledOnce).equal(false);
  });

  it('should not call setDirectionsLink action if google maps give no answser', async () => {
    window.google.maps.DistanceMatrixService = function() {
      return {
        getDistanceMatrix: (params, callback) => {
          callback(null);
        }
      };
    };

    getDirections(context);
    expect(Actions.setDirectionsLink.calledOnce).equal(false);
  });
});
