import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import getCurrentAddress from './../../handlers/getCurrentAddress';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {
    restaurant: {}
  }
};

describe('getCurrentAddress handler', () => {
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

  it('should call getDirections action if address is provided and a restaurant is present', async () => {
    const res = new window.Response('{"results": [{ "formatted_address": "adresse" }]}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await getCurrentAddress(context);
    expect(context.state.fetchingData).to.equal(false);
    expect(Actions.getDirections.calledOnce).equal(true);
  });

  it('should not call getDirections action if address is provided and no restaurant is present', async () => {
    const res = new window.Response('{"results": [{ "formatted_address": "adresse" }]}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    let emptyState = context;
    emptyState.state.restaurant = null;

    await getCurrentAddress(emptyState);
    expect(context.state.fetchingData).to.equal(false);
    expect(Actions.getDirections.calledOnce).equal(false);
  });

  it('should set fetchingData to false even if the call fail', async () => {
    const res = new window.Response('{}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await getCurrentAddress(context);
    expect(context.state.fetchingData).to.equal(false);
  });
});
