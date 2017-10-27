import { expect } from 'chai';
import sinon from 'sinon';

import setDirectionsLink from './../../handlers/setDirectionsLink';

let context = {
  setState(state) {},
  state: {
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    restaurant: {
      name: 'Enishi',
      location: {
        address: '67 Rue Labat',
        city: 'Paris',
        country: 'France'
      }
    }
  }
};

describe.only('setDirectionsLink handler', () => {
  it('set directions link in state', () => {
    setDirectionsLink(context);
    expect(context.state.restaurant.directions).not.equal(false);
  });
});
