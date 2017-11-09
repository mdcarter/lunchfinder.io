import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import getRestaurant from './../../handlers/getRestaurant';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {
    address: 'address'
  }
};

describe('getRestaurant handler', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(Actions, 'getDirections');
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    sandbox.restore();
    window.fetch.restore();
  });

  it('should set restaurant object in state if present', async () => {
    const res = new window.Response('{"response": { "venue": { "id": 1 } }}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await getRestaurant(context, 1);
    expect(context.state.restaurant).to.be.an('object');
  });

  it('should call getDirections action if address is present', async () => {
    const res = new window.Response('{"response": { "venue": { "id": 1 } }}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await getRestaurant(context, 1);
    expect(Actions.getDirections.calledOnce).equal(true);
  });
});
