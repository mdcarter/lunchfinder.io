import { expect } from 'chai';
import sinon from 'sinon';

import Actions from './../../Actions';
import selectRestaurant from './../../handlers/selectRestaurant';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {}
};

describe('selectRestaurant handler', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.spy(Actions, 'getRestaurant');
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    sandbox.restore();
    window.fetch.restore();
  });

  it('should call getRestaurant action if restaurants are present', async () => {
    const res = new window.Response('{"response": { "venues": [{ "id": 1 }] }}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await selectRestaurant(context);
    expect(Actions.getRestaurant.calledOnce).equal(true);
  });

  it('should set state to error if no restaurants are present', async () => {
    const res = new window.Response('{}', {
      status: 200
    });
    window.fetch.returns(Promise.resolve(res));

    await selectRestaurant(context);
    expect(Actions.getRestaurant.calledOnce).equal(false);
    expect(context.state.error).to.equal('You need to specify an address');
  });
});
