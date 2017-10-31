import { expect } from 'chai';
import sinon from 'sinon';

import setCurrentLocation from './../../handlers/setCurrentLocation';

let context = {
  setState(update) {
    context.state = Object.assign(context.state, update);
  },
  state: {}
};

describe('setCurrentLocation handler', () => {
  it('should set latitude and longitude', () => {
    setCurrentLocation(context, 5, 6);
    expect(context.state.latitude).to.equal(5);
    expect(context.state.longitude).to.equal(6);
  });
});
