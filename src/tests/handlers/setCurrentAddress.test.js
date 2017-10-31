import { expect } from 'chai';
import sinon from 'sinon';

import setCurrentAddress from './../../handlers/setCurrentAddress';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {}
};

describe('setCurrentAddress handler', () => {
  it('should set address', () => {
    const address = '9 rue du Restaurant';
    setCurrentAddress(context, address);
    expect(context.state.address).to.equal(address);
  });
});
