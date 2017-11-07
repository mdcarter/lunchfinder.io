import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import reduceSearchRadius from './../../handlers/reduceSearchRadius';

let minimumRadius = 200;
let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {
    radius: 400,
    restaurant: {
      distanceInMeters: 600
    }
  }
};

describe('reduceSearchRadius handler', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(Actions, 'selectRestaurant');
    process.env = {
      REACT_APP_MINIMUM_RADIUS: minimumRadius
    };
  });

  afterEach(() => {
    sandbox.restore();
    process.env = undefined;
  });

  it('should reduce the radius by 200 meters', () => {
    reduceSearchRadius(context);
    expect(context.state.radius).to.equal(400);
  });

  it('should reduce the radius by 200 meters even if distanceInMeters is not set', () => {
    let newContext = context;
    newContext.state.restaurant.distanceInMeters = null;

    reduceSearchRadius(newContext);
    expect(context.state.radius).to.equal(200);
  });

  it('should reduce the radius to the minimum if distanceInMeters is already too low', () => {
    let newContext = context;
    newContext.state.restaurant.distanceInMeters = 100;

    reduceSearchRadius(newContext);
    expect(context.state.radius).to.equal(minimumRadius);
  });

  it('should call the selectRestaurant action', () => {
    reduceSearchRadius(context);
    expect(Actions.selectRestaurant.calledOnce).equal(true);
  });

  it('should not call the selectRestaurant action if no restaurant is present', () => {
    reduceSearchRadius({ state: {} });
    expect(Actions.selectRestaurant.calledOnce).equal(false);
  });
});
